<template>
  <div>
    <div class="select is-fullwidth">
      <select style="background:#4e5d6c; border-color: #35475a; color:lightgrey; font-family: 'Roboto', sans-serif;
                      font-family: 'Lato', sans-serif;">
        <option @click = "getCurrencies('BTC')">
          <button class="button"  >
            <span>BTC-USD</span>
          </button>
        </option>
        <hr class="dropdown-divider" >
        <option @click = "getCurrencies('ETH')">
          <button class="button" >
            <span>ETH-USD</span>
          </button>
        </option>
        <hr class="dropdown-divider">
        <option @click = "getCurrencies('LTC')">
          <button class="button" >
            <span>LTC-USD</span>
          </button>
        </option>
        <hr class="dropdown-divider">
        <option @click = "getCurrencies('XRP')">
          <button class="button" >
            <span>XRP-USD</span>
          </button>
        </option>
        <hr class="dropdown-divider">
        <option @click = "getCurrencies('LINK')">
          <button class="button" >
            <span>LINK-USD</span>
          </button>
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CurrencySelect',
    props: {

    },
    methods:{
      getCurrencies(alpha) {
        this.$emit('getCurrencies', alpha);

      }

    }
  }

</script>

<style scoped>
   .select{
     background-color:#4e5d6c;
     border-color: #35475a;
     color:white;
     font-size: medium;
     text-align: left;
  }
</style>
