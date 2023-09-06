using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace RecipeBackEnd.APIs.Dto
{
    public class RecipeToReturnDto
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        [MinLength(3, ErrorMessage = "The Minimum Lenght More Than 3 characters")]
        public string Name { get; set; }

        [MinLength(1, ErrorMessage = "The Minimum Lenght More Than 1 characters")]
        public string Intgredients { get; set; }

        [MinLength(1, ErrorMessage = "The Minimum Lenght More Than 1 characters")]
        public string Steps { get; set; }
        public string? Image { get; set; }
    }
}
