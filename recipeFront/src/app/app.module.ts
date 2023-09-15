import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { HttpClientModule }        from '@angular/common/http';
import { AppRoutingModule }        from './app-routing.module';
import { AppComponent }            from './app.component';
// import { RecipeComponent }         from './Components/recipe/recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule}          from '@angular/material/dialog';
import { MatButtonModule}          from '@angular/material/button';
//import { AddEditComponent }        from './Components/add-edit/add-edit.component';
import { MatFormFieldModule }      from '@angular/material/form-field';
import { RecipeModule } from './recipe/recipe.module';
//import { AddEditRecipeComponent} from './Components/recipe/add-edit-recipe/add-edit-recipe.component';

@NgModule({  declarations: [
    AppComponent,
    //RecipeComponent,
   // AddEditComponent,
    //AddEditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    RecipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
