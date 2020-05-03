<template>
<div>
  <span class="is-size-7">Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" v-model="orderAmount" type="text" placeholder="0.00"
             style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                    font-family: 'Lato', sans-serif;">
    </p>
    <p class="control">
      <a class="button is-outlined is-static" style="background:#4e5d6c; border-color: #35475a; color:white">
        <span style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                      font-family: 'Lato', sans-serif;">{{this.$parent.orderCurrency}}</span>
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
