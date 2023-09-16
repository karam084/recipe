import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { RecipeComponent } from '../Components/recipe/recipe.component';
import { AddEditRecipeModule } from './add-edit-recipe/add-edit-recipe.module';


@NgModule({
  declarations: [
    RecipeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    AddEditRecipeModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    RecipeComponent

  ],
  providers: [
    MessageService
  ]
})
export class RecipeModule { }
