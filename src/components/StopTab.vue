<template>
<div>
  <span class="is-size-7">Stop Price</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" v-model="orderStopPrice" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>USD</span>
      </a>
    </p>
  </div>
  <span class="is-size-7">Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" v-model="orderAmount" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>{{this.$parent.$parent.selectedCurrencyGet}}</span>
      </a>
    </p>
  </div>
  <span class="is-size-7">Limit Price</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" v-model="orderLimitPrice" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>USD</span>
      </a>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'StopTab',
  label: 'Stop',
  data() {
    return {
      orderAmount: null,
      orderLimitPrice: null,
      orderStopPrice: null
    }
  },
  watch: {
    orderAmount: function() {
      this.$emit('changeOrderAmount', this.orderAmount);
    },
    orderLimitPrice: function() {
      this.$emit('changeOrderLimitPrice', this.orderLimitPrice);
    },
    orderStopPrice: function() {
      this.$emit('changeOrderStopPrice', this.orderStopPrice);
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 0rem;
}
</style>
