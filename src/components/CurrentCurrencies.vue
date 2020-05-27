<template>

<div class="dropdown is-hoverable">
<div class="dropdown-trigger">
  <button class="button is-fullwidth" aria-haspopup="true" aria-controls="dropdown-menu4">

    <span style="text-align:center;">Portfolio</span>
  </button>
</div>
<div class="dropdown-menu" id="dropdown-menu4" role="menu">
  <div class="dropdown-content">
    <div class="dropdown-item">
        <span class="symbol">BTC</span><span class="amount">{{btcAmount.toFixed(3)}}</span><br>
        <span class="symbol">ETH</span><span class="amount">{{ethAmount.toFixed(3)}}</span><br>
        <span class="symbol">LTC</span><span class="amount">{{ltcAmount.toFixed(3)}}</span><br>
        <span class="symbol">XRP</span><span class="amount">{{xrpAmount.toFixed(3)}}</span><br>
        <span class="symbol">LINK</span><span class="amount">{{linkAmount.toFixed(3)}}</span><br>
        <span class="symbol">USD</span><span class="amount">{{usdAmount.toFixed(3)}}</span><br>
    </div>
  </div>
</div>
</div>


</template>

<script>
export default {
  name: 'CurrentCurrencies',
  props: ['btcAmount', 'ethAmount', 'ltcAmount', 'xrpAmount', 'linkAmount', 'usdAmount'],
}
</script>
<style>
.dropdown-menu {
  width: 100%;
}
.dropdown, .dropdown-trigger {
  width: 100%;
}
.symbol {
  font-size: x-large;
  font-weight: bold;
}
.amount {
  font-size: x-large;
  float: right;
}

</style>
