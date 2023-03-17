import {
  AfterContentChecked,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { Survey } from '../models/survey.interface';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.sass'],
})
export class TablePaginationComponent implements AfterContentChecked, OnInit {
  constructor(private dataService: DataService) {}

  dataSource!: MatTableDataSource<Survey>;
  surveys!: Survey[];

  surveySelected?: Survey;

  ngOnInit(): void {
    this.dataService.surveys$.subscribe((data: Survey[]) => {
      this.surveys = data;
      this.dataSource = new MatTableDataSource<Survey>(this.surveys);
    });
    this.dataService.surveySelected$.subscribe(
      (data: Survey) => (this.surveySelected = data)
    );
  }
  ngAfterContentChecked() {
    this.dataService.surveys$.subscribe(
      (data: Survey[]) => (this.surveys = data)
    );
  }

  @Output() selected = new EventEmitter<{
    status: boolean;
    SurveyName: string;
    SRV_ID: number;
  }>();

  displayedColumns: string[] = ['SurveyName', 'From', 'To', 'Period'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Survey>(this.surveys);
    this.dataSource.paginator = this.paginator;
  }

  selectRow(survey: Survey) {
    this.surveySelected?.SRV_ID !== survey.SRV_ID
      ? this.dataService.surveySelected$.next(survey)
      : this.dataService.surveySelected$.next(undefined as any);
  }
}
