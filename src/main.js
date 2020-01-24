import Vue from 'vue'
import App from './App.vue'
import store from '../src/store/index'
import vuetify from './plugins/vuetify';
import { currency } from "@/currency";
Vue.config.productionTip = false
Vue.filter('currency', currency)
new Vue({
  store: store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
