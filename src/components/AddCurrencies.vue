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
      </div>
      <div class="field has-addons has-addons-centered">
        <p class="control is-expanded">
          <input class="input is-fullwidth" type="text" placeholder="0.00" v-model= "amountToAdd">
        </p>
        <p class="control">
          <a class="button is-outlined is-clickable" @click = "addAmount(this.amountToAdd)" >
            <span>Add</span>
          </a>
        </p>
      </div>

        <button class="button" @click = "addAmount(this.amountToAdd)">USD</button>
    </div>
  </div>
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
      addAmount(amountToAdd){
        window.alert('here');
       if(!isNaN(amountToAdd)){
          if(this.selectedCurrenciesGet== 'btc'){
            let pair = ['btc',amountToAdd];
            this.$emit('changeAmount', pair);
          }
          if(this.selectedCurrenciesGet=='eth'){
            let pair=['eth',amountToAdd];
            this.$emit('changeAmount', pair);
          }
          if(this.selectedCurrenciesGet == 'ltc'){
            let pair =['ltc',amountToAdd];
            this.$emit('changeAmount',pair);
          }
          if(this.selectedCurrenciesGet=='xrp'){
            let pair = ['xrp',amountToAdd];
            this.$emit('changeAmount',pair);
          }
          if(this.selectedCurrenciesGet=='link'){
            let pair =['link',amountToAdd];
            this.$emit('changeAmount',pair);
          }
          if(this.selectedCurrenciesGet=='usd'){
            let pair =['usd',amountToAdd];
            this.$emit('changeAmount',pair);
          }
        }
      }
  },
  data(){
    return{
        selectedCurrenciesGet: this.$parent.btcAmount,
        amountToAdd:7,
    }
  }
}
</script>
