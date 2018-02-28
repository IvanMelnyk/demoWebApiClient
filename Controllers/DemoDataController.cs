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
using System.IO;
using System.Net.Http;
using System.Net;
using System.Net.Http.Headers;

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
			if (sourcesContentsRequestBytes == null) return BadRequest("No binary data received!");
			try {
				var record = DemoRecord.Parser.ParseFrom(sourcesContentsRequestBytes);
				if (record.Data.Text == null || record.Data.Text == "") return BadRequest("An empty content received!");
				if (record.Title == null || record.Title == "") record.Title = "No title";
				await Program.DemoManagementClient.InsertDemoRecordAsync(record);
				return Ok("New DemoRecord created successfuly!");
			}
			catch( Exception ex) {
				Console.WriteLine($"InsertDemoRecordAsync throws exception {ex.Message}");
				return BadRequest($"Error occured on create new DemoRecord. Exception: {ex.Message}");
			}
		}

		[HttpPost]
        [ValidateAntiForgeryToken]
		public async Task<IActionResult> CreateInterim([FromBody] byte[] sourcesContentsRequestBytes) {
			if (sourcesContentsRequestBytes == null) return BadRequest("No binary data received!");
			try {
				var request = InsertInterimRequest.Parser.ParseFrom(sourcesContentsRequestBytes);
				if (request == null) return BadRequest("An empty content received!");
				await Program.DemoManagementClient.InsertInterimAsync(request);
				return Ok("New interim created successfuly!");
			}
			catch( Exception ex) {
				Console.WriteLine($"InsertInterimAsync throws exception {ex.Message}");
				return BadRequest($"Error occured on create new interim. Exception: {ex.Message}");
			}
		}

		[HttpPost]
        [ValidateAntiForgeryToken]
		public async Task<IActionResult> RemoveLock() {
			if (!Request.Headers.ContainsKey("record-id")) return BadRequest("Wrong input argumnts!");
			long recordId = 0;
			string hValue = Request.Headers["record-id"];
			var parseresult = long.TryParse(hValue,out recordId);
			var user = await _userManager.GetUserAsync(User);
			if (user == null || !parseresult) return BadRequest("Wrong input argumnts!");
			try {
				RemoveLockRequest request = new RemoveLockRequest(){
					UserId = user.Id,
					RecordId = recordId
				};
				await Program.DemoManagementClient.RemoveLockAsync(request);
				return Ok("Lock removed successfuly!");
			}
			catch( Exception ex) {
				Console.WriteLine($"RemoveLockAsync throws exception {ex.Message}");
				return BadRequest($"Error occured on remove lock. Exception: {ex.Message}");
			}
		}

		[HttpGet]
        [ValidateAntiForgeryToken]
		public async Task<HttpResponseMessage> GetRecordMetadataList([FromQuery] uint skip = 0,[FromQuery] uint limit = 0) {
			HttpResponseMessage httpMessage = new HttpResponseMessage(HttpStatusCode.OK);
			var user = await _userManager.GetUserAsync(User);
			if (user == null || !await _userManager.IsInRoleAsync(user, "Admin")) return null;
			try {
				GetDemoRecordsMetadataListRequest request = new GetDemoRecordsMetadataListRequest(){
					Skip = skip,
					Limit = limit
				};
				var response = await Program.DemoManagementClient.GetRecordMetadataListAsync(request);
				if (response != null) {
					int responseSize = response.CalculateSize();
					if (responseSize > 0)
					{
						byte[] outputBytes = new byte[responseSize];
						Console.WriteLine($"Response size: {responseSize}");
						response.WriteTo(new Google.Protobuf.CodedOutputStream(outputBytes));
						httpMessage.Content = new ByteArrayContent(outputBytes);
						httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
					}
					else {
						httpMessage.Content = new StringContent("Grpc returns no metadata");
						Console.WriteLine("Grpc returns no metadata");
						httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
					}
				} 
				else {
					httpMessage.Content = new StringContent("Grpc returns no metadata");
					Console.WriteLine("Grpc returns no metadata");
					httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
				}
			}
			catch( Exception ex) {
				httpMessage.StatusCode = HttpStatusCode.InternalServerError;
				httpMessage.Content = new StringContent($"GetRecordMetadataListAsync throws exception {ex.Message}");
				httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
				Console.WriteLine($"Failed to get metadata list {ex.Message}");
			}
			return httpMessage;
		}

		[HttpGet]
        [ValidateAntiForgeryToken]
		public async Task<HttpResponseMessage> GetMetadataContent() {
			HttpResponseMessage httpMessage = new HttpResponseMessage(HttpStatusCode.OK);
			long recordId = 0;
			var user = await _userManager.GetUserAsync(User);
			if (!Request.Headers.ContainsKey("record-id") || user == null || 
				!long.TryParse(Request.Headers["record-id"],out recordId) ||
				!await _userManager.IsInRoleAsync(user, "Admin")) {
				httpMessage.StatusCode = HttpStatusCode.Conflict;
				httpMessage.Content = new StringContent("Wrong input argumnts!");
				httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
				Console.WriteLine("Wrong input argumnts!");
			} else {
				try {
					GetMetadataContentRequest request = new GetMetadataContentRequest(){
						RecordId = recordId
					};
					var response = await Program.DemoManagementClient.GetMetadataContentAsync(request);
					if (response != null) {
						int responseSize = response.CalculateSize();
						if (responseSize > 0)
						{
							byte[] outputBytes = new byte[responseSize];
							Console.WriteLine($"Response size: {responseSize}");
							response.WriteTo(new Google.Protobuf.CodedOutputStream(outputBytes));
							httpMessage.Content = new ByteArrayContent(outputBytes);
							httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
						}
						else {
							httpMessage.Content = new StringContent("Grpc returns no metadata");
							Console.WriteLine("Grpc returns no metadata");
							httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
						}
					} 
					else {
						httpMessage.Content = new StringContent("Grpc returns no metadata");
						Console.WriteLine("Grpc returns no metadata");
						httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
					}
				}
				catch( Exception ex) {
					httpMessage.StatusCode = HttpStatusCode.InternalServerError;
					httpMessage.Content = new StringContent($"GetMetadataContent throws exception {ex.Message}");
					httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
					Console.WriteLine($"Failed to get metadata content: {ex.Message}");
				}
			}
			return httpMessage;
		}

		[HttpGet]
        [ValidateAntiForgeryToken]
		public async Task<HttpResponseMessage> LookupNextDemoRecord() {
			HttpResponseMessage httpMessage = new HttpResponseMessage(HttpStatusCode.OK);
			var user = await _userManager.GetUserAsync(User);
			try {
				LookupNextDemoRecordRequest request = new LookupNextDemoRecordRequest(){
					UserId = user.Id,
					LookupLang = (ulong)user.lang_specs
				};
				var response = await Program.DemoManagementClient.LookupNextDemoRecordAsync(request);
				if (response != null) {
					int responseSize = response.CalculateSize();
					if (responseSize > 0)
					{
						byte[] outputBytes = new byte[responseSize];
						Console.WriteLine($"Response size: {responseSize}");
						response.WriteTo(new Google.Protobuf.CodedOutputStream(outputBytes));
						httpMessage.Content = new ByteArrayContent(outputBytes);
						httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
					}
					else {
						httpMessage.Content = new StringContent("Grpc returns no metadata");
						Console.WriteLine("Grpc returns no metadata");
						httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
					}
				} 
				else {
					httpMessage.Content = new StringContent("Grpc returns no metadata");
					Console.WriteLine("Grpc returns no metadata");
					httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
				}
			}
			catch( Exception ex) {
				httpMessage.StatusCode = HttpStatusCode.InternalServerError;
				httpMessage.Content = new StringContent($"LookupNextDemoRecord throws exception {ex.Message}");
				httpMessage.Content.Headers.ContentType = new MediaTypeHeaderValue("text/plain");
				Console.WriteLine($"Failed to lookup next DemoRecord: {ex.Message}");
			}
			return httpMessage;
		}
	}
}
