using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace RecipeBackEnd.Repository.Migrations
{
    /// <inheritdoc />
    public partial class Addingratetorecipe : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Rate",
                table: "Recipes",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rate",
                table: "Recipes");
        }
    }
}
