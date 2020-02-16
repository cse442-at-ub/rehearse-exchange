<template>
<div>
  <div class="tabs is-toggle is-fullwidth">
    <ul>
      <li id="buy-tab" class="is-active">
        <span><a @click="uiSetBuy">Buy</a></span>
      </li>
      <li id="sell-tab">
        <span><a @click="uiSetSell">Sell</a></span>
      </li>
    </ul>
  </div>
  <div class="tabs is-fullwidth">
    <ul>
      <li v-for="tab in tabComponents" :key="tab.label" :class="{ 'is-active': currentTab === tab }">
        <a @click="changeTab(tab)">{{tab.label}}</a>
      </li>
    </ul>
  </div>
  <component :is="currentTab"/>
  <br/>
  <button id="order-button" class="button is-success is-fullwidth">Place {{orderType}} Order</button>
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
      currentTab: MarketTab
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
#root-orderform {
  display: flex;
  justify-content: center;
}
</style>