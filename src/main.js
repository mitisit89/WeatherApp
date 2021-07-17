import Vue from 'vue'
import App from './App.vue'
import 'bulma'
import '@fortawesome/fontawesome-free/css/all.css'
import store from './api'
Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
