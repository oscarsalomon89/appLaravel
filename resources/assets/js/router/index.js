import Vue          from 'vue'
import Router       from 'vue-router'
import VueResource  from 'vue-resource'
import auth   from '../auth.js'

import Dashboard  from '../../components/Dashboard.vue'
import About      from '../../components/About.vue'
import Home       from '../../components/Home.vue'
import Contact    from '../../components/Contact.vue'
import Pedidos    from '../../components/Pedidos.vue'
import Login      from '../../components/Login.vue'
import Register     from '../../components/Register.vue'
import Clientes   from '../../components/Clientes.vue'
import FileUpload   from '../../components/FileUpload.vue'

Vue.use(Router)
Vue.use(VueResource)

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.options.root = 'http://localhost:8000';

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
      path: '/fotos',
      name: 'Fotos',
      component: FileUpload
    },
    {
      path: '/login',
      name: 'Login',
      beforeEnter: function(to, from, next) {
        auth.islogin(to, from, next);
      },
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      beforeEnter: function(to, from, next) {
        auth.islogin(to, from, next);
      },
      component: Register
    },
    {
      path: '/pedidos',
      name: 'Pedidos',
      component: Pedidos
    }
    ,
    {
      path: '/consultas',
      name: 'Contact',
      component: Contact
    }
  ]
})
