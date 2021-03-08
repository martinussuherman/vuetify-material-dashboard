// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from 'vue'
import App from './App.vue'
import { configureRouter } from './router'
import { configureVuexStore } from './stores'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

(async function () {
  Vue.config.productionTip = false
  const router = await configureRouter()
  const store = await configureVuexStore()

  new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App),
  }).$mount('#app')
})()
