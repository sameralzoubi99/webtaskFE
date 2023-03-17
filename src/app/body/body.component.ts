import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
// import { Dialog } from './dialog/dialog.component';
import { Survey } from './models/survey.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass'],
})
export class BodyComponent implements OnInit {
  filteredSurveys!: Survey[];
  isViewGrid: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSurveys().subscribe({
      next: (result) => {
        this.dataService.surveys$.next(result[0]);
        this.dataService.surveys = result[0];
      },
      error: () => {},
    });
  }

  changeView() {
    this.isViewGrid = !this.isViewGrid;
  }
}
