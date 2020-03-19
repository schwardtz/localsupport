import store from './vuex/store.js'
import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

store.dispatch('fetchLocations')
