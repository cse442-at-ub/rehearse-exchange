<template>
<div class="tile is-ancestor" id="root">
  <div class="tile is-parent is-vertical is-4">
    <div class="message-header">Currency Select</div>
    <div class="tile is-child is-12 is-vertical box message-body">
      <div class="currencySelect"><CurrencySelect/></div>
      <div class="currentCurrency"><CurrentCurrencies/></div>
    </div>

    <div class="message-header">Order Form</div>
    <div class="tile is-child box message-body">
      <OrderForm/>
    </div>
  </div>
  <div class="tile is-8 is-vertical is-parent">
    <div class="message-header">Price Chart</div>
    <div class="tile is-child box message-body" id="price-chart-tile">
      <PriceChart/>
    </div>
    <div class="message-header">Order History</div>
    <div class="tile is-child box message-body" id="order-history-tile">
      <OrderHistory/>
    </div>
  </div>
</div>
</template>

<script>
import CurrencySelect from './components/CurrencySelect.vue'
import OrderForm from './components/OrderForm.vue'
import PriceChart from './components/PriceChart.vue'
import OrderHistory from './components/OrderHistory.vue'
import CurrentCurrencies from './components/CurrentCurrencies.vue'

export default {
  name: 'App',
  components: {
    CurrencySelect,
    OrderForm,
    PriceChart,
    OrderHistory,
    CurrentCurrencies
  },
  data(){
    return{
      btcAmount:1000,
      ethAmount:200,
      ltcAmount:0,
      xrpAmount:1000,
      linkAmount:1
    }
  }
}
</script>

<style scoped>

#root {
  top: 0; right: 0; bottom: 0; left: 0;
  margin: 0rem;
  background-color: gainsboro;
  height: 100vh;
}

.message-header {
  background-color: whitesmoke;
  color: black;
}

#price-chart-tile {
  max-height: 60%;
}

#order-history-tile {
  max-height: 30%;
}
.currencySelect{
  display:inline;
  float:left;
}
.currentCurrency{
  display:inline;
  float:right;
}
</style>
