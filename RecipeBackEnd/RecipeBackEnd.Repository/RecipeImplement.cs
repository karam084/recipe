using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.VisualBasic;
using RecipeBackEnd.Core.IRepo;
using RecipeBackEnd.Core.Models;
using RecipeBackEnd.Repository.Data;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using static Azure.Core.HttpHeader;

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
            var res = await _dbcontext.Recipes.Include(a=>a.recipeType).ToListAsync();
            return res;
        }
        public async Task AddRecipe(Recipe recipe)
        {
            await _dbcontext.Recipes.AddAsync(recipe);
            await _dbcontext.SaveChangesAsync();

        }

        public async Task EditeRecipe(Recipe recipe)
        {
            var checkid = await _dbcontext.Recipes.FindAsync(recipe.ID);
            if (checkid != null)
            {
                // _dbcontext.Recipes.Update(checkid);
                // _dbcontext.Entry(checkid).CurrentValues.SetValues(recipe);
                checkid = new Recipe { 
                ID = recipe.ID,
                Name = recipe.Name,
                Intgredients = recipe.Intgredients,
                Image = recipe.Image,
                Steps = recipe.Steps,
                recipeType = recipe.recipeType,
                recipeTypeId = recipe.recipeTypeId,
                };
                await _dbcontext.SaveChangesAsync();
            }
        }


        public void DeleteRecipe(int id)
        {
            if (id != 0)
            {
                var deleteRecipe = _dbcontext.Recipes.Find(id);
                _dbcontext.Recipes.Remove(deleteRecipe);
                _dbcontext.SaveChanges();
            }
        }


        public async Task<List<Recipe>> GetAllRecipeSearch(string name)
        {

            var res = await _dbcontext.Recipes.Where(x => x.Name.ToLower()
                .Contains(name.ToLower())).ToListAsync();
            return (res);

        }

        public async Task<List<Recipe>> GetAllRecipeSearchIntegred(string integ)
        {
            var result = await _dbcontext.Recipes.Where(x => x.Intgredients.ToLower()
            .Contains(integ.ToLower())).ToListAsync();
            return (result);

        }
        public async Task<List<Recipe>> Paging(int pageNumberr = 2, int pageSizee = 2)
        {
            var items = await _dbcontext.Recipes.Skip((pageNumberr - 1) * pageSizee)
                        .Take(pageSizee).ToListAsync();
            return items;
        }

        public async Task<List<Recipe>> GetAllRecipeValue(string Value)
        {
            var result = _dbcontext.Recipes.Include(a => a.recipeType).AsNoTracking(); // high performance forget data
            if (!string.IsNullOrEmpty(Value))
            {
                result = result.Where(x => x.Name.ToLower().Contains(Value) || x.Intgredients.Contains(Value));
            }
            return(await result.ToListAsync());
           
        }

    }
 } 
