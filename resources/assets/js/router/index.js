import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Dashboard from '../components/Dashboard.vue'
import User from '../components/User.vue'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/clientes',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/productos',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/usuarios',
      name: 'User',
      component: User
    }
  ]
})