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
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();
  modalType = "Add";
  recipeForm = this.fb.group({
    title: ["", Validators.required],
    price: [0, Validators.required],
    description: [""],
    category: ["", Validators.required],
    image: ["", Validators.required],

  });


  constructor(private fb: FormBuilder, private recipeService: ReciepeService, private messageService: MessageService) { }

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
      this.recipeService.saveRecipe(this.recipeForm.value, this.selectedRecipe).subscribe(
        (response) => {
          //console.log(response);
          this.clickAdd.emit(response);
          this.closeModel();
          const msg = this.modalType === 'Add' ? 'Recipe Added Successfully' : 'Recipe Updated Successfully';
           this.messageService.add({severity:'success', summary: 'Success', detail: msg});
        },
          error => {
            this.messageService.add({severity:'error', summary: 'Error', detail:error});
            //console.log(error);
          }
      );
    }
}
