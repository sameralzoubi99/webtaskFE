import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Periods } from '../../models/periods.interface';
import { Survey } from '../../models/survey.interface';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass'],
})
export class DateComponent {
  constructor(private dataService: DataService) {}
  periods!: Periods[];

  surveys!: Survey[];

  ngOnInit() {
    this.dataService.surveys$.subscribe(
      (surveys: Survey[]) => (this.surveys = surveys)
    );
  }

  filterByDate(startDate: string, endDate: string) {
    const dateStart: Date = new Date(startDate);
    const dateEnd: Date = new Date(endDate);

    this.surveys = this.surveys.filter((survey) => {
      let status = false;
      this.periods = JSON.parse(survey.SurveyPeriods);
      if (this.periods)
        this.periods.map((period) => {
          const START_DATE: Date = new Date(period.START_DATE);
          const END_DATE: Date = new Date(period.END_DATE);
          if (START_DATE >= dateStart && END_DATE <= dateEnd) status = true;
        });
      return status;
    });

    this.dataService.surveys$.next(this.surveys);
  }
}
