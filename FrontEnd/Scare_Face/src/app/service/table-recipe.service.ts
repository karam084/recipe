import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TableRecipe {
  name: string;
  price: number;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class TableRecipeService {

  constructor(private http: HttpClient) {}

  getTableRecipes() {
    return this.http.get<any>('assets/recipe.json')
    .toPromise()
    .then(res => <TableRecipe[]>res.data)
    .then(data => { return data; });
    }
}
