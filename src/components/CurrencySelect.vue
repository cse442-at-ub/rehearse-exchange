<template>
<div class="dropdown is-hoverable">
  <div class="dropdown-trigger">
    <button class="button" onclick = " " aria-haspopup="true" aria-controls="dropdown-menu2">
      <span>{{selectedCurrency}}</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu2" role="menu">
    <div class="dropdown-content">
<!-- Start of Content -->
      <div class="dropdown-item">
        <button><strong>BTC-USD</strong></button>

      </div>
      <hr class="dropdown-divider">
     
      <div class="dropdown-item">
        <button><strong>BTC-ETH</strong></button>
      </div>
      <hr class="dropdown-divider">
     
      <div class="dropdown-item">
        <button><strong>BTC-LINK</strong></button>
      </div>
      <hr class="dropdown-divider">
     
      <div class="dropdown-item">
        <button><strong>ETH-USD</strong></button>
      </div>
      <hr class="dropdown-divider">
     
      <div class="dropdown-item">
        <button><strong>ETH-LINK</strong></button>
      </div>
      <hr class="dropdown-divider">
     
      <div class="dropdown-item">
        <button><strong>LINK-USD</strong></button>
      </div>
<!-- End of Content -->
    </div>
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
