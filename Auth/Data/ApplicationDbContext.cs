using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApiClient.Auth.Models;
using System.Threading;
using Microsoft.AspNetCore.Mvc.Internal;

namespace WebApiClient.Auth.Data
{
	public class CustomUserStore : UserStore<ApplicationUser, CustomRole, ApplicationDbContext,
		long, CustomUserClaim, CustomUserRole,
		CustomUserLogin, CustomUserToken, CustomRoleClaim>
	{
		public CustomUserStore(ApplicationDbContext context)
			: base(context)
		{
		}

		//private DbSet<ApplicationUser> UsersSet { get { return Context.Set<ApplicationUser>(); } }

		/// <summary>
		/// Finds and returns a user, if any, who has the specified <paramref name="userId"/>.
		/// </summary>
		/// <param name="userId">The user ID to search for.</param>
		/// <param name="cancellationToken">The <see cref="CancellationToken"/> used to propagate notifications that the operation should be canceled.</param>
		/// <returns>
		/// The <see cref="Task"/> that represents the asynchronous operation, containing the user matching the specified <paramref name="userId"/> if it exists.
		/// </returns>
		/*public Task<ApplicationUser> FindByIdAsync(long userId, CancellationToken cancellationToken = default(CancellationToken))
		{
			cancellationToken.ThrowIfCancellationRequested();
			ThrowIfDisposed();
			return UsersSet.FindAsync(new object[] { userId }, cancellationToken);
		}*/
	}

	public class CustomRoleStore : RoleStore<CustomRole, ApplicationDbContext,
	long, CustomUserRole, CustomRoleClaim>
	{
		public CustomRoleStore(ApplicationDbContext context)
			: base(context)
		{

			/*context.Roles.Add(new CustomRole() {
				Name = "Admin"
			});
			context.Roles.Add(new CustomRole()
			{
				Name = "Quest"
			});*/
		}
	}

	public class ApplicationDbContext : IdentityDbContext<ApplicationUser,CustomRole,long>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

		protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
			builder.HasDefaultSchema("public");

			builder.Entity<ApplicationUser>().ToTable("users");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.Id).HasColumnName("id");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.LockoutEnabled).HasColumnName("lockout_enabled");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.LockoutEnabled).HasColumnName("lockout_enabled");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.PasswordHash).HasColumnName("password_hash").HasColumnType("varchar").HasMaxLength(128);
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.PhoneNumber).HasColumnName("phone_number");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.PhoneNumberConfirmed).HasColumnName("phone_number_confirmed");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.SecurityStamp).HasColumnName("security_stamp");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.TwoFactorEnabled).HasColumnName("two_factor_enabled");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.UserName).HasColumnName("user_name").HasColumnType("varchar").HasMaxLength(128);
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.Email).HasColumnName("email").HasColumnType("varchar").HasMaxLength(128);
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.EmailConfirmed).HasColumnName("email_confirmed");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.AccessFailedCount).HasColumnName("access_failed_count");
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.first_name).HasColumnType("varchar").HasMaxLength(128);
			builder.Entity<ApplicationUser>().ToTable("users").Property(p => p.last_name).HasColumnType("varchar").HasMaxLength(128);


			builder.Entity<CustomUserRole>().ToTable("user_roles");
			builder.Entity<CustomUserRole>().ToTable("user_roles").Property(p => p.RoleId).HasColumnName("role_id");
			builder.Entity<CustomUserRole>().ToTable("user_roles").Property(p => p.UserId).HasColumnName("user_id");

			builder.Entity<CustomUserToken>().ToTable("user_tokens");
			builder.Entity<CustomUserToken>().ToTable("user_tokens").Property(p => p.UserId).HasColumnName("user_id");
			builder.Entity<CustomUserToken>().ToTable("user_tokens").Property(p => p.LoginProvider).HasColumnName("login_provider");
			builder.Entity<CustomUserToken>().ToTable("user_tokens").Property(p => p.Name).HasColumnName("name");
			builder.Entity<CustomUserToken>().ToTable("user_tokens").Property(p => p.Value).HasColumnName("value");


			builder.Entity<CustomUserLogin>().ToTable("user_logins");
			builder.Entity<CustomUserLogin>().ToTable("user_logins").Property(p => p.LoginProvider).HasColumnName("login_provider");
			builder.Entity<CustomUserLogin>().ToTable("user_logins").Property(p => p.ProviderKey).HasColumnName("provider_key");
			builder.Entity<CustomUserLogin>().ToTable("user_logins").Property(p => p.UserId).HasColumnName("user_id");

			builder.Entity<CustomUserClaim>().ToTable("user_claims");
			builder.Entity<CustomUserClaim>().ToTable("user_claims").Property(p => p.Id).HasColumnName("id");
			builder.Entity<CustomUserClaim>().ToTable("user_claims").Property(p => p.UserId).HasColumnName("user_id");
			builder.Entity<CustomUserClaim>().ToTable("user_claims").Property(p => p.ClaimType).HasColumnName("claim_type");
			builder.Entity<CustomUserClaim>().ToTable("user_claims").Property(p => p.ClaimValue).HasColumnName("claim_value");


			builder.Entity<CustomRole>().ToTable("roles");
			builder.Entity<CustomRole>().ToTable("roles").Property(p => p.Id).HasColumnName("id");
			builder.Entity<CustomRole>().ToTable("roles").Property(p => p.Name).HasColumnName("name").HasColumnType("varchar").HasMaxLength(128); ;
        }
    }
}
