const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const fetch = require("node-fetch");

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listening on port: ' + port)

const apiUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,LINK&tsyms=USD&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285'
var apiData;

function getApiData() {
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => apiData = data);
}

setInterval(() => getApiData(), 5000);

app.get('/api-data', (req, res) => {

    res.send( apiData );

});