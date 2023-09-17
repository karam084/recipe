using RecipeBackEnd.Core.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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
        void DeleteRecipe(int id);
        Task<List<Recipe>> GetAllRecipeSearch(string name);
        Task<List<Recipe>> GetAllRecipeSearchIntegred(string Integ);
        Task<List<Recipe>> Paging(int PagNum, int PagSize);
        Task<List<Recipe>> GetAllRecipeValue(string Value);
    }
}
