<template>
<div>
  <span>Amount</span>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" type="text" placeholder="0.00">
    </p>
    <p class="control">
      <a class="button is-outlined is-static">
        <span>{{this.$parent.$parent.selectedCurrencyGet}}</span>
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
        <span>{{this.$parent.$parent.selectedCurrencyGive}}</span>
      </a>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'LimitTab',
  label: 'Limit'
}
</script>

<style scoped>

</style>
