import Vue          from 'vue'
import Router       from 'vue-router'
import VueResource  from 'vue-resource'

import Dashboard  from '../../components/Dashboard.vue'
import About      from '../../components/About.vue'
import Home       from '../../components/Home.vue'
import Contact    from '../../components/Contact.vue'
import Pedidos    from '../../components/Pedidos.vue'
import Login      from '../../components/Login.vue'
import Register     from '../../components/Register.vue'
import Clientes   from '../../components/Clientes.vue'

Vue.use(Router)
Vue.use(VueResource)

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementById('token').value;

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', redirect: '/inicio' },
    {
      path: '/inicio',
      name: 'Home',
      component: Home
    },
    {
      path: '/clientes',
      name: 'Clientes',
      component: Clientes
    },
    {
      path: '/productos',
      name: 'Products',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      /*beforeEnter: function(to, from, next) {
                auth.islogin(to, from, next);
      },*/
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      /*beforeEnter: function(to, from, next) {
                auth.islogin(to, from, next);
      },*/
      component: Register
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      /*beforeEnter: function(to, from, next) {
                auth.requireAuth(to, from, next);
      },*/
      component: Pedidos
    }
    ,
    {
      path: '/consultas',
      name: 'Contact',
      /*beforeEnter: function(to, from, next) {
                auth.requireAuth(to, from, next);
      },*/
      component: Contact
    }
  ]
})
