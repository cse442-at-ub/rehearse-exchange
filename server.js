const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const fetch = require("node-fetch");

const app = express()


app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8081
app.listen(port)

app.get('/btc-usd', (req, res) => {

    const selectedCurrencyGet = "BTC";
    const selectedCurrencyGive = "USD";

    const apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=' +
        selectedCurrencyGet +
        '&tsyms=' +
        selectedCurrencyGive +
        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285'

    fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			res.redirect('/error');
		});

});

app.get('/eth-usd', (req, res) => {

    const selectedCurrencyGet = "ETH";
    const selectedCurrencyGive = "USD";

    const apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=' +
        selectedCurrencyGet +
        '&tsyms=' +
        selectedCurrencyGive +
        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285'

    fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			res.redirect('/error');
		});

});

app.get('/ltc-usd', (req, res) => {

    const selectedCurrencyGet = "LTC";
    const selectedCurrencyGive = "USD";

    const apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=' +
        selectedCurrencyGet +
        '&tsyms=' +
        selectedCurrencyGive +
        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285'

    fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			res.redirect('/error');
		});

});

app.get('/xrp-usd', (req, res) => {

    const selectedCurrencyGet = "XRP";
    const selectedCurrencyGive = "USD";

    const apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=' +
        selectedCurrencyGet +
        '&tsyms=' +
        selectedCurrencyGive +
        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285'

    fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			res.redirect('/error');
		});

});

app.get('/link-usd', (req, res) => {

    const selectedCurrencyGet = "LINK";
    const selectedCurrencyGive = "USD";

    const apiUrl = 'https://min-api.cryptocompare.com/data/price?fsym=' +
        selectedCurrencyGet +
        '&tsyms=' +
        selectedCurrencyGive +
        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285'

    fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			res.redirect('/error');
		});

});

console.log('Listening on port: ' + port)