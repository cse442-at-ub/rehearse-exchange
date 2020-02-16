<template>
<div>
  <div class="tabs is-toggle is-fullwidth">
    <ul>
      <li class="is-active">
        <a>
          <span>Buy</span>
        </a>
      </li>
      <li>
        <a>
          <span>Sell</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="tabs is-fullwidth">
    <ul>
      <li>
        <a>
          <span>Market</span>
        </a>
      </li>
      <li>
        <a>
          <span>Limit</span>
        </a>
      </li>
      <li>
        <a>
          <span>Stop</span>
        </a>
      </li>
    </ul>
  </div>
  <span>Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>USD</span>
      </a>
    </p>
  </div>
  <br/>
  <button class="button is-success is-fullwidth">Place Buy Order</button>
</div>
</template>

<script>
export default {
  name: 'OrderForm'
}
</script>

<style scoped>
#root-orderform {
  display: flex;
  justify-content: center;
}
</style>