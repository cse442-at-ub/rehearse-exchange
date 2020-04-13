/*run with ./node_modules/mocha/bin/mocha*/
import Vue from 'vue';
import { mount } from '@vue/test-utils';
import App from '../src/App.vue';
import OrderForm from '../src/components/OrderForm.vue';

var assert = require('assert');
OrderForm.orderInfo=["Buy","Limit",1,7000,,"BTC","USD",0];
OrderForm.placeOrder();
OrderForm.orderInfo=["Buy","Limit",3,300,300,"LINK","USD",1];
OrderForm.placeOrder();
var testOrders=[["Buy","Limit",1,7000,,"BTC","USD",0],["Buy","Limit",3,300,300,"LINK","USD",1]];
assert.equal(App.ordersArray, testOrders);
