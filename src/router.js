// routes.js
import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from './components/Register.vue';
import Main from './components/Main.vue';
import Modal from './components/Modal.vue';

Vue.use(VueRouter)

const routes = [
    { 
        path: '/', 
        name: ' ',
        component: Register 
    },
    { 
        path: '/main', 
        name: 'Main',
        component: Main 
    },
    { 
        path: '/modal', 
        name: 'Modal',
        component: Modal 
    },
    
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
export default router