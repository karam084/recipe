import { Component, OnInit } from '@angular/core';
import { TableRecipeService, TableRecipe } from '../../service/table-recipe.service';
import { SortEvent } from 'primeng/api/sortevent';
// import { FilterMatchMode } from './filtermatchmode';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  TableRecipes: TableRecipe[] = [];
  cols: any[] = [];
  first: number = 0;
  dt: any;
  value: string | undefined;

  // multiSortMeta: SortMeta[] | null | undefined;
  constructor(private tableRecipeService: TableRecipeService) { }

  ngOnInit() {
    this.tableRecipeService.getTableRecipes().
      then(TableRecipes => this.TableRecipes = TableRecipes);
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
      { field: 'price', header: 'Price' },
    ];


    // this.multiSortMeta = [];
    // this.multiSortMeta.push({ field: 'year', order: 1 });
    // this.multiSortMeta.push({ field: 'brand', order: -1 });
  }
  reset() {
    this.first = 0;
  }

  customSort(event: SortEvent) {
    console.log(event);

   event.data?.sort((data1, data2) => {
      let value1 = data1;
      let value2 = data2;
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);

      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (result);
    });
  }
}
