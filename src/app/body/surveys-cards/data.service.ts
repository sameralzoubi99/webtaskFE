import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl: string = 'https://mocki.io/v1/53627621-200a-4dc9-882b-4ab93dd2a31f';

  constructor(private httpClient: HttpClient) {}

  getSurveys(): Observable<[Survey[]]> {
    return this.httpClient.get<[Survey[]]>(this.baseUrl);
  }
}
