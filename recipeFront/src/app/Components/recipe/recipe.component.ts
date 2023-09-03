import { Component } from '@angular/core';
import { ReciepeService } from 'src/app/Service/reciepe.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
recipe: any;
  constructor(private recipeService:ReciepeService ,private http: HttpClient){}

  ngOnInit() 
  {
    this.recipeService.getAllRecipes().subscribe((response) => {
      this.recipe = response;
    });      
  } 
}
