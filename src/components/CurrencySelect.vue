<template>
<div>
  <div class="select">
    <select>
      <option>
        <button class="button">BTC-USD</button>
      </option>
       <hr class="dropdown-divider">
      <option>
        <button class="button">ETH-USD</button>
      </option>
      <hr class="dropdown-divider">
      <option>
        <button class="button">LTC-USD</button>
      </option>
      <hr class="dropdown-divider">
      <option>
        <button class="button">XRP-USD</button>
      </option>
      <hr class="dropdown-divider">
      <option>
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
    selectedCurrency: String
  }
}
</script>
