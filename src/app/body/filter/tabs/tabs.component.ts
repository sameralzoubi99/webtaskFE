import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Survey } from '../../models/survey.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass'],
})
export class TabsComponent {
  constructor(private dataService: DataService) {}
  surveys!: Survey[];
  ngOnInit(): void {
    this.dataService.surveys$.subscribe(
      (data: Survey[]) => (this.surveys = data)
    );
  }

  filterSurveys(currentTab: string) {
    if (currentTab !== 'All Surveys') {
      this.surveys = this.dataService.surveys.filter((survey) => {
        return survey.SURVEY_STATUS_EN === currentTab;
      });
    } else {
      this.surveys = this.dataService.surveys;
    }
    this.dataService.surveys$.next(this.surveys);
  }
}
