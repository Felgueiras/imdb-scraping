import { parse } from 'papaparse';

export const readData = new Promise((resolve, reject) => {
    parse("https://gist.githubusercontent.com/Felgueiras/84c639b601a13d06e7d37805f5d57fe5/raw/7bcb5dd8402f42c901fe09bfb197f4180fa07204/seen.csv", {
        download: true,
        complete: (result) => {
            resolve(result.data);
        }

    });
})


