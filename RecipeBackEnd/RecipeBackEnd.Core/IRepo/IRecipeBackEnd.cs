using RecipeBackEnd.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeBackEnd.Core.IRepo
{
    public interface IRecipeBackEnd
    {
        Task<List<Recipe>> GetAllRecipe();
        Task AddRecipe(Recipe recipe);
        Task EditeRecipe(Recipe recipe);
        void DeleteProduct(int id);
    }
}
