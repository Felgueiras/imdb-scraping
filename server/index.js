const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.imdb.com/list/ls069699706/?mode=grid&page='

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
    // avoid images
    await page.setRequestInterception(true);
    page.on('request', request => {
        if (request.resourceType() === 'image' || request.resourceType() === 'stylesheet' || request.resourceType() === 'font')
            request.abort();
        else
            request.continue();
    });
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

let nodePort = (process.env.NODE_PORT) ? Number(process.env.NODE_PORT) :3002;
console.log(`Listening on http://localhost:${nodePort}`);

app.listen(nodePort);