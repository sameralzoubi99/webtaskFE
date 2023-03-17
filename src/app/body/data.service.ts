import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Survey } from './models/survey.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'https://mocki.io/v1/53627621-200a-4dc9-882b-4ab93dd2a31f';
  surveys$ = new Subject<Survey[]>();
  private unfilteredSurveys!: Survey[];
  surveySelected$ = new Subject<Survey>();

  constructor(private httpClient: HttpClient) {}

  getSurveys(): Observable<[Survey[]]> {
    return this.httpClient.get<[Survey[]]>(this.baseUrl);
  }

  set surveys(surveys: Survey[]) {
    this.unfilteredSurveys = surveys;
  }

  get surveys() {
    return this.unfilteredSurveys;
  }
}
