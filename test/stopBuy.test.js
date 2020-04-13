import Vue from 'vue';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import OrderForm from '../src/components/OrderForm.vue'

var assert = require('assert');
App.usdAmount=7000;                                             //Checking stop order fucntion being true
OrderForm.orderInfo = ["Buy","Stop",1,7000,7000,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkStopOrder(), true);
assert.equal(App.usdAmount,0);

var assert = require('assert');
App.usdAmount=6000;                                             //Checking stop order fucntion being true
OrderForm.orderInfo = ["Buy","Stop",1,6000,7000,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkStopOrder(), true);
assert.equal(App.usdAmount,0);

var assert = require('assert');
App.usdAmount=3000;                                             //Checking stop order fucntion being true
OrderForm.orderInfo = ["Buy","Stop",1,6000,7000,"BTC","USD",0];
OrderForm.placeOrder();
assert.equal(App.checkStopOrder(), false);

App.usdAmount=7000;                                                   //checking executeOrder() that math is done properly for btc
OrderForm.orderInfo = ["Buy","Limit",2,7000,7000,"BTC","USD",0];
OrderForm.placeOrder();
App.getPrice();
App.executeOrder();
var testAmount = OrderForm.orderInfo[2]-(OrderForm.orderInfo[2]*.005);
assert.eqaul(App.btcAmount,testAmount);
assert.equal(App.ordersArray[0],null);
assert.equal(App.usdAmount, 7000-(2* this.currentBTC));
