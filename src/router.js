import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";

const routes = [
    {
        path: "/home",
        component: HomePage,
        name: "home",
        meta: {
            title: '播放器'
        }
    },
    {
        path: "/user",
        component: UserPage,
        name: "user",
        meta: {
            title: '用户中心'
        }
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

export default router;