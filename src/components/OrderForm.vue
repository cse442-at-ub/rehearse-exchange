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
      <li>
        <a>
          <span>Market</span>
        </a>
      </li>
      <li>
        <a>
          <span>Limit</span>
        </a>
      </li>
      <li>
        <a>
          <span>Stop</span>
        </a>
      </li>
    </ul>
  </div>
  <span>Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>USD</span>
      </a>
    </p>
  </div>
  <br/>
  <button id="order-button" class="button is-success is-fullwidth">Place {{orderType}} Order</button>
</div>
</template>

<script>
export default {
  name: 'OrderForm',
  data() {
    return {
      orderType: "Buy"
    }
  },
  methods: {
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