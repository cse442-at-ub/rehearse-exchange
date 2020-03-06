<template>
<div>
  <div class="tabs is-toggle is-fullwidth" id="bar1">
    <ul>
      <li id="buy-tab" class="is-active">
        <span><a @click="uiSetBuy">Buy</a></span>
      </li>
      <li id="sell-tab">
        <span><a @click="uiSetSell">Sell</a></span>
      </li>
    </ul>
  </div>
  <div class="tabs is-fullwidth" id="bar2">
    <ul>
      <li v-for="tab in tabComponents" :key="tab.label" :class="{ 'is-active': currentTab === tab }">
        <a @click="changeTab(tab)">{{tab.label}}</a>
      </li>
    </ul>
  </div>
  <component :is="currentTab"
    @changeOrderAmount="orderAmount = $event"
    @changeOrderLimitPrice="orderLimitPrice = $event"
    @changeOrderStopPrice="orderStopPrice = $event"
  />
  <br/>
  <button id="order-button" class="button is-success is-fullwidth" @click="placeOrder()">Place {{orderType}} Order</button>
</div>
</template>

<script>
import MarketTab from "./MarketTab.vue";
import LimitTab from "./LimitTab.vue";
import StopTab from "./StopTab.vue";

export default {
  name: 'OrderForm',
  components: {
    MarketTab,
    LimitTab,
    StopTab,
  },
  data() {
    return {
      orderType: "Buy",
      currentTab: MarketTab,
      currentTabName: "Market",
      orderAmount: null,
      orderLimitPrice: null,
      orderStopPrice: null,
    }
  },
  computed: {
    tabComponents() {
      return Object
        .values(this.$options.components)
        .filter(tab => Object.prototype.hasOwnProperty.call(tab, "label"));
    }
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
      this.currentTabName = tab.label;
      this.orderAmount = null;
      this.orderLimitPrice = null;
      this.orderStopPrice = null;
    },
    placeOrder() {
      var orderInfo = [this.orderType, this.currentTabName, this.orderAmount, this.orderLimitPrice, this.orderStopPrice];
      this.$emit('placeOrder', orderInfo);
    },
    uiSetSell() {
      document.getElementById("buy-tab").classList.remove("is-active");
      document.getElementById("sell-tab").classList.add("is-active");
      document.getElementById("order-button").classList.remove("is-success");
      document.getElementById("order-button").classList.add("is-danger");
      this.orderType = "Sell";
    },
    uiSetBuy() {
      document.getElementById("sell-tab").classList.remove("is-active");
      document.getElementById("buy-tab").classList.add("is-active");
      document.getElementById("order-button").classList.remove("is-danger");
      document.getElementById("order-button").classList.add("is-success");
      this.orderType = "Buy";
    }
  }
}
</script>

<style scoped>

#bar1 {
  margin-bottom: .75rem;
}

#bar2 {
  margin-top: .75rem;
  margin-bottom: .75rem;
}

.field {
  margin-bottom: 0rem;
}


</style>