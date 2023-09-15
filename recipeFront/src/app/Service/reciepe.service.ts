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
  baseUrl = 'https://localhost:7207/api/Recipe';
  constructor(private http:HttpClient) { }
  getAllRecipes()
  {
    return this.http.get(this.baseUrl);
  }

  //  AddRecipe(model:any)
  // {
  //   return this.http.post(this.baseUrl,model)
  // }
  // DeleteRecipe(id:number)
  // {
  //   return this.http.delete(`${this.baseUrl}/${id}`)
  // }
  // GetRecipeById(id:number)
  // {
  //   this.http.get(`${this.baseUrl}/${id}`)
  // }
  // UpdateRecipe(id:number,model:any){
  //   return  this.http.put(`${this.baseUrl}/${id}`,model);
  // }

  //   return this.http.post(this.baseUrl,model)
  // }
  // DeleteRecipe(id:number)
  // {
  //   return this.http.delete(`${this.baseUrl}/${id}`)
  // }
  // GetRecipeById(id:number)
  // {
  //   this.http.get(`${this.baseUrl}/${id}`)
  // }
  // UpdateRecipe(id:number,model:any){
  //   return  this.http.put(`${this.baseUrl}/${id}`,model);
  // }

  saveRecipe(postData: any, selectedRecipe: any): Observable<Recipe> {
    if (!selectedRecipe) {
      return this.http.post<Recipe>(`${this.baseUrl}`, postData);
    }else{
      return this.http.put<Recipe>(`${this.baseUrl}/${selectedRecipe.id}`, postData);
    }

  }

}
