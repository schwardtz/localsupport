import store from './vuex/store.js'
import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import VueRouter from 'vue-router'
import router from "./router/router.js"

Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

store.dispatch('fetchLocations')
