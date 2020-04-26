<template>
  <div class="container">
    <div id="top-bar">
      <div class="displayPrice">
        <span id="price">${{ price }}</span>
        <span id="percentage">{{ percentage }}</span>
      </div>
      <div class="aside displayCurrency">
         <strong>{{ displayCurrency }}</strong>
      </div>
      <div class="timeSelect">
        <div class="aside tabs is-toggle is-fullwidth" id="bar1">
          <ul>
            <li id="minute" class="is-active">
              <span><a @click="getTime(0)">{{ displayMinute }}</a></span>
            </li>
            <li id="hour">
              <span><a @click="getTime(1)"> {{displayHour }}</a></span>
            </li>
            <li id="day">
              <span><a @click="getTime(2)">{{ displayDay }}</a></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="is-divider" v-bind:data-content="displayTimeframe()"></div>
    <div id="render-price-chart">
      <RenderPriceChart :timeframe="timeframe" :selectedCurrencyGet="selectedCurrencyGet" @getPrice="price = $event" @getPercentage="formatPercentage($event)" style="height: 285px"/>
    </div>
  </div>

</template>

<script>
import RenderPriceChart from './RenderPriceChart.vue'
export default {
  name:'PriceChart',
  components: {
    RenderPriceChart
  },
  props: ['selectedCurrencyGet'],
  data() {
    return{
      price: 0,
      percentage: 0,
      timeframe: 0,
      displayCurrency: "Bitcoin",
      displayPrice: this.$parent.currentBTC,
      displayMinute: null,
      displayHour: null,
      displayDay: null,
    }
  },
  methods:{
    getTime(alpha) {
      this.timeframe = alpha;
      if (alpha == 0) {
        document.getElementById("minute").classList.add("is-active");
        document.getElementById("hour").classList.remove("is-active");
        document.getElementById("day").classList.remove("is-active");
      } else if (alpha == 1) {
        document.getElementById("minute").classList.remove("is-active");
        document.getElementById("hour").classList.add("is-active");
        document.getElementById("day").classList.remove("is-active");  
      } else {
        document.getElementById("minute").classList.remove("is-active");
        document.getElementById("hour").classList.remove("is-active");
        document.getElementById("day").classList.add("is-active");
      }
    },
    formatPercentage(percentage) {
      if (percentage < 0) {
        document.getElementById("percentage").style.color = "red";
        this.percentage = percentage + "%";
      } else {
        document.getElementById("percentage").style.color = "green";
        this.percentage = "+" + percentage + "%";
      }
    },
    displayTimeframe() {
      if (this.timeframe == 0) {
        return "30 minutes";
      } else if (this.timeframe == 1) {
        return "30 hours";
      } else if (this.timeframe == 2) {
        return "30 days";
      }
    },
    handleResize() {
      if (window.innerWidth < 1000) {
        this.displayMinute = "1m";
        this.displayHour = "1h";
        this.displayDay = "1d";
      } else if (window.innerWidth > 1000) {
        this.displayMinute = "Minute";
        this.displayHour = "Hour";
        this.displayDay = "Day";
      }
    }
  },
  watch: {
    selectedCurrencyGet: function() {
      if (this.selectedCurrencyGet == "BTC") {
        this.displayCurrency = "Bitcoin";
        this.displayPrice = this.$parent.currentBTC;
      } else if (this.selectedCurrencyGet == "LTC") {
        this.displayCurrency = "Litecoin";
        this.displayPrice = this.$parent.currentLTC;
      } else if (this.selectedCurrencyGet == "ETH") {
        this.displayCurrency = "Ethereum";
        this.displayPrice = this.$parent.currentETH;
      } else if (this.selectedCurrencyGet == "XRP") {
        this.displayCurrency = "Ripple";
        this.displayPrice = this.$parent.currentXRP;
      } else if (this.selectedCurrencyGet == "LINK") {
        this.displayCurrency = "Chainlink";
        this.displayPrice = this.$parent.currentLINK;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
}
</script>

<style scoped>
  #top-bar {
    align-items: center;
    width: 100%;
    display: flex;  
    text-align: center;
  }
  #price {
    font-size: x-large;
    margin-right: .1rem;
  }
  #percentage {
    font-size: large;
    margin-left: .1rem;
  }
  .displayPrice {
    order: 2;
    width: 30%;
  }
  .displayCurrency {
    order: 1;
    font-size: xx-large;
    text-align: left;
    width: 35%;
  }
  .timeSelect {
    order: 3;
    width: 35%;
  }
  .tabs {
    float: right;
  }
  .is-divider {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>