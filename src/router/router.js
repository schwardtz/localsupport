
import VueRouter from 'vue-router'

const TheContact =()=> import("./../components/TheContact.vue")
const TheMap =()=> import("./../components/TheMap.vue")
const TheInput =()=> import("./../components/TheInput.vue")
const routes = [
  { path: '/', name:'home', component: TheMap },
  { path: '/contact', name:'contact', component: TheContact },
  { path: '/input', name:'input', component: TheInput },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;
