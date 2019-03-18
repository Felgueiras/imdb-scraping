import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ScraperComponent } from './scraper/scraper.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ScraperComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
