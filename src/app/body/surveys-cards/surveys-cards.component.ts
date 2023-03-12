import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Survey } from '../models/survey.interface';
import { Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-surveys-cards',
  templateUrl: './surveys-cards.component.html',
  styleUrls: ['./surveys-cards.component.sass'],
})
export class SurveysCardsComponent implements OnInit {
  @Output() selected = new EventEmitter<{
    status: boolean;
    SurveyName: string;
    SRV_ID: number;
  }>();

  @Input() public newSurveyName = {} as {
    SurveyName: string;
    SRV_ID: number;
  };

  @Input() public surveysType = {} as string;

  surveys: Survey[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.dataService.getSurveys().subscribe({
      next: (result) => {
        this.surveys = result[0];
        this.surveys.forEach((element) => {
          element.isSelected = false;
        });
      },
      error: () => {},
    });
  }

  ngOnChanges() {
    this.surveys.find((survey: Survey) => {
      return survey.SRV_ID === this.newSurveyName.SRV_ID
        ? (survey.SurveyName = this.newSurveyName.SurveyName)
        : undefined;
    });
  }

  selectCard(index: number) {
    this.surveys.forEach((card, i) => {
      if (i === index) {
        if (card.isSelected) {
          card.isSelected = false;
          this.selected.emit({
            status: false,
            SurveyName: '',
            SRV_ID: 0,
          });
        } else {
          card.isSelected = true;
          this.selected.emit({
            status: true,
            SurveyName: card.SurveyName,
            SRV_ID: card.SRV_ID,
          });
        }
      } else card.isSelected = false;
    });
  }

  getFilteredSurvey(): Observable<Survey[]> {
    if (this.surveysType === 'All Surveys') {
      return of(this.surveys);
    } else {
      return of(
        this.surveys.filter((survey) => {
          return survey.SURVEY_STATUS_EN === this.surveysType;
        })
      );
    }
  }
}
