const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const fetch = require('node-fetch');

const { apiKey } = require('./secret')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)

var minuteResults = []
const minuteUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,LTC,ETH,XRP,LINK&tsyms=USD&api_key=' + apiKey

var hourResults = [,,,,]
const hourUrls = [
    'https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histohour?fsym=LTC&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histohour?fsym=ETH&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histohour?fsym=XRP&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histohour?fsym=LINK&tsym=USD&limit=28&api_key=' + apiKey,
];

var dayResults = [,,,,]
const dayUrls = [
    'https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histoday?fsym=LTC&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histoday?fsym=XRP&tsym=USD&limit=28&api_key=' + apiKey,
    'https://min-api.cryptocompare.com/data/v2/histoday?fsym=LINK&tsym=USD&limit=28&api_key=' + apiKey,
];

function getMinute() {
    fetch(minuteUrl)
        .then(res => res.json())
        .then(data => { 
            minuteResults.push(data);
            if (minuteResults.length > 30) {
                minuteResults.shift();
            }
        });
}

function getHour() {
    Promise.all(hourUrls.map(url =>
        fetch(url)
            .then(res => res.json())
            .then(data => hourResults[hourUrls.indexOf(url)] = data.Data.Data)
    ));
}

function getDay() {
    Promise.all(dayUrls.map(url =>
        fetch(url)
            .then(res => res.json())
            .then(data => dayResults[dayUrls.indexOf(url)] = data.Data.Data)
    ));
}

getMinute();
getHour();
getDay();

setInterval(function() {
    getMinute();
    var date = new Date();
    if (date.getMinutes() == 0) {
        getHour();
        if (date.getHours() == 0) {
            getDay();
        }
    }
}, 60000);

app.get('/current-prices', (req, res) => {

    res.send( minuteResults[minuteResults.length - 1] );

});

app.get('/minute-data', (req, res) => {

    res.send( minuteResults );

});

app.get('/hour-data', (req, res) => {

    res.send( hourResults );

});

app.get('/day-data', (req, res) => {

    res.send( dayResults );

});