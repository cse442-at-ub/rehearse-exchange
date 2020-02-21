
<template>
  <div class ="container">

      <div class="control">
        <div class="select">
          <select>
            <option>
              <button class="button">1 week</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">1 day</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">12 hours</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">1 hour</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">10 minutes</button>
            </option>
          </select>
        </div>
      </div>
    <div id="render-price-chart">
      <RenderPriceChart style="height: 285px"/>
    </div>
  </div>

</template>

<script>
import RenderPriceChart from './RenderPriceChart.vue'

export default {
  name:'PriceChart',
  components: {
    RenderPriceChart
  }
}
</script>

<style scoped>

</style>