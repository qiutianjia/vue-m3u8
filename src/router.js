import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import store from '@/store';

import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";

const routes = [
    {
        path: "/home",
        component: HomePage,
        name: "home",
    },
    {
        path: "/user",
        component: UserPage,
        name: "user",
    },
    {
        path: '/',
        redirect: '/home'
    }
];

let router = new VueRouter({
    mode: 'history',
    routes
});

/*
router.beforeEach((to, from, next) => {

});
*/

export default router;