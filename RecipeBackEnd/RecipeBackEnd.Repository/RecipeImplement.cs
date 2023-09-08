using Microsoft.EntityFrameworkCore;
using RecipeBackEnd.Core.IRepo;
using RecipeBackEnd.Core.Models;
using RecipeBackEnd.Repository.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeBackEnd.Repository
{
    public class RecipeImplement : IRecipeBackEnd
    {
        private readonly StoreContext _dbcontext;

        public RecipeImplement(StoreContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<List<Recipe>> GetAllRecipe()
        {
            var res = await _dbcontext.BackEndRecipes.ToListAsync();
            return res;
        }
        public async Task AddRecipe(Recipe recipe)
        {
            await _dbcontext.BackEndRecipes.AddAsync(recipe);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task EditeRecipe(Recipe recipe)
        {
            var checkid = await _dbcontext.BackEndRecipes.FindAsync(recipe.ID);
            if (checkid != null)
            {
                _dbcontext.BackEndRecipes.Update(recipe);
                await _dbcontext.SaveChangesAsync();
            }
        }

        public void DeleteProduct(int id)
        {
            if (id != 0)
            {
                var deleteRecipe = _dbcontext.BackEndRecipes.Find(id);
                _dbcontext.BackEndRecipes.Remove(deleteRecipe);
                _dbcontext.SaveChanges();
            }
        }
    }
}
