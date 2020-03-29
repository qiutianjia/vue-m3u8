<template>
    <div>
        <a-card
                style="width:100%"
                :tabList="tabList"
                :activeTabKey="key"
                @tabChange="key => onTabChange(key, 'key')"
        >
            <span slot="login"> <a-icon type="login"/>登录 </span>
            <span slot="register"> <a-icon type="key"/>注册 </span>
            <span slot="forgot"> <a-icon type="question"/>忘记密码 </span>

                <p v-if="key === 'login'">
                    <keep-alive><Login /></keep-alive>
                </p>
                <p v-if="key === 'register'">
                    <keep-alive><Register /></keep-alive>
                </p>
                <p v-if="key === 'forgot'">
                    <keep-alive><Forgot /></keep-alive>
                </p>
        </a-card>
    </div>
</template>

<script>
    import Login from "@/components/Auth/Login";
    import Register from "@/components/Auth/Register";
    import Forgot from "@/components/Auth/Forgot";

    export default {
        name: "Auth",
        data() {
            return {
                tabList: [
                    {
                        key: 'login',
                        scopedSlots: {tab: 'login'},
                    },
                    {
                        key: 'register',
                        scopedSlots: {tab: 'register'},
                    },
                    {
                        key: 'forgot',
                        scopedSlots: {tab: 'forgot'},
                    },
                ],
                key: 'login',
            };
        },
        components: {
            Login,
            Register,
            Forgot
        },
        methods: {
            onTabChange(key, type) {
                this[type] = key;
            },
        },
    }
</script>

<style scoped>

</style>