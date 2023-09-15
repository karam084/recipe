using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using RecipeBackEnd.APIs.Dto;
using RecipeBackEnd.Core.IRepo;
using RecipeBackEnd.Core.Models;
using RecipeBackEnd.Repository;

namespace RecipeBackEnd.APIs.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeBackEnd _recipeInterface;
        private readonly IMapper _mapper;

        public RecipeController(IRecipeBackEnd recipeInterface, IMapper mapper)
        {
            _recipeInterface = recipeInterface;
            _mapper = mapper;
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
            return Ok(_mapper.Map<Recipe, RecipeToReturnDto>(recipe));

        }
        //// PUT api/<RecipeController>/5
        [HttpPut("{id}")]
        public IActionResult EditeRecipe(int id, Recipe recipe)
        {
            //return Ok(_recipeInterface.EditeRecipe(recipe));
            _recipeInterface.EditeRecipe(recipe);
            return Ok(_mapper.Map<Recipe, RecipeToReturnDto>(recipe));
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _recipeInterface.DeleteRecipe(id);
        }

        //Search
        [HttpGet("{name}")]
        public async Task<IActionResult> Search(string Name)
        {
            return Ok(await _recipeInterface.GetAllRecipeSearch(Name));
        }

        //Search
        [HttpGet("{Integ}")]
        public async Task<IActionResult> Searchinteg(string integ)
        {
            return Ok(await _recipeInterface.GetAllRecipeSearchIntegred(integ));
        }

        //Paging
        [HttpGet("{pageSize}")]
        public async Task<IActionResult> GetPagedRecipes(int pageNumber = 1, int pageSize = 10)
        {
             return Ok(await _recipeInterface.Paging(pageNumber, pageSize));
        }
    }

}
