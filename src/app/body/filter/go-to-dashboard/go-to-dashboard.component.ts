import { AfterContentChecked, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../data.service';
import { Survey } from '../../models/survey.interface';
import { Dialog } from './dialog/dialog.component';

@Component({
  selector: 'app-go-to-dashboard',
  templateUrl: './go-to-dashboard.component.html',
  styleUrls: ['./go-to-dashboard.component.sass'],
})
export class GoToDashboardComponent implements AfterContentChecked {
  constructor(public dialog: MatDialog, private dataService: DataService) {}
  survey!: Survey;
  surveys!: Survey[];

  ngOnInit() {
    this.dataService.surveySelected$.subscribe(
      (survey: Survey) => (this.survey = survey)
    );
  }

  ngAfterContentChecked() {}

  getButtonClass() {
    return this.survey ? 'btn btn-success' : 'btn btn-secondary disabled';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, { data: this.survey });
    dialogRef.afterClosed().subscribe((result) => {
      let updatedSurveys = this.dataService.surveys;
      updatedSurveys.forEach((survey) => {
        if (survey.SRV_ID === result.survey.SRV_ID)
          survey.SurveyName = result.SurveyName;
      });
      this.dataService.surveys = updatedSurveys;
    });
  }
}
