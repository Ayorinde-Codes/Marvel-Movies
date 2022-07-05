import Home from './components/HomeComponent.vue';
import SignUp from './components/SignUpComponent.vue';
import Login from './components/LoginComponent.vue';
import Update from './components/UpdateComponent.vue';
import Add from './components/AddComponent.vue';

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'Add',
        component: Add,
        path: '/add',
    },
    {
        name: 'Update',
        component: Update,
        path: '/update',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup',
    },
    {
        name: 'Login',
        component: Login,
        path: '/login',
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;