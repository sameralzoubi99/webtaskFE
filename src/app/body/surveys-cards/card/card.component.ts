import { Component, Input } from '@angular/core';
import { Periods } from '../../models/periods.interface';
import { Survey } from '../../models/survey.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent {
  @Input() public survey = {} as Survey;
  isHover = false;
  periods: Periods[] = [];

  constructor() {}

  ngOnInit() {
    this.periods = JSON.parse(this.survey.SurveyPeriods);
    // console.log(this.survey.isSelected);
  }

  getStatusClass() {
    let status =
      this.survey.SURVEY_STATUS_EN === 'Published'
        ? 'published'
        : this.survey.SURVEY_STATUS_EN === 'Closed'
        ? 'closed'
        : 'expired';

    if (this.survey.isSelected || this.isHover) return `${status}_select`;
    return status;
  }

  getIconClass() {
    let icon =
      this.survey.SURVEY_STATUS_EN == 'Published'
        ? 'fa-circle-check'
        : this.survey.SURVEY_STATUS_EN == 'Closed'
        ? 'fa-circle-xmark'
        : 'fa-clock';
    if (this.survey.isSelected || this.isHover) return `${icon} fa-solid`;
    return `${icon} fa-regular`;
  }

  onHover() {
    this.isHover = !this.isHover;
  }
}
