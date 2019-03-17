import { Component, OnInit } from '@angular/core';
import { readData } from './imdb'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'scraping-angular';

  runtimes = [];

  years = [];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLegend = true;

  public barChartLabels = [];
  public barChartData = [];

  public data = [];


  ngOnInit(): void {
    readData.then((res: Array<any>) => {
      const [, ...data] = res;
      this.data = data;
    })

  }

}
