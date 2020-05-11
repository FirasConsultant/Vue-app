import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
//import * as Cookies from "js-cookie";
//import cart from './modules/cart';
//import products from './modules/product';
//import actions from './actions';

Vue.use(Vuex)

const state = {
    count: 0,
    inCart: []
};

const debug = process.env.NODE_ENV !== 'production';

//<!---mutations --->
const mutations = {
    INCREMENT: state => state.count++,
    DECREMENT: state => state.count--,
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
}

//<!---getters --->
const getters = {
    count: state => state.count,
    inCart: state => state.inCart
}

//<!--- actions--->
const actions = {
    increment: ({ commit }) => commit('INCREMENT'),
    decrement: ({ commit }) => commit('DECREMENT'),
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId) },
};




const createPersisted = createPersistedState({
    storage: window.sessionStorage,
    // Remove the sessionState stored device
    reducer: (vuexState) => {
        let sessionState = Object.assign({}, vuexState)

        for (let key in sessionState) {
            if (key === 'device') {
                delete sessionState[key]
            }
        }
        return sessionState
    }
})
const createStorage = createPersistedState({
    key: 'vuexStorage',
    storage: window.localStorage,
    reducer: (vuexState) => {
        // localStorage only stores device information
        return vuexState.device
    }
})










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
    //namespaced:false,
    debug,
    plugins: debug ? [createStorage, createPersisted] : [createStorage, createPersisted]

})