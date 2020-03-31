<template>
    <div>
        <a-row>
            <a-col :span="4">
                <a-menu
                        @click="handleClick"
                        :defaultSelectedKeys="['Info']"
                        :openKeys.sync="openKeys"
                        mode="inline"
                >
                    <a-sub-menu key="my">
                        <span slot="title"><a-icon type="user" /><span>我的</span></span>
                        <a-menu-item-group>
                            <a-menu-item key="Info"><a-icon type="profile" />资料</a-menu-item>
                            <a-menu-item key="Favorite"><a-icon type="heart" />收藏</a-menu-item>
                        </a-menu-item-group>
                    </a-sub-menu>
                    <a-sub-menu key="log">
                        <span slot="title"><a-icon type="align-left" /><span>日志</span></span>
                        <a-menu-item-group>
                            <a-menu-item key="History"><a-icon type="history"/>观看记录</a-menu-item>
                            <a-menu-item key="Diff"><a-icon type="diff" />登录资料</a-menu-item>
                        </a-menu-item-group>
                    </a-sub-menu>
                </a-menu>
            </a-col>
            <a-col :span="19" :offset="1">
                <component v-bind:is="componentName"></component>
            </a-col>
        </a-row>
    </div>
</template>

<script>

    // import Auth from "@/components/Auth";
    import Info from "@/components/My/Info";
    import Favorite from "@/components/My/Favorite";
    import History from "@/components/Log/History";
    import Diff from "@/components/Log/Diff";

    export default {
        name: "UserPage",
        components: {
            Info,
            Favorite,
            History,
            Diff
        },
        data() {
            return {
                openKeys: ['my'],
                componentName: 'Info'
            };
        },
        methods: {
            handleClick(e) {
                this.componentName = e.key;
            },
        },
        watch: {
            openKeys(val) {
                console.log('openKeys', val);
            },
        },
        computed: {

        },
        beforeDestroy() {

        },
    }
</script>

<style scoped>

</style>