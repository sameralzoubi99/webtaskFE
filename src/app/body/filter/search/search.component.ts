import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { Survey } from '../../models/survey.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent {
  constructor(private dataService: DataService) {}
  surveys!: Survey[];

  ngOnInit() {
    this.dataService.surveys$.subscribe(
      (surveys: Survey[]) => (this.surveys = surveys)
    );
  }
  searchBySurveyName(searchText: string) {
    console.log(searchText);

    this.surveys = this.dataService.surveys.filter((survey) => {
      return survey.SurveyName.toLowerCase().includes(searchText.toLowerCase());
    });

    this.dataService.surveys$.next(this.surveys);
  }
}
