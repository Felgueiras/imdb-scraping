import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';






@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  url: string = 'https://www.imdb.com/list/ls069699706/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=4dc7ad1a-76a6-49eb-9acb-5d6959572df8&pf_rd_r=ZJATV9C4EXQ1FE10VD3V&pf_rd_s=right-4&pf_rd_t=48201&pf_rd_i=watchlist&ref_=ttls_vw_grd&sort=list_order,asc&st_dt=&mode=grid&page=1'

  constructor(private http: HttpClient) { }


  startScraping(): void {

    fetch(this.url, { mode: 'cors' }).then(res => {

      debugger;
    });
    this.http.get<any>(this.url).pipe(
      tap(_ => {
        debugger;
      })
    );
  }

}
