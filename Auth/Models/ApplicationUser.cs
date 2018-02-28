using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace WebApiClient.Auth.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
	public class ApplicationUser : IdentityUser<long>
	{
		public string first_name { set; get; }
		public string last_name { set; get; }
		public DateTimeOffset expire_time { set; get; }
		public DateTimeOffset join_date { get; set; }
		public int lang_specs { get; set; }

		/*public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser, long> manager, string authenticationType)
		{
			// Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
			var userIdentity = await manager.CreateIdentityAsync(this, authenticationType);
			// Add custom user claims here
			return userIdentity;
		}*/
	}

	public class CustomUserRole : IdentityUserRole<long> { }
	public class CustomUserClaim : IdentityUserClaim<long> { }
	public class CustomUserLogin : IdentityUserLogin<long> { }
	public class CustomRoleClaim : IdentityRoleClaim<long> { };
	public class CustomUserToken : IdentityUserToken<long> { };

	public class CustomRole : IdentityRole<long>
	{
		public CustomRole() { }
		public CustomRole(string name) { Name = name; }
	}
}
