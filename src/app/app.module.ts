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
// import {
//   MatDialog,
//   MAT_DIALOG_DATA,
//   MatDialogRef,
// } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Dialog } from './body/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablePaginationComponent } from './body/table-pagination/table-pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    SurveysCardsComponent,
    CardComponent,
    Dialog,
    TablePaginationComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
