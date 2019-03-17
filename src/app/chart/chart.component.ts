import { Component, OnInit, Input } from '@angular/core';
import ImdbAPI from '../ImdbAPI';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public data: Array<object> = [];
  public labels: Array<string>;
  @Input() type: string;
  @Input() field: string = 'years';
  @Input() files = [];

  constructor() { }

  ngOnInit() {
    let labels = [];
    let values: Array<string> = [];
    let keyValues = {};
    switch (this.field) {
      case 'runtime':
        // years
        const runtimes = this.files.map(d => d[ImdbAPI.runtimeIndex]);
        runtimes.map((year: string) => {
          ImdbAPI.addData(year, keyValues);
        })
        fillObjectKeys(keyValues, labels, values);
        // TODO: fill in "blanks" (years without movies)
        this.labels = labels;
        this.data = [{ data: values, label: 'Runtime' }];
        break;
      case 'years':
        // years
        const years = this.files.map(d => d[ImdbAPI.yearIndex]);
        years.map((year: string) => {
          ImdbAPI.addData(year, keyValues);
        })
        fillObjectKeys(keyValues, labels, values);

        // TODO: fill in "blanks" (years without movies)
        this.labels = labels;
        this.data = [{ data: values, label: 'Year of release' }];
        break;

      case 'genre':
        // genres
        const genres = this.files.map(d => d[ImdbAPI.genresIndex]);
        genres.map((genre: string) => {
          if (!genre) return;
          if (genre.indexOf(',') > -1) {
            const subGenres = genre.split(',').map(str => str.trim());
            subGenres.map(subGenre => ImdbAPI.addData(subGenre, keyValues))
          }
          else {
            ImdbAPI.addData(genre, keyValues);
          }
        })

        fillObjectKeys(keyValues, labels, values);
        this.labels = labels;
        this.data = [{ data: values, label: 'Genres' }];

        break;

      default:
        break;
    }
  }

}
function fillObjectKeys(keyValues: {}, labels: any[], values: string[]) {
  for (var property in keyValues) {
    if (keyValues.hasOwnProperty(property)) {
      // do stuff
      labels.push(property);
      values.push(keyValues[property].val);
    }
  }
  return [labels, values];
}

