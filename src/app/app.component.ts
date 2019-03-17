import { Component, OnInit } from '@angular/core';
import { readData } from './imdb'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'scraping-angular';


  ngOnInit(): void {
    readData.then((res: Array<any>) => {

      const [columns, ...data] = res;

      const runtimeIndex: number = 9;
      const yearIndex: number = 10;
      const genresIndex: number = 11;

      const runtime = data.map(d => d[runtimeIndex]);
      const year = data.map(d => d[yearIndex]);

      // genres
      const genres = data.map(d => d[genresIndex]);
      let allGenres: object = {};
      const addData = (genre: string) => {
        if (!allGenres[genre]) {
          allGenres[genre] = { val: 0 }
        }
        else {
          allGenres[genre].val++;
        }
      }

      genres.map((genre: string) => {
        if (!genre) return;
        if (genre.indexOf(',') > -1) {
          const subGenres = genre.split(',').map(str => str.trim());
          subGenres.map(subGenre => addData(subGenre))
        }
        else {
          addData(genre);
        }
      })

      // TODO: sort
      console.log(allGenres);

      // runtimes
      const runtimes = data.map(d => d[runtimeIndex]);
      console.log(runtimes);

      // years
      const years = data.map(d => d[yearIndex]);
      console.log(years);

    })

  }

}
