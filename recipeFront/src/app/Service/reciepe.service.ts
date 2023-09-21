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
    return this.http.get<Recipe[]>(`https://fakestoreapi.com/products${categoryUrl}?sort=desc`);
  }
  saveRecipe(postData: any, selectedRecipe: any) {
    if (!selectedRecipe) {
      return this.http.post(`https://fakestoreapi.com/products`, postData);
    }else{
      return this.http.put(`https://fakestoreapi.com/products/${selectedRecipe.id}`, postData);
    }

  }

  deleteRecipe(recipeId: number) {
    return this.http.delete(`https://fakestoreapi.com/products/${recipeId}`);
  }

  gitCatory(): Observable<string[]>{
    return this.http.get<string[]>(`https://fakestoreapi.com/products/categories`);
  }

}
