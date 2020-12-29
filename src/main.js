import Vue from 'vue';
import App from './App.vue';
import router from '././routes';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faSearch, faShoppingCart, faSignInAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);
library.add(faSearch);
library.add(faShoppingCart);
library.add(faSignInAlt);
library.add(faCartPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
