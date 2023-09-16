import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRecipeComponent } from 'src/app/Components/recipe/add-edit-recipe/add-edit-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AddEditRecipeComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    AddEditRecipeComponent

  ]
})
export class AddEditRecipeModule { }
