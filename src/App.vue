<template>
  <div class="tile is-ancestor" id="root">
    <div class="tile is-parent is-vertical is-4">
      <div class="message-header">Currency Select</div>
      <div class="tile is-child box message-body" id="currency-select">
        <div id="top">
        <div id="sc-bar">
          <div class="currencySelect"><CurrencySelect @getCurrencies = "selectedCurrencyGet = $event" /></div>
          <div class="currentCurrency"><CurrentCurrencies
            :btcAmount="btcAmount"
            :ethAmount="ethAmount"
            :ltcAmount="ltcAmount"
            :xrpAmount="xrpAmount"
            :linkAmount="linkAmount"
            :usdAmount="usdAmount"
          /></div>
        </div>
        <div class="addCurrencies"><AddCurrencies @changeAmount = "addAmount($event)"/></div>
        </div>
        <div id="bottom">
          <button class="button is-outlined is-danger" id="reset-button" @click="resetSession()">{{resetMessage}}</button>
        </div>
      </div>
      <div class="message-header">Order Form</div>
      <div class="tile is-child box message-body" id="order-form">
        <OrderForm @placeOrder="orderInfo = $event"/>
      </div>
    </div>
    <div class="tile is-parent is-vertical is-8">
      <div class="message-header">
        Price Chart
        <a href="https://github.com/cse442-spring-2020-offering/rehearse-exchange">
          <i class="fab fa-github fa-lg"></i>
        </a>
      </div>
      <div class="tile is-child box message-body" id="price-chart">
        <PriceChart :selectedCurrencyGet="selectedCurrencyGet"/>
      </div>
      <div class="message-header">Order History</div>
      <div class="tile is-child box message-body" id="order-history">
        <OrderHistory @cancel="cancelOrder($event)" @passTable="ordersTable=$event" ref="OrderHistory" :key="historyKey"/>
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
        ordersTable: [],
        canceledOrders: 0,
        historyKey: 0,
        resetMessage: "Reset Session",
        hasClickedReset: false,
        baseUrl: "https://rehearse.exchange"
      }
    },
    methods: {
      getPrice() {
        axios
          .get(this.baseUrl + '/current-prices')
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
                    this.updateTable(this.ordersTable, order[7]);
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
                    this.updateTable(this.ordersTable, order[7]);
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
                    this.updateTable(this.ordersTable, order[7]);
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
                    this.updateTable(this.ordersTable, order[7]);
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
                    this.updateTable(this.ordersTable, order[7]);
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
                    this.updateTable(this.ordersTable, order[7]);
                  }
                }
              }
              if (order[5] == "ETH") { //if ETH
                if (order[4] >= this.currentETH) { //if Stop met
                  if (order[3] <= this.currentETH) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentETH);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                    this.updateTable(this.ordersTable, order[7]);
                  }
                }
              }
              if (order[5] == "LTC") { //if LTC
                if (order[4] >= this.currentLTC) { //if Stop met
                  if (order[3] <= this.currentLTC) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentLTC);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                    this.updateTable(this.ordersTable, order[7]);
                  }
                }
              }
              if (order[5] == "XRP") { //if XRP
                if (order[4] >= this.currentXRP) { //if Stop met
                  if (order[3] <= this.currentXRP) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentXRP);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                    this.updateTable(this.ordersTable, order[7]);
                  }
                }
              }
              if (order[5] == "LINK") { //if LINK
                if (order[4] >= this.currentLink) { //if Stop met
                  if (order[3] <= this.currentLink) { //if limit met
                    this.usdAmount = this.usdAmount + (sellAmount * this.currentLINK);
                    delete this.ordersArray[0];
                    this.ordersArray.shift();
                    this.updateTable(this.ordersTable, order[7]);
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

                  this.updateTable(this.ordersTable, order[7]);
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
                  this.updateTable(this.ordersTable, order[7]);
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
                  this.updateTable(this.ordersTable, order[7]);
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
                  this.updateTable(this.ordersTable, order[7]);
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
                  this.updateTable(this.ordersTable, order[7]);
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
                  this.updateTable(this.ordersTable, order[7]);
                }
              }
              if (order[5] == "ETH") { //if ETH
                if (order[3] >= this.currentETH) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentETH);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                  this.updateTable(this.ordersTable, order[7]);
                }
              }
              if (order[5] == "LTC") { //if LTC
                if (order[3] >= this.currentLTC) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentLTC);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                  this.updateTable(this.ordersTable, order[7]);
                }
              }
              if (order[5] == "XRP") { //if XRP
                if (order[3] >= this.currentXRP) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentXRP);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                  this.updateTable(this.ordersTable, order[7]);
                }
              }
              if (order[5] == "LINK") { //if LINK
                if (order[3] >= this.currentLink) { //if limit met
                  this.usdAmount = this.usdAmount + (sellAmount * this.currentLINK);
                  delete this.ordersArray[0];
                  this.ordersArray.shift();
                  this.updateTable(this.ordersTable, order[7]);
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
        var newRowData = [];
        var date = new Date();
        newRowData.push("Add");
        newRowData.push(pair[0].toUpperCase());
        newRowData.push(parseFloat(pair[1]).toFixed(8));
        newRowData.push("0.00000000");
        newRowData.push("0.00000000");
        newRowData.push(this.dateFormat(date));
        newRowData.push("Filled");
        newRowData.push(this.orderInfo[7]);
        this.$refs.OrderHistory.newOrder(newRowData);
      },
      checkMarketOrder(){

        if (isNaN(this.orderInfo[2]) || this.orderInfo[2] == null || this.orderInfo[2] <= 0) {
          window.alert("Amount must be a positive numeric value.");
          return;
        }

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

        if (isNaN(this.orderInfo[2]) || this.orderInfo[2] == null || this.orderInfo[2] <= 0) {
          window.alert("Amount must be a positive numeric value.");
          return;
        }
        if (isNaN(this.orderInfo[3]) || this.orderInfo[3] == null || this.orderInfo[3] <= 0) {
          window.alert("Limit price must be a positive numeric value.");
          return;
        }

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

        if (isNaN(this.orderInfo[2]) || this.orderInfo[2] == null || this.orderInfo[2] <= 0) {
          window.alert("Amount must be a positive numeric value.");
          return;
        }
        if (isNaN(this.orderInfo[3]) || this.orderInfo[3] == null || this.orderInfo[3] <= 0) {
          window.alert("Limit price must be a positive numeric value.");
          return;
        }
        if (isNaN(this.orderInfo[4]) || this.orderInfo[4] == null || this.orderInfo[4] <= 0) {
          window.alert("Stop price must be a positive numeric value.");
          return;
        }

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
          this.canceledOrders = this.canceledOrders +1;
          this.ordersArray.remove(order);
        }
      },
      updateTable(table, row){
        var currRow= table.rows[row+1].cells;
        currRow[6].innerHTML="Filled";
        this.$refs.OrderHistory.updateRow(row);
      },
      dateFormat(date) {
        var timeSuffix;

        var formatted = (date.getMonth() + 1) + "/";

        if (date.getDate() < 10) {
          formatted += "0" + date.getDate() + "/";
        } else {
          formatted += date.getDate() + "/";
        }

        formatted += date.getFullYear() + " ";

        if (date.getHours() == 0) {
          formatted += "12" + ":";
          timeSuffix = "AM";
        } else if (date.getHours() == 12) {
          formatted += "12" + ":";
          timeSuffix = "PM";
        } else if (date.getHours() < 13) {
          formatted += date.getHours() + ":";
          timeSuffix = "AM";
        } else {
          formatted += (date.getHours() - 12) + ":";
          timeSuffix = "PM";
        }

        if (date.getMinutes() < 10) {
          formatted += "0" + date.getMinutes() + ":";
        } else {
          formatted += date.getMinutes() + ":";
        }

        if (date.getSeconds() < 10) {
          formatted += "0" + date.getSeconds() + " ";
        } else {
          formatted += date.getSeconds() + " ";
        }

        formatted += timeSuffix;

        return formatted;
      },
      resetSession() {
        if (!this.hasClickedReset) {
          this.resetMessage = "All session data will be wiped. Confirm?"
          this.hasClickedReset = true;
        } else {
          this.resetMessage = "Reset Session";
          this.hasClickedReset = false;
          
          this.btcAmount = 0;
          this.ethAmount = 0;
          this.ltcAmount = 0;
          this.xrpAmount = 0;
          this.linkAmount = 0;
          this.usdAmount = 0;
          this.ordersArray = [];

          localStorage.removeItem("orderData");

          this.historyKey += 1;
        }
      }
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
          if (this.orderInfo[0] == "Buy") {
            if (this.orderInfo[1] == "Market") {
              newRowData.push((withFee / price).toFixed(8)); // Amount bought (fee deducted)
              newRowData.push(parseFloat(this.orderInfo[2]).toFixed(8)); // USD spent
              newRowData.push((this.orderInfo[2] * .005).toFixed(8)); // Fee in USD
            } else {
              newRowData.push(withFee.toFixed(8)); //Amount to buy (fee deducted)
              newRowData.push((this.orderInfo[2] * this.orderInfo[3]).toFixed(8)); // USD to be spent
              newRowData.push((this.orderInfo[2] * this.orderInfo[3] * .005).toFixed(8)); // Fee in USD
            }
          } else {
            if (this.orderInfo[1] == "Market") {
              newRowData.push(parseFloat(this.orderInfo[2]).toFixed(8)); // Amount sold
              newRowData.push((withFee * price).toFixed(8)); // USD gained (Fee deducted)
              newRowData.push((this.orderInfo[2] * price * .005).toFixed(8)); // Fee in USD
            } else {
              newRowData.push(parseFloat(this.orderInfo[2]).toFixed(8)); // Amount to sell
              newRowData.push((withFee * this.orderInfo[3]).toFixed(8)); // USD to be gained
              newRowData.push((this.orderInfo[2] * this.orderInfo[3] * .005).toFixed(8)); // Fee in USD
            }
          }
          newRowData.push(this.dateFormat(date));
          if(this.orderInfo[1]=="Market"){
            newRowData.push("Filled");
          }
          else {
            newRowData.push("Unfilled");
          }
          newRowData.push(this.orderInfo[7]);
          this.$refs.OrderHistory.newOrder(newRowData);
        }
      },
      selectedCurrencyGet: function() {
          this.getPrice();
      },
      btcAmount: function() {
        localStorage.setItem('btcAmount', JSON.stringify(this.btcAmount));
      },
      ethAmount: function() {
        localStorage.setItem('ethAmount', JSON.stringify(this.ethAmount));
      },
      ltcAmount: function() {
        localStorage.setItem('ltcAmount', JSON.stringify(this.ltcAmount));
      },
      xrpAmount: function() {
        localStorage.setItem('xrpAmount', JSON.stringify(this.xrpAmount));
      },
      linkAmount: function() {
        localStorage.setItem('linkAmount', JSON.stringify(this.linkAmount));
      },
      usdAmount: function() {
        localStorage.setItem('usdAmount', JSON.stringify(this.usdAmount));
      },
      ordersArray: function() {
        localStorage.setItem('ordersArray', JSON.stringify(this.ordersArray));
      },
      canceledOrders: function() {
        localStorage.setItem('canceledOrders', JSON.stringify(this.canceledOrders));
      }
    },
    mounted() {

      this.getPrice();
      setInterval(() => this.getPrice(), 60000);

      if (!localStorage.getItem('btcAmount')) {
        localStorage.setItem('btcAmount', JSON.stringify(this.btcAmount));
        localStorage.setItem('ethAmount', JSON.stringify(this.ethAmount));
        localStorage.setItem('ltcAmount', JSON.stringify(this.ltcAmount));
        localStorage.setItem('xrpAmount', JSON.stringify(this.xrpAmount));
        localStorage.setItem('linkAmount', JSON.stringify(this.linkAmount));
        localStorage.setItem('usdAmount', JSON.stringify(this.usdAmount));
        localStorage.setItem('ordersArray', JSON.stringify(this.ordersArray));
        localStorage.setItem('canceledOrders', JSON.stringify(this.canceledOrders));
      } else {
          this.btcAmount = JSON.parse(localStorage.getItem('btcAmount'));
          this.ethAmount = JSON.parse(localStorage.getItem('ethAmount'));
          this.ltcAmount = JSON.parse(localStorage.getItem('ltcAmount'));
          this.xrpAmount = JSON.parse(localStorage.getItem('xrpAmount'));
          this.linkAmount = JSON.parse(localStorage.getItem('linkAmount'));
          this.usdAmount = JSON.parse(localStorage.getItem('usdAmount'));
          this.ordersArray = JSON.parse(localStorage.getItem('ordersArray'));
          this.canceledOrders = JSON.parse(localStorage.getItem('canceledOrders'));
      }
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
    background-color: #35475A;
    color: white;
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
    width: 100%;
    display: inline-block;
  }
  #sc-bar {
    width: 100%;
    display: inline-block;
  }

  #currency-select {
    display: flex;
    flex-flow: column;
  }

  #top {
    display: inline-block;
  }

  #bottom {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

  }

  #reset-button {
    margin-top: .75rem;
  }
</style>
