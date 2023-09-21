import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { FilterRecipeComponent } from '../Components/recipe/filter-recipe/filter-recipe.component'
import { DropdownModule } from 'primeng/dropdown';
import { RecipeComponent } from '../Components/recipe/recipe.component';
import { AddEditRecipeModule } from './add-edit-recipe/add-edit-recipe.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    RecipeComponent,
    FilterRecipeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    AddEditRecipeModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    FormsModule,
    ConfirmDialogModule
  ],
  exports: [
    RecipeComponent

  ],
  providers: [
    MessageService, ConfirmationService
  ]
})
export class RecipeModule { }
