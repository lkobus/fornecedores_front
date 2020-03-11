// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'
import TheMask from 'vue-the-mask'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

// register the plugin on vue
import Toasted from 'vue-toasted';

Vue.use(Toasted)
Vue.use(VueLodash, { name: 'custom' , lodash: lodash })
Vue.use(TheMask);
Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios
Vue.component('pulse-loader', require('vue-spinner/src/PulseLoader.vue'));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
