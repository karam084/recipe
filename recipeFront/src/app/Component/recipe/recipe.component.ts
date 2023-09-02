import { Component } from '@angular/core';
import { ReciepeService } from 'src/app/Service/reciepe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
recipe: any;
  constructor(private recipeService:ReciepeService ){}
  ngOnInit() 
  {
    this.recipeService.getAllRecipes().subscribe((response) => {
      this.recipe = response;
    });      
  }

}
