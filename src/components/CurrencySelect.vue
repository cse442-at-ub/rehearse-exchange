<template>
<div>
  <div class="select">
    <select>
      <option @click = "getCurrencies('BTC')">
        <button class="button" >BTC-USD</button>
      </option>
       <hr class="dropdown-divider">
      <option @click = "getCurrencies('ETH')">
        <button class="button">ETH-USD</button>
      </option>
      <hr class="dropdown-divider">
      <option @click = "getCurrencies('LTC')">
        <button class="button">LTC-USD</button>
      </option>
      <hr class="dropdown-divider">
      <option @click = "getCurrencies('XRP')">
        <button class="button">XRP-USD</button>
      </option>
      <hr class="dropdown-divider">
      <option @click = "getCurrencies('LINK')">
        <button class="button">LINK-USD</button>
      </option>
    </select>
  </div>
</div>
</template>

<script>
export default {
  name: 'CurrencySelect',
  props: {

  },
  methods:{
    getCurrencies(alpha) {
      this.$emit('getCurrencies', alpha);

    }

  }
}

</script>

