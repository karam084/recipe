import { Component, Input, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReciepeService } from 'src/app/Service/reciepe.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.css']
})
export class AddEditRecipeComponent implements OnInit, OnChanges {
  @Input() displayAddRecipe: boolean = true;
  @Input() selectedRecipe: any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddRecipe: EventEmitter<any> = new EventEmitter<any>();
  modalType = 'Add';
  recipeForm = this.fb.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    description: [''],
    imageUrl: ['', Validators.required],
    category: ['', Validators.required],

  });


  constructor(private fb: FormBuilder, private ReciepeService: ReciepeService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.selectedRecipe) {
      this.modalType = 'Edit';
      this.recipeForm.patchValue(this.selectedRecipe);
    }else{
      this.recipeForm.reset();
      this.modalType = 'Add';
    }
  }

  closeModel(){
    this.recipeForm.reset();
    this.clickClose.emit(true);
    const msg = this.modalType === 'Add' ? 'Recipe Added Successfully' : 'Recipe Updated Successfully';
    this.messageService.add({severity:'success', summary: 'Success', detail: msg});
    }

    addRecipe(){
     // console.log(this.recipeForm.value);
      this.ReciepeService.saveRecipe(this.recipeForm.value, this.selectedRecipe).subscribe(
        (response) => {
          this.clickAddRecipe.emit(response);
         this.closeModel();
          },
          error => {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'Recipe Not Added'});
            console.log(error);
          }
      );
    }
}
