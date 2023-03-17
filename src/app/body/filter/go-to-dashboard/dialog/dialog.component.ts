import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Survey } from 'src/app/body/models/survey.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class Dialog {
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: Survey,
    public dialog: MatDialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  // onClick(surveyNameInput: HTMLInputElement): void {
  //   console.log(surveyNameInput.value);
  //   this.dialogRef.close();
  // }
}
