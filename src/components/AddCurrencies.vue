<template>
<div id="root-add-currencies">
    <div class="is-divider" style="borderColor: #4e5d6c;" data-content="Get some currency to start:" ></div>
    <div class="field has-addons has-addons-centered">
      <p class="control is-expanded">
        <input class="input is-fullwidth" type="text" placeholder="0.00" v-model= "amountToAdd"
              style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                        font-family: 'Lato', sans-serif;">
      </p>
      <a class="control">
        <div class="select">
          <select @change="changeCurrencies" style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                        font-family: 'Lato', sans-serif;">
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="ltc">LTC</option>
              <option value="xrp">XRP</option>
              <option value="link">LINK</option>
              <option value="usd">USD</option>
          </select>
        </div>
      </a>
      <p class="control">
        <a class="button" @click = "addAmount()" >
          <span>Add</span>
        </a>
      </p>
    </div>
</div>
</template>

<script>

export default {
  name: 'AddCurrencies',
  data(){
    return{
        selectedCurrenciesGet: 'btc',
        amountToAdd: null
    }
  },
  methods:{
      changeCurrencies(event){
        this.selectedCurrenciesGet = event.target.value;
      },
      addAmount(){
        if(isNaN(this.amountToAdd) || this.amountToAdd == null || this.amountToAdd <= 0) {
          window.alert("Amount to add must be a positive numeric value.");
        } else {
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
        //this.amountToAdd = "";
      }
  }
}
</script>

<style scoped>
@import '../../node_modules/bulma-divider/dist/css/bulma-divider.min.css';

.is-divider {
  margin-top: 1rem;
  margin-bottom: 1.2rem;
}

.is-divider::after {
  background-color: #2C3F4F;
}

.button {
  background:#4e5d6c;
  border-color: #35475a;
  color:lightgrey;
  font-family: 'Roboto', sans-serif;
  font-family: 'Lato', sans-serif;
}

.button:hover {
  background: #485563;
  border-color: #8694a4;
}

#root-add-currencies {
  width: 100%;
  display: inline-block;
}
</style>