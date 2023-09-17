using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using RecipeBackEnd.Core.Models;

namespace RecipeBackEnd.APIs.Dto
{
    public class RecipeToReturnDto
    {
        
        public int ID { get; set; }
        [MinLength(3, ErrorMessage = "The Minimum Lenght More Than 3 characters")]
        public string Name { get; set; }

        [MinLength(1, ErrorMessage = "The Minimum Lenght More Than 1 characters")]
        public string Intgredients { get; set; }

        [MinLength(1, ErrorMessage = "The Minimum Lenght More Than 1 characters")]
        public string Steps { get; set; }
        public string? Image { get; set; }

        //////////relation Between Recipe and Category of Recipe
        //public int RecipeTypeId { get; set; }       /// foreign key

        // Navigational Property
        //public string RecipeType { get; set; } // contain name of type
        public int recipeTypeId { get; set; }
        [ForeignKey("recipeTypeId")]
        public RecipeType recipeType { get; set; }
    }
}
