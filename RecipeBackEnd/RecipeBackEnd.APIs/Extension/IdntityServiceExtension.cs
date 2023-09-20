using Microsoft.AspNetCore.Identity;
using RecipeBackEnd.Core.Models.identity;
using RecipeBackEnd.Repository.Data.identity;

namespace RecipeBackEnd.APIs.Extension
{
    public static class IdntityServiceExtension
    {
        // Add  User
        public static IServiceCollection AddIdentityServices (this IServiceCollection services)
        {
            services.AddIdentity<AppUser, IdentityRole>()
                   .AddEntityFrameworkStores<AppIdentityDbContext>();
           services.AddAuthentication();
           return services;
        }
    }
}
