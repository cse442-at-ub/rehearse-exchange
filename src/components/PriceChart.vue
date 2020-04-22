<template>
  <div class ="container">

      <div class="control">
        <div class="select">
          <select>
            <option @click = "getTime(0)">
              <button class="button">1m</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(1)">
              <button class="button">1h</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(2)">
              <button class="button">1d</button>
            </option>
          </select>
        </div>
      </div>
    <div id="render-price-chart">
      <RenderPriceChart :timeframe="timeframe" :selectedCurrencyGet="selectedCurrencyGet" style="height: 285px"/>
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
      timeframe: 1
    }
  },
  methods:{
    getTime(alpha) {
      this.timeframe = alpha;
    }
  }
}
</script>

<style scoped>
</style>

