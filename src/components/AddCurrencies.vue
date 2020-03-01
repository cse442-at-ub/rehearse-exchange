<template>

<div class="dropdown is-hoverable">
<div class="dropdown-trigger">
  <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">

    <span style="text-align:center;">Add Currencies</span>
  </button>
</div>
<div class="dropdown-menu" id="dropdown-menu4" role="menu">
  <div class="dropdown-content">
    <div class="dropdown-item">
      <div class="control">
        <div class="select">
          <select>
            <option>
              <button class="button">BTC</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">ETH</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">LTC</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">XRP</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">LINK</button>
            </option>
            <hr class="dropdown-divider">
            <option>
              <button class="button">USD</button>
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>
</div>


</template>

<script>
export default {
  name: 'AddCurrencies',

}
</script>
