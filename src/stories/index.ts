import { storiesOf, moduleMetadata } from '@storybook/angular';
import { AppComponent } from 'src/app/app.component';
import { ChartComponent } from 'src/app/chart/chart.component';
import { ChartsModule } from 'ng2-charts';

import { f } from './dummy'
import { ScraperComponent } from 'src/app/scraper/scraper.component';
import { HttpClientModule } from '@angular/common/http';


const baseMetadata = {
    imports: [
        ChartsModule,
        HttpClientModule
    ],
    schemas: [],
    declarations: [
        AppComponent,
        ChartComponent
    ],
    providers: [],
}


storiesOf('Chart', module)
    .addDecorator(
        moduleMetadata(baseMetadata)
    )
    .add('main', () => ({
        component: AppComponent
    }))
    .add('bar (years)', () => ({
        component: ChartComponent,
        props: {
            type: 'bar',
            field: 'years',
            files: f
        }
    }))
    .add('bar (genre)', () => ({
        component: ChartComponent,
        props: {
            type: 'bar',
            field: 'genre',
            files: f
        }
    }))
    .add('line (runtime)', () => ({
        component: ChartComponent,
        props: {
            type: 'line',
            field: 'runtime',
            files: f
        }
    }));

storiesOf('Scraping', module)
    .addDecorator(
        moduleMetadata(baseMetadata)
    )
    .add('Scraper', () => ({
        component: ScraperComponent
    }))