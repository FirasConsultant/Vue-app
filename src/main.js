import Vue from 'vue'
import App from './App.vue'
//<!--- use router for push url-->
import router from './router'
//<!--- use vuetify library-->
import vuetify from './plugins/vuetify';
//<!--- use store (stateMnagement from vueX-->

import {store} from './store';
 
//<!--- use axios for fetching backend api using promises-->
import axios from 'axios';

Vue.config.productionTip = false



axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=b76b385c&page=1&type=movie&Content-Type=application/json'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')




//Vue.prototype.$store = store;