using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RecipeBackEnd.APIs.Dto;
using RecipeBackEnd.Core.Models.identity;
using System.ComponentModel;

namespace RecipeBackEnd.APIs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountsController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpPost("Login")]                          // Post :  /api/Accounts/Login
        public async Task<ActionResult<UserDto>> Login(LoginDto model)
        {
            var user =await _userManager.FindByEmailAsync(model.Email);
              if (user is null) return Unauthorized("the Email Is Unauthorized");

           var Result = await _signInManager.CheckPasswordSignInAsync(user, model.Password,false);
            if (!Result.Succeeded) return Unauthorized("the Password Is Not Valed");
            return Ok(new UserDto()
            {
                DisplayName = user.DisplayName,
                Email = user.Email,
                Token = "this will be a token"
            });
        }

        [HttpPost("Register")]                          // Post :  /api/Accounts/Register
        public async Task<ActionResult<UserDto>> Register(RegisterDto model)
        {
          var user = new AppUser()
            { 
              DisplayName = model.DisplayName,
              Email = model.Email,                     // Mohamed1234@gmail.com
              PhoneNumber = model.PhoneNumber,
              UserName = model.Email.Split('@')[0]     //// Mohamed1234
          };

         var Result = await _userManager.CreateAsync(user,model.Password);
            if (!Result.Succeeded) return Unauthorized("Bad Request");

            return Ok(new UserDto()
            { 
            DisplayName = user.DisplayName,
            Email = user.Email,
            Token = "this will be a token"
            });
        }
    }
}
