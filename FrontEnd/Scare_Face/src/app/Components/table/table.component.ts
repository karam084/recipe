import { Component, OnInit } from '@angular/core';
import { TableRecipeService,TableRecipe } from '../../service/table-recipe.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  TableRecipes: TableRecipe[] = [];

  constructor(private tableRecipeService: TableRecipeService) { }

  ngOnInit() {
      this.tableRecipeService.getTableRecipes().
      then(TableRecipes => this.TableRecipes= TableRecipes);
  }
}
