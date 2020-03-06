<template>
<div class="tile is-ancestor" id="root">
  <div class="tile is-parent is-vertical is-4">
    <div class="message-header">Currency Select</div>
    <div class="tile is-child box message-body" id="currency-select">
      <div class="currencySelect"><CurrencySelect @getCurrencies = "selectedCurrencyGet = $event" /></div>
      <div class="addCurrencies"><AddCurrencies @changeAmount = "addAmount($event)"/></div>
      <div class="currentCurrency"><CurrentCurrencies/></div>

    </div>
    <div class="message-header">Order Form</div>
    <div class="tile is-child box message-body" id="order-form">
      <OrderForm/>
    </div>
  </div>
  <div class="tile is-parent is-vertical is-8">
    <div class="message-header">Price Chart</div>
    <div class="tile is-child box message-body" id="price-chart">
      <PriceChart/>
    </div>
    <div class="message-header">Order History</div>
    <div class="tile is-child box message-body" id="order-history">
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
import AddCurrencies from './components/AddCurrencies.vue'

export default {
  name: 'App',
  components: {
    CurrencySelect,
    OrderForm,
    PriceChart,
    OrderHistory,
    CurrentCurrencies,
    AddCurrencies,
  },
  methods: {
    changeCurrencies(get){
      this.selectedCurrencyGet = get;
    },
    addAmount(pair){
        if(pair[0]=='btc'){
          this.btcAmount = this.btcAmount+pair[1];
        }
        if(pair[0]=='eth'){
          this.ethAmount=this.ethAmount+pair[1];
        }
        if(pair[0]=='ltc'){
          this.ltcAmount=this.ltcAmount+pair[1];
        }
        if(pair[0]=='xrp'){
          this.xrpAmount=this.xrpAmount+pair[1];
        }
        if(pair[0]=='link'){
          this.linkAmount=this.linkAmount+pair[1];
        }
        if(pair[0]=='usd'){
          this.usdAmount=this.usdAmount+pair[1];
        }
    },
  },
  data(){
    return{
      btcAmount:1000,
      ethAmount:200,
      ltcAmount:0,
      xrpAmount:1000,
      linkAmount:1,
      usdAmount:1000,
      selectedCurrencyGet: "BTC",
      selectedCurrencyGive: "USD",

    }
  }
}
</script>

<style scoped>

#root {
  top: 0; right: 0; bottom: 0; left: 0;
  margin: 0rem;
  background-color: #dcdcdc;
  height: 100vh;
}

.message-header {
  background-color: #f5f5f5;
  color: black;
}

#currency-select {
  min-height: 12vh;
  max-height: 12vh;
}

#order-history {
  overflow: auto;
  height: 20vh;
}

.currencySelect{
  display:inline;
  float:left;
}
.currentCurrency{
  display:inline;
  float:right;
}
.addCurrencies{
  display:inline;
  float:center;
}
</style>
