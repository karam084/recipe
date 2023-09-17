using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using RecipeBackEnd.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using RecipeBackEnd.Core.Models;

namespace RecipeBackEnd.Repository.Data.Config
{
        public class RecipeConfiguration : IEntityTypeConfiguration<Recipe>
        {
            public void Configure(EntityTypeBuilder<Recipe> builder)
            {              
            builder.Property(p => p.Name).IsRequired();
            builder.Property(p => p.Intgredients).IsRequired();
            builder.Property(p => p.Steps).IsRequired();

            

            }
    }
}
