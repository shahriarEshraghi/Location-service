import Vue from 'vue'
import VueRouter from 'vue-router'
import AllAddresses from '../components/AllAddresses.vue'
import NewAddress from '../components/NewAddress.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllAddresses',
    component: AllAddresses
  },
  {
    path: '/NewAddress',
    name: 'NewAddress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NewAddress
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
