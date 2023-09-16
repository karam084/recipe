import { Component } from '@angular/core';
//import { Recipe } from 'src/app/Models/Recipe';
import { Recipe } from 'src/app/recipe/recipe';
import { ReciepeService } from 'src/app/Service/reciepe.service';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipes: Recipe[] = [];
  displayAddRecipe = false;
  selectedRecipe: any = null;

  constructor(private recipeService:ReciepeService){}
  ngOnInit()
  {
       this.getAllRecipes();
  }
  getAllRecipes()
    {this.recipeService.getAllRecipes().subscribe((response:any) => {
      //console.log(response);
      this.recipes = response;
    },

    (error) => {
      //console.error('HTTP Error:', error);
    }); }
  // EditRecipe(id:number,recipe:Recipe){
  //   this.recipeService.UpdateRecipe(id,recipe)
  // }
  // DeleteRecipe(id:number){
  //   this.recipeService.DeleteRecipe(id)
  // }
  AddRecipe(){
    this.displayAddRecipe = true;
    this.selectedRecipe = null;
  }


  hideAddModel(isClosed: boolean){
    this.displayAddRecipe = !isClosed;
  }

  saveRecipeToList(newData: any){
    if(this.selectedRecipe){
      const recipe = this.recipes.findIndex(data => data.id === newData.id);
      this.recipes[recipe] = newData;

    }else{
      this.recipes.unshift(newData);
   }
    this.recipes.unshift(newData);
    this.getAllRecipes();

  }

  editRecipe(recipe: Recipe){
    this.displayAddRecipe = true;
    this.selectedRecipe = recipe;
  }
}
