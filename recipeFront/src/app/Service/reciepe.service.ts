import {Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {environment } from 'src/Environments/environment';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
//import { Recipe } from '../Models/Recipe';
import { Recipe } from '../recipe/recipe';

@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  getCategories: any;
  constructor(private http:HttpClient) { }
  getAllRecipes(category: string)
  {
    const categoryUrl = category ? `/category/${category}` : "";
    return this.http.get<Recipe[]>(`https://localhost:7207/api/Recipe/GetAll`);
  }
  saveRecipe(postData: any, selectedRecipe: any) {
    if (!selectedRecipe) {
      return this.http.post(`https://localhost:7207/api/Recipe/Add`, postData);
    }else{
      return this.http.put(`https://localhost:7207/api/Recipe/Edite/${selectedRecipe.id}`, postData);
    }

  }

  deleteRecipe(recipeId: number) {
    return this.http.delete(`https://localhost:7207/api/Recipe/Delete/25/${recipeId}`);
  }

  gitCatory(): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:7207/api/Recipe/searchValue/veget/categories`);
  }

}
