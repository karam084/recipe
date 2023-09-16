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
            var res = await _dbcontext.Recipes.ToListAsync();
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
                _dbcontext.Recipes.Update(recipe);
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


            ///// /// /// /// Search by name , integrendeent
            /*
            public Task<List<Recipe>> GetAllRecipeSearchIntegred(string name, string Integ)
            {
                var rescipeData = _dbcontext.Recipes.AsQueryable()
                               .Join(_dbcontext.RecipeTypes.AsQueryable(), m => m.RecipeTypeId, p => p.Id, (m, p) =>
                               new {
                                   //RecipeId = m.ID,
                                   RecipeName = m.Name,
                                   integredent = Integ,

                               });
                if (!string.IsNullOrEmpty(name))
                {
                    rescipeData = rescipeData.Where(x => x.RecipeName.Contains(name));
                }
                if (!string.IsNullOrEmpty(Integ))
                {
                    rescipeData = rescipeData.Where(x => x.integredent.Contains(Integ));
                }
            }
            */
        }
    } 
