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
        <OrderHistory @cancel="cancelOrder($event)" ref="OrderHistory"/>
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
        btcAmount: 0,
        ethAmount: 0,
        ltcAmount: 0,
        xrpAmount: 0,
        linkAmount: 0,
        usdAmount: 0,
        currentUSD:0,
        currentBTC:0,
        currentETH:0,
        currentLTC:0,
        currentXRP:0,
        currentLINK:0,
        selectedCurrencyGet: "BTC",
        selectedCurrencyGive: "USD",
        orderInfo: [],
        rowData: [],
        ordersArray: [],
      }
    },
    methods: {
      getPrice() {
        axios
                .get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP,LINK&tsyms=USD&api_key=81fe37e9e9c0f635a9584eb3998625c5a70df94c755f84ee92a382d99410e285')
                .then(response => (
                        this.currentBTC = response.data.BTC.USD,
                                this.currentETH = response.data.ETH.USD,
                                this.currentLTC = response.data.LTC.USD,
                                this.currentXRP = response.data.XRP.USD,
                                this.currentLINK = response.data.LINK.USD
                ));
        this.executeOrder();
      },
      executeOrder(){
        var order;
        for (order of this.ordersArray) {
          if (order[4] != null) {        //if Stop order
            if (order[0] == "Buy") {
              var buyAmount = order[2] - (order[2] * 0.005);   //if Buy
              if (order[5] == "BTC") { //if BTC
                if (order[4] >= this.currentBTC) { //if Stop met
                  if (order[3] >= this.currentBTC) { //if limit met
                    this.btcAmount = this.btcAmount + (buyAmount);
                    if ((order[3] - this.currentBTC) != 0) {
                      this.usdAmount = this.usdAmount + order[2] * (order[3] - (this.currentBTC));
                    }
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "ETH") { //if ETH
                if (order[4] >= this.currentETH) { //if Stop met
                  if (order[3] >= this.currentETH) { //if limit met
                    this.ethAmount = this.ethAmount + (buyAmount);
                    if ((order[3] - this.currentETH) != 0) {
                      this.usdAmount = this.usdAmount + order[2] * (order[3] - (this.currentETH));
                    }
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "LTC") { //if LTC
                if (order[4] >= this.currentLTC) { //if Stop met
                  if (order[3] >= this.currentLTC) { //if limit met
                    this.ltcAmount = this.ltcAmount + (buyAmount);
                    if ((order[3] - this.currentLTC) != 0) {
                      this.usdAmount = this.usdAmount + order[2] * (order[3] - (this.currentLTC));
                    }
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "XRP") { //if XRP
                if (order[4] >= this.currentXRP) { //if Stop met
                  if (order[3] >= this.currentXRP) { //if limit met
                    this.xrpAmount = this.xrpAmount + (buyAmount);
                    if ((order[3] - this.currentXRP) != 0) {
                      this.usdAmount = this.usdAmount + order[2] * (order[3] - (this.currentXRP));
                    }
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "LINK") { //if LINK
                if (order[4] >= this.currentLink) { //if Stop met
                  if (order[3] >= this.currentLink) { //if limit met
                    this.linkAmount = this.linkAmount + (buyAmount);
                    if ((order[3] - this.currentLINK) != 0) {
                      this.usdAmount = this.usdAmount + order[2] * (order[3] - (this.currentLINK));
                    }
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
            }
            else{                //Stop Loss
              var sellAmount = order[2] - (order[2] * 0.005);
              if (order[5] == "BTC") { //if BTC
                if (order[4] >= this.currentBTC) { //if Stop met
                  if (order[3] <= this.currentBTC) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentBTC);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "ETH") { //if ETH
                if (order[4] >= this.currentETH) { //if Stop met
                  if (order[3] <= this.currentETH) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentETH);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "LTC") { //if LTC
                if (order[4] >= this.currentLTC) { //if Stop met
                  if (order[3] <= this.currentLTC) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentLTC);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "XRP") { //if XRP
                if (order[4] >= this.currentXRP) { //if Stop met
                  if (order[3] <= this.currentXRP) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentXRP);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
              if (order[5] == "LINK") { //if LINK
                if (order[4] >= this.currentLink) { //if Stop met
                  if (order[3] <= this.currentLink) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentLINK);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                  }
                }
              }
            }
          }
          else{                 //Start Limit Buy/Sell Code
            if(order[0]=="Buy"){
              var buyAmountLim = order[2] - (order[2] * 0.005);
              if(order[5]=="BTC"){
                if(order[3]>=this.currentBTC){
                  this.btcAmount = this.btcAmount + (buyAmountLim);
                  if((order[3]-this.currentBTC) !=0){
                    this.usdAmount = this.usdAmount + order[2] * (order[3]-(this.currentBTC));
                  }
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if(order[5]=="ETH"){
                if(order[3]>=this.currentETH){
                  this.ethAmount = this.ethAmount + (buyAmountLim);
                  if((order[3]-this.currentETH) !=0){
                    this.usdAmount = this.usdAmount + order[2] * (order[3]-(this.currentETH));
                  }
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if(order[5]=="LTC"){
                if(this.orderInfo[3]>=this.currentLTC){
                  this.ltcAmount = this.ltcAmount + (buyAmountLim);
                  if((order[3]-this.currentLTC) !=0){
                    this.usdAmount = this.usdAmount + order[2] * (order[3]-(this.currentLTC));
                  }
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if(order[5]=="XRP"){
                if(this.orderInfo[3]>=this.currentXRP){
                  this.xrpAmount = this.xrpAmount + (buyAmountLim);
                  if((order[3]-this.currentXRP) !=0){
                    this.usdAmount = this.usdAmount + order[2] * (order[3]-(this.currentXRP));
                  }
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if(order[5]=="LINK"){
                if(order[3]>=this.currentLINK){
                  this.linkAmount = this.linkAmount + (buyAmountLim);
                  if((order[3]-this.currentLINK) !=0){
                    this.usdAmount = this.usdAmount + order[2] * (order[3]-(this.currentLINK));
                  }
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
            }
            else{
              sellAmount = order[2] - (order[2] * 0.005);
              if (order[5] == "BTC") { //if BTC
                if (order[3] <= this.currentBTC) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentBTC);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if (order[5] == "ETH") { //if ETH
                if (order[3] >= this.currentETH) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentETH);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if (order[5] == "LTC") { //if LTC
                if (order[3] >= this.currentLTC) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentLTC);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if (order[5] == "XRP") { //if XRP
                if (order[3] >= this.currentXRP) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentXRP);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
              if (order[5] == "LINK") { //if LINK
                if (order[3] >= this.currentLink) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentLINK);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                }
              }
            }
          }
        }
      },
      addAmount(pair){
        if(pair[0]=='btc'){
          this.btcAmount = this.btcAmount+parseFloat(pair[1]);
        }
        if(pair[0]=='eth'){
          this.ethAmount=this.ethAmount+parseFloat(pair[1]);
        }
        if(pair[0]=='ltc'){
          this.ltcAmount=this.ltcAmount+parseFloat(pair[1]);
        }
        if(pair[0]=='xrp'){
          this.xrpAmount=this.xrpAmount+parseFloat(pair[1]);
        }
        if(pair[0]=='link'){
          this.linkAmount=this.linkAmount+parseFloat(pair[1]);
        }
        if(pair[0]=='usd'){
          this.usdAmount=this.usdAmount+parseFloat(pair[1]);
        }
      },
      checkMarketOrder(){
        if(this.orderInfo[0]=="Buy") {
          if (this.orderInfo[2] > this.usdAmount) {
            window.alert("Failed to buy, not enough USD");
            return false;
          }
          else {
            var withFee = this.orderInfo[2] - (this.orderInfo[2] * .005);
            var buyAmount;
            this.getPrice()
            if (this.selectedCurrencyGet == 'BTC') {
              buyAmount = withFee / this.currentBTC;
              this.btcAmount = this.btcAmount + (buyAmount);
              this.usdAmount = this.usdAmount - (parseFloat(this.orderInfo[2]));
            }
            if (this.selectedCurrencyGet == 'ETH') {
              buyAmount = withFee / this.currentETH;
              this.ethAmount = this.ethAmount + (buyAmount);
              this.usdAmount = this.usdAmount - (parseFloat(this.orderInfo[2]));
            }
            if (this.selectedCurrencyGet == 'LTC') {
              buyAmount = withFee / this.currentLTC;
              this.ltcAmount = this.ltcAmount + (buyAmount);
              this.usdAmount = this.usdAmount - (parseFloat(this.orderInfo[2]));
            }
            if (this.selectedCurrencyGet == 'XRP') {
              buyAmount = withFee / this.currentXRP;
              this.xrpAmount = this.xrpAmount + (buyAmount);
              this.usdAmount = this.usdAmount - (parseFloat(this.orderInfo[2]));
            }
            if (this.selectedCurrencyGet == 'LINK') {
              buyAmount = withFee / this.currentLINK;
              this.linkAmount = this.linkAmount + (buyAmount);
              this.usdAmount = this.usdAmount - (parseFloat(this.orderInfo[2]));
            }
            return true;
          }
        }
        else {
          var sellAmount = this.orderInfo[2] - (this.orderInfo[2] * 0.005);
          if (this.selectedCurrencyGet == 'BTC') {
            if (this.orderInfo[2] > this.btcAmount) {
              window.alert("Failed to sell, not enough BTC");
              return false;
            }
            this.btcAmount = this.btcAmount - parseFloat(this.orderInfo[2]);
            this.usdAmount = this.usdAmount + (sellAmount * this.currentBTC);
            return true;
          }
          if (this.selectedCurrencyGet == 'ETH') {
            if (this.orderInfo[2] > this.ethAmount) {
              window.alert("Failed to sell, not enough ETH");
              return false;
            }
            this.ethAmount = this.ethAmount - parseFloat(this.orderInfo[2]);
            this.usdAmount = this.usdAmount + (sellAmount * this.currentETH);
            return true;
          }
          if (this.selectedCurrencyGet == 'LTC') {
            if (this.orderInfo[2] > this.ltcAmount) {
              window.alert("Failed to sell, not enough LTC");
              return false;
            }
            this.ltcAmount = this.ltcAmount - parseFloat(this.orderInfo[2]);
            this.usdAmount = this.usdAmount + (sellAmount * this.currentLTC);
            return true;
          }
          if (this.selectedCurrencyGet == 'XRP') {
            if (this.orderInfo[2] > this.xrpAmount) {
              window.alert("Failed to sell, not enough XRP");
              return false;
            }
            this.xrpAmount = this.xrpAmount - parseFloat(this.orderInfo[2]);
            this.usdAmount = this.usdAmount + (sellAmount * this.currentXRP);
            return true;
          }
          if (this.selectedCurrencyGet == 'LINK') {
            if (this.orderInfo[2] > this.linkAmount) {
              window.alert("Failed to sell, not enough LINK");
              return false;
            }
            this.linkAmount = this.linkAmount - parseFloat(this.orderInfo[2]);
            this.usdAmount = this.usdAmount + (sellAmount * this.currentLINK);
            return true;
          }
          return true;
        }
      },
      checkLimitOrder(){
        if(this.orderInfo[0]=="Buy") {
          if (this.orderInfo[3] > this.usdAmount) {
            window.alert("Failed to buy, not enough USD");
            return false;
          }
          this.usdAmount= this.usdAmount-this.orderInfo[3];
          return true;
        }
        else{
          if (this.selectedCurrencyGet == 'BTC') {
            if (this.orderInfo[2] > this.btcAmount) {
              window.alert("Failed to sell, not enough BTC");
              return false;
            }
            else{
              this.btcAmount = this.btcAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'ETH') {
            if (this.orderInfo[2] > this.ethAmount) {
              window.alert("Failed to sell, not enough ETH");
              return false;
            }
            else{
              this.ethAmount = this.ethAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'LTC') {
            if (this.orderInfo[2] > this.ltcAmount) {
              window.alert("Failed to sell, not enough LTC");
              return false;
            }
            else{
              this.ltcAmount = this.ltcAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'XRP') {
            if (this.orderInfo[2] > this.xrpAmount) {
              window.alert("Failed to sell, not enough XRP");
              return false;
            }
            else{
              this.xrpAmount = this.xrpAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'LINK') {
            if (this.orderInfo[2] > this.linkAmount) {
              window.alert("Failed to sell, not enough LINK");
              return false;
            }
            else{
              this.linkAmount = this.linkAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
        }
      },
      checkStopOrder(){
        if(this.orderInfo[0]=="Buy") {
          if (this.orderInfo[3] > this.usdAmount) {
            window.alert("Failed to buy, not enough USD");
            return false;
          }
          this.usdAmount = this.usdAmount-this.orderInfo[3];
          return true;
        }
        else {
          if (this.selectedCurrencyGet == 'BTC') {
            if (this.orderInfo[2] > this.btcAmount) {
              window.alert("Failed to sell, not enough BTC");
              return false;
            } else {
              this.btcAmount = this.btcAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'ETH') {
            if (this.orderInfo[2] > this.ethAmount) {
              window.alert("Failed to sell, not enough ETH");
              return false;
            } else {
              this.ethAmount = this.ethAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'LTC') {
            if (this.orderInfo[2] > this.ltcAmount) {
              window.alert("Failed to sell, not enough LTC");
              return false;
            } else {
              this.ltcAmount = this.ltcAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'XRP') {
            if (this.orderInfo[2] > this.xrpAmount) {
              window.alert("Failed to sell, not enough XRP");
              return false;
            } else {
              this.xrpAmount = this.xrpAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
          if (this.selectedCurrencyGet == 'LINK') {
            if (this.orderInfo[2] > this.linkAmount) {
              window.alert("Failed to sell, not enough LINK");
              return false;
            } else {
              this.linkAmount = this.linkAmount - parseFloat(this.orderInfo[2]);
              return true;
            }
          }
        }
      },
  cancelOrder(order){
    if(this.ordersArray[order]!=null){
      var holder=this.ordersArray[order];
      if(holder[0]=="Buy"){
        if(holder[6]=="USD"){
          this.usdAmount = this.usdAmount + parseFloat(holder[3]);
          }
        }
      else{
      if(holder[5]=="BTC"){
        this.btcAmount = this.btcAmount +parseFloat(holder[2]);
      }
      else if(holder[5]=="LTC"){
        this.ltcAmount = this.ltcAmount +parseFloat(holder[2]);
      }
      else if(holder[5]=="XRP"){
        this.xrpAmount = this.xrpAmount + parseFloat(holder[2]);
      }
      else if(holder[5]=="ETH"){
        this.ethAmount = this.ethAmount + parseFloat(holder[2]);
      }
      else if(holder[5]=="LINK"){
        this.linkAmount = this.linkAmount+parseFloat(holder[2]);
      }
    }
      delete this.ordersArray[order];
      this.ordersArray= this.ordersArray.filter(function(x){
        return x !== undefined;
      });
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
        var price;
        if (this.selectedCurrencyGet == "BTC"){
          price = this.currentBTC;
        }
        else if (this.selectedCurrencyGet == "LTC"){
          price = this.currentLTC;
        }
        else if( this.selectedCurrenyGet == "ETH"){
          price = this.currentETH;
        }
        else if (this.selectedCurrencyGet == "XRP"){
          price = this.currentXRP;
        }
        else if (this.selectedCurrencyGet == "LINK") {
          price = this.currentLINK;
        }
        var withFee = this.orderInfo[2] - (this.orderInfo[2] * .005);
        var newRowData = [];
        var date = new Date();
        newRowData.push(this.orderInfo[0]);
        newRowData.push(this.selectedCurrencyGet + "/" + this.selectedCurrencyGive);
        newRowData.push(withFee / price);
        newRowData.push(withFee);
        newRowData.push(this.orderInfo[2] * 0.005);
        newRowData.push((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
          + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        newRowData.push("Filled");
        newRowData.push(this.orderInfo[7]);
        this.$refs.OrderHistory.addRow(newRowData);
      }
    },
      selectedCurrencyGet: function() {
        this.getPrice();
      }
    },
    mounted(){
      setInterval(() => this.getPrice(), 5000);
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
