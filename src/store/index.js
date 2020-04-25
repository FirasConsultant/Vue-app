import Vue from 'vue';
import Vuex from 'vuex';
//import cart from './modules/cart';
//import products from './modules/product';
//import actions from './actions';






Vue.use(Vuex)



const state = {
    count: 0,
};


//const debug = process.env.NODE_ENV !== 'production';









//<!---mutations --->
const mutations = {
    INCREMENT: state => state.count++,
    DECREMENT: state => state.count--,
}

//<!---getters --->
const getters = {
    count: state => state.count
}

//<!--- actions--->
const actions = {
    increment: ({ commit }) => commit('INCREMENT'),
    decrement: ({ commit }) => commit('DECREMENT'),
};



export const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    //  modules: {
    //     counter
    //  //cart,
    //  //products
    //  }
    //namespaced:false
})

