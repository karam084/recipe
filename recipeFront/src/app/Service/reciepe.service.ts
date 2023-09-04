import {Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {environment } from 'src/Environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  baseUrl = 'http://localhost:3000' ;
  constructor(private http: HttpClient) {}
  getAllRecipes()
  {
    return this.http.get(`${this.baseUrl}/recips`)
  }
  AddRecipe()

  
}
