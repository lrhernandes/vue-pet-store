import axios from 'axios';
import api from '../../services/api';

const state = {
    discountProducts: []
};

const getters = {
    allDiscountProducts: state => state.discountProducts
};

const actions = {
    async fetchDiscountProducts({commit}){
        const response = await axios.get('http://localhost:3000/products?discount_ne=null&_limit=9&_sort=discount&_order=desc');
        commit('setDiscountProducts', response.data);
    }
};

const mutations = {
    setDiscountProducts: (state, discountProducts) => {state.discountProducts = discountProducts}
};

export default{
    state,
    getters,
    actions,
    mutations
};