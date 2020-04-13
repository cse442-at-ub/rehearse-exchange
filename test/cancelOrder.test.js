import Vue from 'vue';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import OrderForm from '../src/components/OrderForm.vue';

var assert = require('assert');
OrderForm.orderInfo=["Buy","Limit",1,7000,null,"BTC","USD",0];
var testOrder = OrderForm.orderInfo;
OrderForm.placeOrder();
assert.equal(App.usdAmount,0);
App.cancelOrder(testOrder);
assert.equal(App.usdAmount,7000);

var assert = require('assert');
OrderForm.orderInfo=["Sell","Limit",1,7000,null,"BTC","USD",0];
var testOrder = OrderForm.orderInfo;
OrderForm.placeOrder();
assert.equal(App.btcAmount,0);
App.cancelOrder(testOrder);
assert.equal(App.btcAmount,700);
