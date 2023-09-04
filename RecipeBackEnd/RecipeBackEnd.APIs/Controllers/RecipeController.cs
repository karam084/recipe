using Microsoft.AspNetCore.Mvc;
using RecipeBackEnd.Core.IRepo;
using RecipeBackEnd.Core.Models;

namespace RecipeBackEnd.APIs.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeBackEnd _recipeInterface;

        public RecipeController(IRecipeBackEnd recipeInterface)
        {
            _recipeInterface = recipeInterface;
        }
        // GET: api/<RecipeController>
        [HttpGet]
        public async Task<IActionResult> GetAllRecipe()
        {
            return Ok(await _recipeInterface.GetAllRecipe());
        }

        // GET api/<RecipeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RecipeController>
        [HttpPost]
        public async Task<IActionResult> AddRecipe(Recipe recipe)

        {
            await _recipeInterface.AddRecipe(recipe);
            return Ok(recipe);

        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public IActionResult PutRecipe(int id, [FromBody] Recipe recipe)
        {
            return Ok(_recipeInterface.EditeRecipe(recipe));
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _recipeInterface.DeleteProduct(id);
        }
    }
}
