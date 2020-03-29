<template>
    <div>
        <a-row>
            <a-col :span="4">
                <a-menu
                        @click="handleClick"
                        :defaultSelectedKeys="['1']"
                        :openKeys.sync="openKeys"
                        mode="inline"
                >
                    <a-sub-menu key="sub1" @titleClick="titleClick">
                        <span slot="title"><a-icon type="align-left" /><span>日志</span></span>
                        <a-menu-item-group key="g1">
                            <a-menu-item key="1"><a-icon type="history" />观看记录</a-menu-item>
                            <a-menu-item key="2"><a-icon type="diff" />登录资料</a-menu-item>
                        </a-menu-item-group>
                    </a-sub-menu>
                </a-menu>
            </a-col>
            <a-col :span="19" :offset="1">col-123</a-col>
        </a-row>
    </div>
</template>

<script>

    // import Auth from "@/components/Auth";

    export default {
        name: "UserPage",
        components: {

        },
        data() {
            return {
                current: ['mail'],
                openKeys: ['sub1'],
            };
        },
        methods: {
            handleClick(e) {
                console.log('click', e);
            },
            titleClick(e) {
                console.log('titleClick', e);
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