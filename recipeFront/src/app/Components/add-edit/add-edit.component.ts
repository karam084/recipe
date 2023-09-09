import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent {
  id:any;
  name: any;
  Ingredients: any;
  Steps: any;
  Image: any;
  
  selectedFile: File | null = null;

  @ViewChild('popupFormTemplate') popupFormTemplate!: TemplateRef<any>;

  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(this.popupFormTemplate, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addedit(addedit: any, arg1: { width: string; }) {
    throw new Error('Method not implemented.');
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  submitForm(): void {

    this.closeDialog();
  }
  //image 
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }
  uploadImage(): void {
    if (this.selectedFile) {
      // Perform the image upload logic here
      console.log('Selected file:', this.selectedFile);
    }}
}
