using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using WebApiClient.Auth.Models;
using Demo.Services.Grpc;


namespace WebApiClient.Controllers
{
	[Authorize]
    [Route("api/[controller]/[action]")]
    public class DemoDataController : Controller
	{
		private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<CustomRole> _roleManager;

		public DemoDataController(
            UserManager<ApplicationUser> userManager,
            RoleManager<CustomRole> roleManager)
        {
            _userManager = userManager;
            _roleManager = roleManager;
        }

		[HttpPost]
        [ValidateAntiForgeryToken]
		public async Task<IActionResult> CreateDemoRecord([FromBody] byte[] sourcesContentsRequestBytes) {
			if (sourcesContentsRequestBytes == null) return BadRequest("No data received!");
			try {
				var record = DemoRecord.Parser.ParseFrom(sourcesContentsRequestBytes);
				if (record.Data.Text == null) return BadRequest("No data received!");
				if (record.Title == null) record.Title = "No title";
				Program.DemoManagementClient.InsertDemoRecord(record);
				return Ok("New DemoRecord created successfuly!");
			}
			catch( Exception ex) {
				return BadRequest($"Error occured on create new DemoRecord. Exception: ${ex.Message}");
			}
		}
	}
}
