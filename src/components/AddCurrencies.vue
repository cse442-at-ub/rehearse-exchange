<template>
<div id="root-currency-select">
  <div class="is-divider" data-content="Get some currency to start:" ></div>
  <div class="field has-addons has-addons-centered">
    <p class="control is-expanded">
      <input class="input is-fullwidth" type="text" placeholder="0.00" v-model= "amountToAdd"
             style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                      font-family: 'Lato', sans-serif;">
    </p>
    <a class="control">
      <div class="select">
        <select style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                      font-family: 'Lato', sans-serif;">
          <option @click= "changeCurrencies('btc')">
            <button class="button">BTC</button>
          </option>
          <hr class="dropdown-divider">
          <option @click = "changeCurrencies('eth')">
            <button class="button">ETH</button>
          </option>
          <hr class="dropdown-divider">
          <option @click = "changeCurrencies('ltc')">
            <button class="button">LTC</button>
          </option>
          <hr class="dropdown-divider">
          <option @click = "changeCurrencies('xrp')">
            <button class="button">XRP</button>
          </option>
          <hr class="dropdown-divider">
          <option @click = "changeCurrencies('link')">
            <button class="button">LINK</button>
          </option>
          <hr class="dropdown-divider">
          <option @click = "changeCurrencies('usd')">
            <button class="button">USD</button>
          </option>
        </select>
      </div>
    </a>
    <p class="control">
      <a class="button is-outlined is-clickable" style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                      font-family: 'Lato', sans-serif;" @click = "addAmount()" >
        <span>Add</span>
      </a>
    </p>
  </div>
</div>


</template>

<script>

export default {
  name: 'AddCurrencies',
  methods:{
      changeCurrencies(get){
        this.selectedCurrenciesGet = get;
      },
      addAmount(){
       if(!isNaN(this.amountToAdd)){
          if(this.selectedCurrenciesGet== 'btc'){
            let pair = ['btc',this.amountToAdd];
            this.$emit('changeAmount', pair);
          }
          if(this.selectedCurrenciesGet=='eth'){
            let pair=['eth',this.amountToAdd];
            this.$emit('changeAmount', pair);
          }
          if(this.selectedCurrenciesGet == 'ltc'){
            let pair =['ltc',this.amountToAdd];
            this.$emit('changeAmount',pair);
          }
          if(this.selectedCurrenciesGet=='xrp'){
            let pair = ['xrp',this.amountToAdd];
            this.$emit('changeAmount',pair);
          }
          if(this.selectedCurrenciesGet=='link'){
            let pair =['link',this.amountToAdd];
            this.$emit('changeAmount',pair);
          }
          if(this.selectedCurrenciesGet=='usd'){
            let pair =['usd',this.amountToAdd];
            this.$emit('changeAmount',pair);
          }
        }
      }
  },
  data(){
    return{
        selectedCurrenciesGet: 'btc',
        amountToAdd: null
    }
  }
}
</script>

<style scoped>
@import '../../node_modules/bulma-divider/dist/css/bulma-divider.min.css';

.is-divider {
  margin-top: 2.1rem;
  margin-bottom: 1rem;
}
.is-divider::after {
  background-color: #2C3F4F;
}

</style>