import Vue from 'vue';
import Vuex from 'vuex';
import products from '../store/modules/products';
import discountProducts from '../store/modules/discount-products';

Vue.use(Vuex);

export default new Vuex.Store({
    modules :{
        products,
        discountProducts
    }
});