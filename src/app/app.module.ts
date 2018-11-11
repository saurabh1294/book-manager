import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AddBookSelectorListComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaticDataService } from './shared/services/static-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddBookSelectorListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [{ provide: StaticDataService, useClass: StaticDataService }],
  bootstrap: [AddBookSelectorListComponent]
})
export class AppModule {}
