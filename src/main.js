import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import Router from './routes'

Vue.config.productionTip = false
new Vue({
  Router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
