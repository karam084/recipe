import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { environment } from 'src/Environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  constructor(private http: HttpClient) {}
  getAllRecipes()
  {
    return this.http.get(environment.apiUrl+'get');
  }
  getById()
  {
    return this.http.get(environment.apiUrl+'get/'+'Id');
  }
//   createRecipe(recipe:recipe)
// {
//   return this.http.post(environment.apiUrl+recipe);
// }
}
