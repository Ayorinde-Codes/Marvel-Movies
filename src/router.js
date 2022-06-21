import Home from './components/HomeComponent.vue';
import SignUp from './components/SignUpComponent.vue';
import Login from './components/LoginComponent.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
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