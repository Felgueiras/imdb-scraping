import ImdbApi from "src/app/ImdbAPI";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sample = ["1", "tt4016934", "2017-05-09", "2017-05-09", "", "Ah-ga-ssi", "https://www.imdb.com/title/tt4016934/", "movie", "8.1", "145", "2016", "Drama, Romance, Thriller", "75065", "2016-05-14", "Chan-wook Park"];

let files = [];
for (let index = 0; index < 100; index++) {
    const aux = JSON.parse(JSON.stringify(sample));
    aux[ImdbApi.yearIndex] = getRandomInt(1950, 2019);
    aux[ImdbApi.runtimeIndex] = getRandomInt(30, 160);
    files.push(aux);
}
console.log(files);


export const f = files;