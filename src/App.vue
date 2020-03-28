<template>
    <div id="app">
        <a-layout id="components-layout">
            <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
                <div class="logo">
                    <a-icon type="file-markdown"/>
                    <span>M3U8.net.cn</span>
                </div>
                <a-menu
                        theme="dark"
                        mode="horizontal"
                        :defaultSelectedKeys="[$route.name]"
                        :selectedKeys="[$route.name]"
                        :style="{ lineHeight: '64px' }"
                >
                    <a-menu-item key="home">
                        <router-link :to="{name: 'home'}"><a-icon type="play-circle"/>播放器</router-link>
                    </a-menu-item>
                    <a-menu-item key="user">
                        <router-link :to="{name: 'user'}"><a-icon type="user"/>用户中心</router-link>
                    </a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item v-for="item of breadcrumb" :key="item.meta.title">
                        <router-link :to="{name: item.name}">{{ item.meta.title }}</router-link>
                    </a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
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
            return {
                breadcrumb: this.$store.state.breadcrumb
            }
        },
        mounted() {
            this.openNotification();
        },
        methods: {
            openNotification() {
                this.$notification['info']({
                    message: '站内通知',
                    description:
                        '免费的在线M3U8播放器，不提供视频资源',
                });
            },
            initBreadcrumb() {
                let matched = this.$route.matched;
                // console.log(matched);
                this.breadcrumb = [{path: "/", meta: {title: "M3U8"}}].concat(matched);
            },
        },
        created(){
            this.initBreadcrumb();
        },
        watch: {
            $route() {
                this.initBreadcrumb();
            }
        },
    }
</script>

<style>
    #components-layout .logo {
        height: 31px;
        color: #ffffff;
        line-height: 31px;
        font-size: 24px;
        margin: 16px 24px 16px 0;
        float: left;
    }

    #components-layout .logo span {
        display: inline-block;
        margin-left: 10px;
    }
</style>
