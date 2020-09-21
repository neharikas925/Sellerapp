import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(require('vue-resource'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
