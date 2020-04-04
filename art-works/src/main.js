import Vue from 'vue'
import App from './App.vue'

import { router } from '@/router/index.js'
import { store } from '@/store/index.js'

import vuetify from './plugins/vuetify'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(AOS)
AOS.init()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
