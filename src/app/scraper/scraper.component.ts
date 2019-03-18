import { Component, OnInit } from '@angular/core';
import { ScraperService } from '../scraper.service';

@Component({
  selector: 'app-scraper',
  templateUrl: './scraper.component.html',
  styleUrls: ['./scraper.component.css']
})
export class ScraperComponent implements OnInit {

  constructor(private scraperService: ScraperService) { }

  data: object

  ngOnInit() {

    this.scraperService.startScraping();
    //   .subscribe(res => {
    //     this.data = res;
    //   });
  }

}
