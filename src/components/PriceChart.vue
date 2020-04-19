
<template>
  <div class ="container">

      <div class="control">
        <div class="select">
          <select>
            <option @click = "getTime(1)">
              <button class="button">1m</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(2)">
              <button class="button">5m</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(3)">
              <button class="button">15m</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(4)">
              <button class="button">1h</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(5)">
              <button class="button">6h</button>
            </option>
            <hr class="dropdown-divider">
            <option @click = "getTime(6)">
              <button class="button">1d</button>
            </option>
          </select>
        </div>
      </div>
    <div id="render-price-chart">
      <RenderPriceChart :timeframe="timeframe" style="height: 285px"/>
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
  props:{

  },
  data() {
    return{
      timeframe: 1
    }
  },
  methods:{
    getTime(alpha) {
      this.timeframe = alpha;
      // this.timeframe = RenderPriceChart.data().alpha;
      // this.timeframe = RenderPriceChart.methods.changeTime(alpha);
    },
  }
}
</script>

<style scoped>

</style>