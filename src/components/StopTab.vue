<template>
<div>
  <span>Stop Price</span>
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
  <span>Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>BTC</span>
      </a>
    </p>
  </div>
  <span>Limit Price</span>
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
</div>
</template>

<script>
export default {
  name: 'StopTab',
  label: 'Stop'
}
</script>

<style scoped>

</style>
