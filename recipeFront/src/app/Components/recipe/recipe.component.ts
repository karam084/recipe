import { Component } from '@angular/core';
import { Recipe } from 'src/app/Models/Recipe'; 
import { ReciepeService } from 'src/app/Service/reciepe.service';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipes: any;
  constructor(private recipeService:ReciepeService){}
  ngOnInit() 
  {
       this.getAllRecipes();
  } 
  getAllRecipes()
    {this.recipeService.getAllRecipes().subscribe((response:any) => {
      this.recipes = response;
    },
    (error) => {
      console.error('HTTP Error:', error);
    }); } 
  EditRecipe(id:number,model:Recipe){
    this.recipeService.UpdateRecipe(id,model)
  }
  DeleteRecipe(id:number){
    this.recipeService.DeleteRecipe(id)
  }
}
