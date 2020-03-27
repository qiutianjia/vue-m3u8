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
        props: {
            breadcrumb: [
                {name: "M3U8"}
            ]
        }
    },
    {
        path: "/user",
        component: UserPage,
        name: "user",
        props: {
            breadcrumb: [
                {name: "M3U8", path: "/home"},
                {name: "用户中心"}
            ]
        }
    },
    {
        path: '/',
        redirect: '/home'
    }
];

let router = new VueRouter({
    routes
});

export default router;