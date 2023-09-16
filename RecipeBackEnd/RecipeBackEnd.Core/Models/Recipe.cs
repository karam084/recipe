using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RecipeBackEnd.Core.Models
{
    public class Recipe 
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
