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
      <option>
        <h3 class= "title is-3">BTC: <p class="walletAmount">{{this.$parent.btcAmount}}</p></h3>
      </option>
       <hr class="dropdown-divider">
      <option>
        <h3 class ="title is-3">ETH: <p class="walletAmount">{{this.$parent.ethAmount}}</p></h3>
      </option>
      <hr class="dropdown-divider">
      <option>
        <h3 class ="title is-3">LTC: <p class="walletAmount">{{this.$parent.ltcAmount}}</p></h3>
      </option>
      <hr class="dropdown-divider">
      <option>
      <h3 class="title is-3">XRP: <p class="walletAmount">{{this.$parent.xrpAmount}}</p></h3>
      </option>
      <hr class="dropdown-divider">
      <option>
        <h3 class="title is-3">LINK: <p class="walletAmount">{{this.$parent.linkAmount}}</p></h3>
      </option>
    </div>
  </div>
</div>
</div>


</template>

<script>
export default {
  name: 'CurrentCurrencies',

}
</script>
<style>
.walletAmount{
  text-align:left;
}

.dropdown, .dropdown-trigger {
  width: 100%;
}
</style>
