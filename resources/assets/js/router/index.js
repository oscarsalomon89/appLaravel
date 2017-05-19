import Vue from 'vue'
import Router from 'vue-router'
//import VueResource from 'vue-resource'

import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'

Vue.use(Router)
//Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})