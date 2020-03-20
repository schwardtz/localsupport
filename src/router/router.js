
import VueRouter from 'vue-router'

import Contact from "./../components/Contact.vue"
import Locations from "./../components/Locations.vue";
import Map from "./../components/Map.vue";
import Input from "./../components/Input.vue";
const routes = [
  { path: '/', name:'home', component: Locations },
  { path: '/contact', name:'contact', component: Contact },
  { path: '/karte', name:'map', component: Map },
  { path: '/input', name:'input', component: Input },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;
