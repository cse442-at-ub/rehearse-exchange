<template>
<div class="tile is-ancestor" id="root">
  <div class="tile is-parent is-vertical is-4">
    <div class="message-header">Currency Select</div>
    <div class="tile is-child box message-body" id="currency-select">
      <div class="currencySelect"><CurrencySelect @getCurrencies = "selectedCurrencyGet = $event" /></div>
      <div class="currentCurrency"><CurrentCurrencies/></div>
      <div class="addCurrencies"><AddCurrencies @changeAmount = "addAmount($event)"/></div>
    </div>
    <div class="message-header">Order Form</div>
    <div class="tile is-child box message-body" id="order-form">
      <OrderForm @placeOrder="orderInfo = $event"/>
    </div>
  </div>
  <div class="tile is-parent is-vertical is-8">
    <div class="message-header">Price Chart</div>
    <div class="tile is-child box message-body" id="price-chart">
      <PriceChart/>
    </div>
    <div class="message-header">Order History</div>
    <div class="tile is-child box message-body" id="order-history">
      <OrderHistory ref="OrderHistory"/>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
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
  data() {
    return{
      currentBTC: 0,
      currentETH: 0,
      currentLTC: 0,
      currentXRP: 0,
      currentLINK: 0,
      btcAmount: 0,
      ethAmount: 0,
      ltcAmount: 0,
      xrpAmount: 0,
      linkAmount: 0,
      usdAmount: 0,
      selectedCurrencyGet: "BTC",
      selectedCurrencyGive: "USD",
      orderInfo: [],
      rowData: [],
      selectedCurrencyPrice: null,
      interval: null,
        ordersArray: []
    }
  },
  methods: {
    getPrice() {
      if (this.selectedCurrencyGive == "USD") {
        axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=' +
                        this.selectedCurrencyGet +
                        '&tsyms=' +
                        this.selectedCurrencyGive +
                        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (this.selectedCurrencyPrice = response.data.USD));
      } else if (this.selectedCurrencyGive == "BTC") {
        axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=' +
                        this.selectedCurrencyGet +
                        '&tsyms=' +
                        this.selectedCurrencyGive +
                        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (this.selectedCurrencyPrice = response.data.BTC));
      } else if (this.selectedCurrencyGive == "ETH") {
        axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=' +
                        this.selectedCurrencyGet +
                        '&tsyms=' +
                        this.selectedCurrencyGive +
                        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (this.selectedCurrencyPrice = response.data.ETH));
      } else if (this.selectedCurrencyGive == "LTC") {
        axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=' +
                        this.selectedCurrencyGet +
                        '&tsyms=' +
                        this.selectedCurrencyGive +
                        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (this.selectedCurrencyPrice = response.data.LTC));
      } else if (this.selectedCurrencyGive == "XRP") {
        axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=' +
                        this.selectedCurrencyGet +
                        '&tsyms=' +
                        this.selectedCurrencyGive +
                        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (this.selectedCurrencyPrice = response.data.XRP));
      } else if (this.selectedCurrencyGive == "LINK") {
        axios
                .get('https://min-api.cryptocompare.com/data/price?fsym=' +
                        this.selectedCurrencyGet +
                        '&tsyms=' +
                        this.selectedCurrencyGive +
                        '&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (this.selectedCurrencyPrice = response.data.LINK));
      }
      setTimeout(() => {
        window.console.log(this.selectedCurrencyPrice);
      }, 2000);
    },
      executeOrder(){
        var order;
        for(order of this.ordersArray){
            if(order[4]!=null){        //if Stop order
                if(order[0]=="Buy") {   //if Buy

                }
                else{
                  var sellAmount = order[3] - (order[3] * 0.005);
                  if (order[5] == "BTC") { //if BTC
                    if (order[4] <= this.currentBTC) { //if Stop met
                      if (order[3] <= this.currentBTC) { //if limit met
                        this.usdAmount = this.usdAmount + (sellAmount / this.currentBTC);
                      }
                    }
                  }
                  if (order[5] == "ETH") { //if ETH
                    if (order[4] >= this.currentETH) { //if Stop met
                      if (order[3] >= this.currentETH) { //if limit met
                        this.usdAmount = this.usdAmount + (sellAmount / this.currentETH);
                      }
                    }
                  }
                  if (this.orderInfo[5] == "LTC") { //if LTC
                    if (order[4] >= this.currentLTC) { //if Stop met
                      if (order[3] >= this.currentLTC) { //if limit met
                        this.usdAmount = this.usdAmount + (sellAmount / this.currentLTC);
                      }
                    }
                  }
                  if (order[5] == "XRP") { //if XRP
                    if (order[4] >= this.currentXRP) { //if Stop met
                      if (order[3] >= this.currentXRP) { //if limit met
                        this.usdAmount = this.usdAmount + (sellAmount / this.currentXRP);
                      }
                    }
                  }
                  if (order[5] == "LINK") { //if LINK
                    if (order[4] >= this.currentLink) { //if Stop met
                      if (order[3] >= this.currentLink) { //if limit met
                        this.usdAmount = this.usdAmount + (sellAmount / this.currentLINK);
                      }
                    }
                  }
                }
            }
            else{                              //else Limit Order
              if(order[0]=="Buy") {   //if Buy

              }
              else{
                sellAmount = order[2] - (order[2] * 0.005);
                if (order[5] == "BTC") { //if BTC
                  if (order[3] <= this.currentBTC) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount / this.currentBTC);
                  }
                }
                if (order[5] == "ETH") { //if ETH
                  if (order[3] >= this.currentETH) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount / this.currentETH);
                  }

                }
                if (order[5] == "LTC") { //if LTC
                  if (order[3] >= this.currentLTC) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount / this.currentLTC);
                  }

                }
                if (order[5] == "XRP") { //if XRP
                  if (order[3] >= this.currentXRP) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount / this.currentXRP);
                  }
                }
                if (order[5] == "LINK") { //if LINK
                  if (order[3] >= this.currentLink) { //if limit met
                      this.usdAmount = this.usdAmount + (sellAmount / this.currentLINK);
                  }
                }

              }

            }
        }
      },
    addAmount(pair) {
      if (pair[0] == 'btc') {
        this.btcAmount = this.btcAmount + parseFloat(pair[1]);
      }
      if (pair[0] == 'eth') {
        this.ethAmount = this.ethAmount + parseFloat(pair[1]);
      }
      if (pair[0] == 'ltc') {
        this.ltcAmount = this.ltcAmount + parseFloat(pair[1]);
      }
      if (pair[0] == 'xrp') {
        this.xrpAmount = this.xrpAmount + parseFloat(pair[1]);
      }
      if (pair[0] == 'link') {
        this.linkAmount = this.linkAmount + parseFloat(pair[1]);
      }
      if (pair[0] == 'usd') {
        this.usdAmount = this.usdAmount + parseFloat(pair[1]);
      }
    },
    checkMarketOrder() {
      if (this.orderInfo[0] == "Buy") {
        if (this.orderInfo[2] > this.usdAmount) {
          window.alert("Failed to buy, not enough USD");
          return false;
        } else {
          this.usdAmount = this.usdAmount - parseFloat(this.orderInfo[2]);
          var buyAmount = this.orderInfo[2] - (this.orderInfo[2] * 0.005);
          this.getPrice()
          if (this.selectedCurrencyGet == 'BTC') {
            this.btcAmount = this.btcAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'ETH') {
            this.ethAmount = this.ethAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'LTC') {
            this.ltcAmount = this.ltcAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'XRP') {
            this.xrpAmount = this.xrpAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'LINK') {
            this.linkAmount = this.linkAmount + (buyAmount / this.selectedCurrencyPrice);
          }
        }
      } else {
        var sellAmount = this.orderInfo[2] - (this.orderInfo[2] * 0.005);
        if (this.selectedCurrencyGet == 'BTC') {
          if (this.orderInfo[2] > this.btcAmount) {
            window.alert("Failed to sell, not enough BTC");
            return false;
          }
          this.btcAmount = this.btcAmount - parseFloat(this.orderInfo[2]);
          this.usdAmount = this.usdAmount + (sellAmount * this.selectedCurrencyPrice);
        }
        if (this.selectedCurrencyGet == 'ETH') {
          if (this.orderInfo[2] > this.ethAmount) {
            window.alert("Failed to sell, not enough ETH");
            return false;
          }
          this.ethAmount = this.ethAmount - parseFloat(this.orderInfo[2]);
          this.usdAmount = this.usdAmount + (sellAmount * this.selectedCurrencyPrice);
        }
        if (this.selectedCurrencyGet == 'LTC') {
          if (this.orderInfo[2] > this.ltcAmount) {
            window.alert("Failed to sell, not enough LTC");
            return false;
          }
          this.ltcAmount = this.ltcAmount - parseFloat(this.orderInfo[2]);
          this.usdAmount = this.usdAmount + (sellAmount * this.selectedCurrencyPrice);
        }
        if (this.selectedCurrencyGet == 'XRP') {
          if (this.orderInfo[2] > this.xrpAmount) {
            window.alert("Failed to sell, not enough XRP");
            return false;
          }
          this.xrpAmount = this.xrpAmount - parseFloat(this.orderInfo[2]);
          this.usdAmount = this.usdAmount + (sellAmount * this.selectedCurrencyPrice);
        }
        if (this.selectedCurrencyGet == 'LINK') {
          if (this.orderInfo[2] > this.linkAmount) {
            window.alert("Failed to sell, not enough LINK");
            return false;
          }
          this.linkAmount = this.linkAmount - parseFloat(this.orderInfo[2]);
          this.usdAmount = this.usdAmount + (sellAmount * this.selectedCurrencyPrice);
        }
      }
    },
    checkLimitOrder() {
      if (this.orderInfo[0] == "Buy") {
        if (this.orderInfo[2] > this.usdAmount) {
          window.alert("Failed to buy, not enough USD");
          return false;
        } else {
          this.usdAmount = this.usdAmount - parseFloat(this.orderInfo[2]);
          var buyAmount = this.orderInfo[2] - (this.orderInfo[2] * 0.005);
          if (this.selectedCurrencyGet == 'BTC') {
            this.btcAmount = this.btcAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'ETH') {
            this.ethAmount = this.ethAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'LTC') {
            this.ltcAmount = this.ltcAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'XRP') {
            this.xrpAmount = this.xrpAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'LINK') {
            this.linkAmount = this.linkAmount + (buyAmount / this.selectedCurrencyPrice);
          }
        }
      }
      else {
          if (this.selectedCurrencyGet == 'BTC') {
              if (this.orderInfo[2] > this.btcAmount) {
                  window.alert("Failed to sell, not enough BTC");
                  return false;
              }
              this.btcAmount = this.btcAmount - parseFloat(this.orderInfo[2]);
              return true;
          }
          if (this.selectedCurrencyGet == 'ETH') {
              if (this.orderInfo[2] > this.ethAmount) {
                  window.alert("Failed to sell, not enough ETH");
                  return false;
              }

              this.ethAmount = this.ethAmount - parseFloat(this.orderInfo[2]);
              return true;
          }
          if (this.selectedCurrencyGet == 'LTC') {
              if (this.orderInfo[2] > this.ltcAmount) {
                  window.alert("Failed to sell, not enough LTC");
                  return false;
              }
              this.ltcAmount = this.ltcAmount - parseFloat(this.orderInfo[2]);
              return true;
          }
          if (this.selectedCurrencyGet == 'XRP') {
              if (this.orderInfo[2] > this.xrpAmount) {
                  window.alert("Failed to sell, not enough XRP");
                  return false;
              }
              this.xrpAmount = this.xrpAmount - parseFloat(this.orderInfo[2]);
              return true;
          }
          if (this.selectedCurrencyGet == 'LINK') {
              if (this.orderInfo[2] > this.linkAmount) {
                  window.alert("Failed to sell, not enough LINK");
                  return false;
              }
              this.linkAmount = this.linkAmount - parseFloat(this.orderInfo[2]);
              return true;
          }
      }
    },
    checkStopOrder() {
      if (this.orderInfo[0] == "Buy") {
        if (this.orderInfo[2] > this.usdAmount) {
          window.alert("Failed to buy, not enough USD");
          return false;
        } else {
          this.usdAmount = this.usdAmount - parseFloat(this.orderInfo[2]);
          var buyAmount = this.orderInfo[2] - (this.orderInfo[2] * 0.005);
          if (this.selectedCurrencyGet == 'BTC') {
            this.btcAmount = this.btcAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'ETH') {
            this.ethAmount = this.ethAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'LTC') {
            this.ltcAmount = this.ltcAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'XRP') {
            this.xrpAmount = this.xrpAmount + (buyAmount / this.selectedCurrencyPrice);
          }
          if (this.selectedCurrencyGet == 'LINK') {
            this.linkAmount = this.linkAmount + (buyAmount / this.selectedCurrencyPrice);
          }
        }
      }
      else {
        if (this.selectedCurrencyGet == 'BTC') {
          if (this.orderInfo[2] > this.btcAmount) {
            window.alert("Failed to sell, not enough BTC");
            return false;
          }
          this.checkLimitOrder();
        }
        if (this.selectedCurrencyGet == 'ETH') {
          if (this.orderInfo[2] > this.ethAmount) {
              window.alert("Failed to sell, not enough ETH");
              return false;
          }
          this.checkLimitOrder();
        }
        if (this.selectedCurrencyGet == 'LTC') {
          if (this.orderInfo[2] > this.ltcAmount) {
            window.alert("Failed to sell, not enough LTC");
            return false;
          }
          this.checkLimitOrder();
        }
        if (this.selectedCurrencyGet == 'XRP') {
          if (this.orderInfo[2] > this.xrpAmount) {
            window.alert("Failed to sell, not enough XRP");
            return false;
          }
          this.checkLimitOrder();
        }
        if (this.selectedCurrencyGet == 'LINK') {
          if (this.orderInfo[2] > this.linkAmount) {
            window.alert("Failed to sell, not enough LINK");
            return false;
          }
          this.checkLimitOrder();
        }
      }
    },
  },
  watch: {
    orderInfo: function() {
        var check;
        if (this.orderInfo[1] == "Market") {
            check = this.checkMarketOrder();
        } else if (this.orderInfo[1] == "Limit") {
            check = this.checkLimitOrder();
        } else if (this.orderInfo[1] == "Stop") {
            check = this.checkStopOrder();
        }
        if (check) {
            if (this.orderInfo[1] != "Market") {
                this.ordersArray.push(this.orderInfo);
            }
            var newRowData = [];
            var date = new Date();
            newRowData.push(this.orderInfo[0]);
            newRowData.push(this.selectedCurrencyGet + "/" + this.selectedCurrencyGive);
            newRowData.push("size");
            newRowData.push(this.orderInfo[2] - (this.orderInfo[2] * 0.005));
            newRowData.push(this.orderInfo[2] * 0.005);
            newRowData.push((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
                + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
            newRowData.push("Filled");
            this.$refs.OrderHistory.addRow(newRowData);
        }
    },
    selectedCurrencyGet: function() {
      this.getPrice();
    }
  },
  mounted() {
    this.interval = setInterval(() => this.getPrice(), 2000);
  }
}
</script>

<style scoped>
#root {
  top: 0; right: 0; bottom: 0; left: 0;
  margin: 0rem;
  height: 100vh;
}

.message-header {
  background-color: #f5f5f5;
  color: black;
}

#order-form {
  overflow: auto;
  min-height: 58vh;
}

#order-history {
  overflow: auto;
  min-height: 20vh;
}

.currencySelect{
  width: 50%;
  float:left;
  padding-right: .5rem;
}
.currentCurrency{
  width: 50%;
  float:right;
  padding-left: .5rem;
}
.addCurrencies{
  padding-top: 1.5rem;

}
</style>
