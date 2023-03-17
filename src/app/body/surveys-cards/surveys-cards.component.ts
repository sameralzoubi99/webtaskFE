import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Survey } from '../models/survey.interface';
import { DataService } from '../data.service';
@Component({
  selector: 'app-surveys-cards',
  templateUrl: './surveys-cards.component.html',
  styleUrls: ['./surveys-cards.component.sass'],
})
export class SurveysCardsComponent implements OnInit, AfterContentChecked {
  constructor(private dataService: DataService) {}
  surveys!: Survey[];
  surveySelected?: Survey;
  ngOnInit(): void {
    this.dataService.surveys$.subscribe(
      (data: Survey[]) => (this.surveys = data)
    );
    this.dataService.surveySelected$.subscribe(
      (data: Survey) => (this.surveySelected = data)
    );
  }

  ngAfterContentChecked() {
    this.dataService.surveys$.subscribe(
      (data: Survey[]) => (this.surveys = data)
    );
  }

  selectCard(survey: Survey) {
    this.surveySelected?.SRV_ID !== survey.SRV_ID
      ? this.dataService.surveySelected$.next(survey)
      : this.dataService.surveySelected$.next(undefined as any);
  }
}
