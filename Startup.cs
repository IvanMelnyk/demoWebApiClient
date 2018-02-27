using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebApiClient.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebApiClient.Auth.Data;
using WebApiClient.Auth.Models;
using WebApiClient.Auth.Providers;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Grpc.Core;
using Demo.Services.Grpc;
using WebApiClient.Extentions;

namespace WebApiClient
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
				options.UseNpgsql(Program.confManager.config.NpgsqlConnection));
		
            services.AddIdentity<ApplicationUser, CustomRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
				.AddUserStore<CustomUserStore>()
				.AddRoleStore<CustomRoleStore>()       
                .AddDefaultTokenProviders();

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();
            services.AddAntiforgery(opts => opts.HeaderName = "X-XSRF-Token");
            services.AddMvcCore();
            services.AddMvc(o => o.InputFormatters.Insert(0, new RawRequestBodyFormatter()));
            services.AddMvc(opts =>
            {
                opts.Filters.AddService(typeof(AngularAntiforgeryCookieResultFilter));
            });
            services.AddTransient< AngularAntiforgeryCookieResultFilter >();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, IAntiforgery antiforgery)
        {
           if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                //app.UseExceptionHandler("/Home/Error");
            }

            app.UseAuthentication();
            app.Use(next => context =>
            {
                if (
                    string.Equals(context.Request.Path.Value, "/", StringComparison.OrdinalIgnoreCase) ||
					context.Request.Path.Value.StartsWith("/api") ||
					string.Equals(context.Request.Path.Value, "/index.html", StringComparison.OrdinalIgnoreCase))
                {
                    // We can send the request token as a JavaScript-readable cookie, and Angular will use it by default.
                    var tokens = antiforgery.GetAndStoreTokens(context);
                    
                    context.Response.Cookies.Append("X-XSRF-Token", tokens.RequestToken, new CookieOptions() { HttpOnly = false });
                }

                return next(context);
            });
            LoadConf(env.IsDevelopment());
            app.UseDefaultFiles();
			app.UseStaticFiles();
			app.UseMvc();
			app.Map("/api", a => a.Run(async context =>
			{
				if (string.Equals("GET", context.Request.Method, StringComparison.OrdinalIgnoreCase))
				{
					// This will throw if the token is invalid.
					//await antiforgery.ValidateRequestAsync(context);
				}
				else if (string.Equals("POST", context.Request.Method, StringComparison.OrdinalIgnoreCase))
				{
					// This will throw if the token is invalid.
					await antiforgery.ValidateRequestAsync(context);
					context.Response.StatusCode = 204;
				}
			}));
		}

         /// ---------------------------------------------------------------------------------------------
		public void LoadConf(bool isDevelopment)
		{
			var configPath = "appConfig.json";
			Program.confManager = new ConfigurationManager();
			Program.confManager.GetConfiguration(configPath);

			var serviceAddress = Program.confManager.config.serviceAddressDev;

			Channel managmentChannnel = new Channel(serviceAddress, ChannelCredentials.Insecure, Program.confManager.GrpcChannelOptions);
			Program.DemoManagementClient = new DemoManagement.DemoManagementClient(managmentChannnel);
		}
    }
}
