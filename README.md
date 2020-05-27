# Rehearse Exchange

### What is this?

The goal of [rehearse.exchange](https://rehearse.exchange) is to allow novice traders to practice trading cryptocurrency in a simulated environment. Rehearse has an interface similar to many popular exchanges such as Coinbase or Gemini, but you're not trading with real assets (yet)! Add some play currency to your portfolio under "get some currency to start" and begin trading away.

Note: if Rehearse's browser tab is closed, though your session data will be saved, limit and stop orders will not continue to be processed. This is because order handling occurs client-side rather than server-side.

### What is it made with?

* The frontend is powered by the great [Vue.js](https://vuejs.org/) framework.
* The site is stylized with the help of the [Bulma](https://bulma.io/) CSS framework.
* The price chart is rendered with [vue-chartjs](https://vue-chartjs.org/), a wrapper for [Chart.js](https://www.chartjs.org/) in Vue.
* Both market data and the static assets of the site are served through our [Express](https://expressjs.com/) backend.
* Market data is retrieved from [CryptoCompare's API](https://min-api.cryptocompare.com/).