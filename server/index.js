const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.imdb.com/list/ls069699706/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=4dc7ad1a-76a6-49eb-9acb-5d6959572df8&pf_rd_r=ZJATV9C4EXQ1FE10VD3V&pf_rd_s=right-4&pf_rd_t=48201&pf_rd_i=watchlist&ref_=ttls_vw_grd&sort=list_order,asc&st_dt=&mode=grid&page='

const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(require('body-parser').json());

app.get('/', async (req, res) => {
    const movies = await run();
    res.status(201).json(movies);
});


async function run() {
    let pageNum = 1, pageExists = true;
    let movies = [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    while (pageExists) {
        let imdbURL = url + pageNum;
        await page.goto(imdbURL);
        // TODO: english names
        const html = await page.content();
        const tags = $('.title > a', html);
        const length = tags.length;
        const hasNext = $('a.flat-button.next-page.disabled', html).length === 0;
        pageExists = hasNext;
        
        for (let i = 0; i < length; i++) {
            movies.push(tags[i].children[0].data);
            // console.log((i + 1) / length * 100);
        }
        pageNum++;
    };


    browser.close();
    return movies;
}


// app.use(require('express-static')('./'));

let nodePort = (process.env.NODE_PORT) ? Number(process.env.NODE_PORT) : 3002;
console.log('Listening on ', nodePort);

app.listen(nodePort);