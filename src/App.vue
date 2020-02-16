<template>
<div class="tile is-ancestor" id="root">
  <div class="tile is-parent is-vertical is-4">
    <div class="tile is-child is-12 is-vertical box">
      <p class="title">Currency Select</p>
      <CurrencySelect/>
    </div>
    <div class="tile is-child box">
      <p class="title">Order Form</p>
      <OrderForm/>
    </div>
  </div>
  <div class="tile is-8 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">Price Chart</p>
      <PriceChart/>
    </div>
    <div class="tile is-child box">
      <p class="title">Order History</p>
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

export default {
  name: 'App',
  components: {
    CurrencySelect,
    OrderForm,
    PriceChart,
    OrderHistory
  }
}
</script>

<style scoped>
#root {
    position: fixed;
    top: 0; right: 0; bottom: 0; left: 0;
    margin: 0.5rem;
}
</style>
