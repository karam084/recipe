import { Component, OnDestroy, OnInit } from '@angular/core';
//import { Recipe } from 'src/app/Models/Recipe';
import { Recipe } from 'src/app/recipe/recipe';
import { ReciepeService } from 'src/app/Service/reciepe.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  displayAddRecipe = false;
  selectedRecipe: any = null;
  subscription: Subscription[] = [];
  pdtSubscription: Subscription = new Subscription();

  constructor(private recipeService:ReciepeService, private confirmationService: ConfirmationService,
     private messageService: MessageService ){}
  ngOnInit()
  {
       this.getAllRecipes();
  }
  getAllRecipes(category?: string){
     this.pdtSubscription = this.recipeService.getAllRecipes(category || "").subscribe((response:any) => {
      //console.log(response);
      this.recipes = response;
    },
    (error) => {
      this.messageService.add({severity:'error', summary: 'Error', detail:error});
      //console.log(error);
    });
    this.subscription.push(this.pdtSubscription);
  }

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
    //  this.recipes.unshift(newData);
      //this.getAllRecipes();

    if(this.selectedRecipe && newData.id === this.selectedRecipe.id){
      const recipeIndex = this.recipes.findIndex(data => data.id === newData.id);
      this.recipes[recipeIndex] = newData;

    }else{
      this.recipes.unshift(newData);
   }

  }

  editRecipe(recipe: Recipe){
    this.displayAddRecipe = true;
    this.selectedRecipe = recipe;
  }

  deleteRecipe(recipe: Recipe){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this recipe?',
      accept: () => {
        this.recipeService.deleteRecipe(recipe.id).subscribe(
          (response) => {
            //console.log(response);
            const recipeIndex = this.recipes.findIndex(data => data.id === recipe.id);
            this.recipes.splice(recipeIndex, 1);
            //this.getAllRecipes();
            this.messageService.add({severity:'success', summary: 'Success', detail: 'Recipe Deleted Successfully'});
          },
          error => {
            this.messageService.add({severity:'error', summary: 'Error', detail:error});
            //console.log(error);
          }
        );

      }
  });

  }

  ngOnDestroy(): void{
    this.subscription.forEach(sub => sub.unsubscribe());
  }

  getRecipeByCategory(category: string){
    this.getAllRecipes(category)

  }
}
