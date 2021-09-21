const axios = require('axios');
const cheerio = require('cheerio');

const start = async() => {
    const res = await axios.get('https://www.reddit.com/r/Showerthoughts/');

    const $ = cheerio.load(res.data);

    $(`h3`).each((i, el) => {
        console.log(`\n` + $(el).first().text());
    });
}

start();

// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
// noob
