import Vue from 'vue';
import App from '../components/App.vue';
import router from './router'
import store from './store'

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
