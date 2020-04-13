import Vue from 'vue';
import { mount } fom '@vue/test-utils';
import App from '../src/App';
import OrderForm from '..src/components/OrderForm';


describe ('Tests for App.vue', () => {
    var assert = require('assert');
    let wrapperApp = mount(App);
    let wrapperOrderForm = mount(OrderForm);

    wrapperApp.usdAmount=7000;
    wrapperOrderForm.orderInfo = ["Buy","Limit",1,7000,,"BTC","USD",0];
    wrapperOrderForm.placeOrder();
    assert.equal(App.checkLimitOrder(), true);
    assert.equal(App.usdAmount,0);
});