import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';
import OrderForm from '../../src/components/OrderForm.vue';

window.alert = jest.fn();

describe ('Order Tests', () => {

  // Market Buy 1 BTC worth $7000 with enough USD.
  it ('Market Buy (valid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      usdAmount: 7000,
      currentBTC: 7000,
      orderInfo: ["Buy","Market",7000,,"BTC","USD",0]
    });

    expect(wrapper.vm.checkMarketOrder()).toBe(true);
    expect(wrapper.vm.usdAmount).toBe(0);
    expect(wrapper.vm.btcAmount).toBe(.995);
  });

  // Market Buy 1 BTC worth $7000 without enough USD.
  it ('Market Buy (invalid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      usdAmount: 6000,
      currentBTC: 7000,
      orderInfo: ["Buy","Market",7000,,"BTC","USD",0]
    });

    expect(wrapper.vm.checkMarketOrder()).toBe(false);
    expect(wrapper.vm.usdAmount).toBe(6000);
    expect(wrapper.vm.btcAmount).toBe(0);
  });

  // Market Sell 1 BTC worth $7000 with enough BTC.
  it ('Market Sell (valid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      btcAmount: 1,
      currentBTC: 7000,
      orderInfo: ["Sell","Market",1,,"BTC","USD",0]
    });

    expect(wrapper.vm.checkMarketOrder()).toBe(true);
    expect(wrapper.vm.usdAmount).toBe(6965);
    expect(wrapper.vm.btcAmount).toBe(0);
  });

  // Market Sell 1 BTC worth $7000 without enough BTC.
  it ('Market Sell (invalid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      btcAmount: 0,
      currentBTC: 7000,
      orderInfo: ["Sell","Market",1,,"BTC","USD",0]
    });

    expect(wrapper.vm.checkMarketOrder()).toBe(false);
    expect(wrapper.vm.usdAmount).toBe(0);
    expect(wrapper.vm.btcAmount).toBe(0);
  });

  // Limit Buy 1 BTC worth $7000 with enough USD. (Limit: $6000)
  it ('Limit Buy (valid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      usdAmount: 7000,
      currentBTC: 7000,
      orderInfo: ["Buy","Limit",1,6000,"BTC","USD",0]
    });

    expect(wrapper.vm.checkLimitOrder()).toBe(true);
    expect(wrapper.vm.usdAmount).toBe(1000);
    expect(wrapper.vm.btcAmount).toBe(0);
  });

  // Limit Buy 1 BTC worth $7000 without enough USD. (Limit: $6000)
  it ('Limit Buy (invalid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      usdAmount: 1000,
      currentBTC: 7000,
      orderInfo: ["Buy","Limit",1,6000,"BTC","USD",0]
    });

    expect(wrapper.vm.checkLimitOrder()).toBe(false);
    expect(wrapper.vm.usdAmount).toBe(1000);
    expect(wrapper.vm.btcAmount).toBe(0);
  });

  // Limit Sell 1 BTC worth $7000 with enough USD. (Limit: $7000)
  it ('Limit Sell (valid)', () => {

    const wrapper = shallowMount(App, {
      stubs: {
        OrderForm: true,
      }
    });

    wrapper.setData({
      btcAmount: 1,
      currentBTC: 7000,
      orderInfo: ["Sell","Limit",1,6000,"BTC","USD",0]
    });

    expect(wrapper.vm.checkLimitOrder()).toBe(true);
    expect(wrapper.vm.usdAmount).toBe(0);
    expect(wrapper.vm.btcAmount).toBe(0);
  });

});