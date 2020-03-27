<template>
    <div id="app">
        <a-layout id="components-layout">
            <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
                <div class="logo"/>
                <a-menu
                        theme="dark"
                        mode="horizontal"
                        :defaultSelectedKeys="['1']"
                        :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="1">
                        <router-link :to="{name: 'home'}">播放器</router-link>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <router-link :to="{name: 'user'}">用户中心</router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item v-for="(item, index) in breadcrumb" v-bind:key="index">
                        <router-link v-if="item.path" :to="{name: item.path}">{{ item.name }}</router-link>
                    </a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                    <router-view></router-view>
                </div>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                ©2020 M3U8.net.cn
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {}
        },
        /*props: {
            breadcrumb: {
                type: Array,
                default: function () {
                    return [];
                }
            },
        },
        mounted() {
            console.log(this.breadcrumb);
        }*/
    }
</script>

<style>
    #components-layout .logo {
        width: 120px;
        height: 31px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px 24px 16px 0;
        float: left;
    }
</style>
