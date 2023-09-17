using Microsoft.EntityFrameworkCore;
using RecipeBackEnd.APIs.Dto.Helpers;
using RecipeBackEnd.Core.IRepo;
using RecipeBackEnd.Repository;
using RecipeBackEnd.Repository.Data;

namespace RecipeBackEnd.APIs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            #region Configure Service
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at /* https://aka.ms/aspnetcore/swashbuckle */
             builder.Services.AddEndpointsApiExplorer();
             builder.Services.AddSwaggerGen();
             builder.Services.AddDbContext<StoreContext>(Options =>
            {
                 Options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
            });
             builder.Services.AddScoped<IRecipeBackEnd, RecipeImplement>();
            //builder.Services.AddAutoMapper(M=>M.AddProfile(new MappingProfiles()));
            builder.Services.AddAutoMapper(typeof(MappingProfiles));
            #endregion

            var app = builder.Build();

            #region Update Database
            using var Scope = app.Services.CreateScope();
            var Services = Scope.ServiceProvider;

            var LoggerFactory = Services.GetRequiredService<ILoggerFactory>();
            try
            {
                var dbContext = Services.GetRequiredService<StoreContext>(); //Ask clr for create object
                 dbContext.Database.MigrateAsync();  // Update Database
            }
            catch (Exception ex)
            {
                var logger = LoggerFactory.CreateLogger<Program>(); //work in program
                logger.LogError(ex,"An Error Occoured During ");  // log error
            }

            #endregion

            #region Configures
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                 app.UseSwagger();
                 app.UseSwaggerUI();
            }


             app.UseHttpsRedirection();
             app.UseStaticFiles();

             app.UseAuthorization();


            app.MapControllers(); 
            #endregion
            app.Run();
        }
    }
}