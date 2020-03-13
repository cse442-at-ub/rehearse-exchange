<template>
<div>
  <span class="is-size-7">Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" v-model="orderAmount" type="text" placeholder="0.00">
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
  name: 'MarketTab',
  label: 'Market',
  data() {
    return {
      orderAmount: null
    }
  },
  watch: {
    orderAmount: function() {
      this.$emit('changeOrderAmount', this.orderAmount);
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 0rem;
}
</style>
