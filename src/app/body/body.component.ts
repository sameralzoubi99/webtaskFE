import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Dialog } from './dialog/dialog.component';
import { DialogData } from './models/dialog-data.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass'],
})
export class BodyComponent {
  dialogData = {} as DialogData;

  surveysTypeBody = 'Published';

  constructor(public dialog: MatDialog) {
    this.dialogData.status = false;
  }

  getButtonClass() {
    return this.dialogData.status
      ? 'btn btn-success'
      : 'btn btn-secondary disabled';
  }

  changeButtonStatus(card: DialogData) {
    this.dialogData.status = card.status;
    this.dialogData.SurveyName = card.SurveyName;
    this.dialogData.SRV_ID = card.SRV_ID;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      data: {
        status: this.dialogData.status,
        SurveyName: this.dialogData.SurveyName,
        SRV_ID: this.dialogData.SRV_ID,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.dialogData.SurveyName = result.SurveyName;
      this.dialogData.SRV_ID = result.SRV_ID;
    });
  }

  changeSurveysType(type: MatTabChangeEvent) {
    // console.log(type.tab.textLabel);
    this.surveysTypeBody = type.tab.textLabel;
  }
}
