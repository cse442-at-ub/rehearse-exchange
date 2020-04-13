import Vue from 'vue';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import OrderForm from '../src/components/OrderForm.vue'

var assert = require('assert');
App.usdAmount=7000;                                             //Checking limit order fucntion being true
OrderForm.orderInfo = ["Buy","Limit",1,7000,null,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkLimitOrder(), true);
assert.equal(App.usdAmount,0);

App.usdAmount=1000;                                                 //Checking limit order fucntion being false
OrderForm.orderInfo = ["Buy","Limit",1,7000,null,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkLimitOrder(),false);
assert.equal(App.usdAmount,1000);

App.usdAmount=7000;                                                   //checking executeOrder() that math is done properly for btc
OrderForm.orderInfo = ["Buy","Limit",1,7000,null,"BTC","USD",0];
OrderForm.placeOrder();
App.getPrice();
App.executeOrder();
var testAmount = OrderForm.orderInfo[2]-(OrderForm.orderInfo[2]*.005);
assert.eqaul(App.btcAmount,testAmount);
assert.equal(App.ordersArray[0],null);
assert.equal(App.usdAmount, 7000-this.currentBTC);
