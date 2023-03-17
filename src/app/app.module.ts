import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { SurveysCardsComponent } from './body/surveys-cards/surveys-cards.component';
import { CardComponent } from './body/surveys-cards/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePaginationComponent } from './body/table-pagination/table-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';
import { FilterComponent } from './body/filter/filter.component';
import { DateComponent } from './body/filter/date/date.component';
import { SearchComponent } from './body/filter/search/search.component';
import { TabsComponent } from './body/filter/tabs/tabs.component';
import { GoToDashboardComponent } from './body/filter/go-to-dashboard/go-to-dashboard.component';
import { Dialog } from './body/filter/go-to-dashboard/dialog/dialog.component';
import { Story2Component } from './story2/story2.component';
import { ChangePasswordComponent } from './story2/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SurveysCardsComponent,
    CardComponent,
    Dialog,
    TablePaginationComponent,
    FilterComponent,
    DateComponent,
    SearchComponent,
    TabsComponent,
    GoToDashboardComponent,
    Story2Component,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    MatCardModule,
    FontAwesomeModule,
    HttpClientModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
