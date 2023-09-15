using Microsoft.EntityFrameworkCore;
using RecipeBackEnd.Core.IRepo;
using RecipeBackEnd.Core.Models;
using RecipeBackEnd.Repository.Data;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
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


        public void DeleteRecipe(int id)
        {
            if (id != 0)
            {
                var deleteRecipe = _dbcontext.BackEndRecipes.Find(id);
                _dbcontext.BackEndRecipes.Remove(deleteRecipe);
                _dbcontext.SaveChanges();
            }
        }


        public async Task<List<Recipe>> GetAllRecipeSearch(string name)
        {
                // return only result of name
            //var res = await _dbcontext.BackEndRecipes.Where(x => x.Name.ToLower()
            //    .Equals(name.ToLower())).ToListAsync();
            //return (res);
            var res = await _dbcontext.BackEndRecipes.Where(x => x.Name.ToLower()
                .Contains(name.ToLower())).ToListAsync();
            return (res);

        }

        public async Task<List<Recipe>> GetAllRecipeSearchIntegred(string integ)
        {
                var result = await _dbcontext.BackEndRecipes.Where(x => x.Intgredients.ToLower()
                .Contains(integ.ToLower())).ToListAsync();
                  return (result);
        }

        public async Task<List<Recipe>> Paging(int pageNumberr = 2, int pageSizee = 2)
        {
            var items = await _dbcontext.BackEndRecipes.Skip((pageNumberr - 1) * pageSizee)
                      .Take(pageSizee).ToListAsync();
            return items;
        }
    }
}
