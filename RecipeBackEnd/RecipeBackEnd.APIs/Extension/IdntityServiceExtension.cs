using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using RecipeBackEnd.Core.Models.identity;
using RecipeBackEnd.Core.Service;
using RecipeBackEnd.Repository.Data.identity;
using RecipeBackEnd.Services;

namespace RecipeBackEnd.APIs.Extension
{
    public static class IdntityServiceExtension
    {
        // Add  User
        public static IServiceCollection AddIdentityServices (this IServiceCollection services)
        {
            services.AddIdentity<AppUser, IdentityRole>()
                   .AddEntityFrameworkStores<AppIdentityDbContext>();
           services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme);

           services.AddScoped<ITokenService, TokenService>();

           return services;
        }
    }
}
