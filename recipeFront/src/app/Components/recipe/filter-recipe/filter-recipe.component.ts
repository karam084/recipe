import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReciepeService } from '../../../Service/reciepe.service';

@Component({
  selector: 'app-filter-recipe',
  templateUrl: './filter-recipe.component.html',
  styleUrls: ['./filter-recipe.component.css']
})
export class FilterRecipeComponent implements OnInit {

  selectedCategory: string = '';
  categories: string[] = [];
  @Output() selectCategory: EventEmitter<string> = new EventEmitter<string>();
  constructor(private reciepeService: ReciepeService){}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.reciepeService.gitCatory().subscribe((response: any) => {
      this.categories = response;
    },
    (error) => {
      console.log(error);
    });
  }

  onChangeCategory($event: any){
    this.selectCategory.emit($event.value);
    console.log($event.value);
 }

}
