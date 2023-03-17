import { AfterContentChecked, Component, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Periods } from '../../models/periods.interface';
import { Survey } from '../../models/survey.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements AfterContentChecked {
  @Input() public survey = {} as Survey;
  isHover = false;
  periods: Periods[] = [];
  selectedSurvey?: Survey;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.periods = JSON.parse(this.survey.SurveyPeriods);
    this.dataService.surveySelected$.subscribe(
      (data: Survey) => (this.selectedSurvey = data)
    );
  }

  ngAfterContentChecked() {
    this.dataService.surveySelected$.subscribe(
      (data: Survey) => (this.selectedSurvey = data)
    );
  }

  getStatusClass() {
    let status =
      this.survey.SURVEY_STATUS_EN === 'Published'
        ? 'published'
        : this.survey.SURVEY_STATUS_EN === 'Closed'
        ? 'closed'
        : 'expired';
    // console.log(this.survey.SRV_ID + '' + this.selectedSurvey?.SRV_ID);
    if (this.survey.SRV_ID === this.selectedSurvey?.SRV_ID || this.isHover)
      return `${status}_select`;
    return status;
  }

  getIconClass() {
    let icon =
      this.survey.SURVEY_STATUS_EN == 'Published'
        ? 'fa-circle-check'
        : this.survey.SURVEY_STATUS_EN == 'Closed'
        ? 'fa-circle-xmark'
        : 'fa-clock';
    if (this.survey.SRV_ID === this.selectedSurvey?.SRV_ID || this.isHover)
      return `${icon} fa-solid`;
    return `${icon} fa-regular`;
  }

  onHover() {
    this.isHover = !this.isHover;
  }
}
