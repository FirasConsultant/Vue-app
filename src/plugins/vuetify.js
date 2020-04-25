import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// <--! use of vuex library of state management : used when a state inside a component is shared between others components -->
//import Vuex from 'vuex'

// <--! use of EcmaScript ES6 in order to manage promises & async callBacks -->
import 'es6-promise/auto';



Vue.use(Vuetify);
//Vue.use(Vuex)

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
      },
});


 