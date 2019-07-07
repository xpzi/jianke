import Vue from 'vue'
import App from './App.vue'
import router from './router/'

import 'swiper/dist/css/swiper.min.css'
import './assets/styles/reset.styl'
import './assets/styles/common.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
 