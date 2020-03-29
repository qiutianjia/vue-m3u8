<template>
    <a-form
            id="login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
    >
        <a-form-item>
            <a-input
                    v-decorator="[
                        'email',
                        { rules: [{ required: true, message: '请输入您的邮箱' }] },
                    ]"
                    placeholder="邮箱"
            >
                <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)"/>
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                    v-decorator="[
                        'password',
                        { rules: [{ required: true, message: '请输入您的密码' }] },
                    ]"
                    type="password"
                    placeholder="密码"
            >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-checkbox
                    v-decorator="[
                        'remember',
                        {valuePropName: 'checked',initialValue: true},
                    ]"
            >
                记住我
            </a-checkbox>
            <a class="login-form-forgot" href="">
                忘记密码
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
                登录
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
    export default {
        name: "Login",
        beforeCreate() {
            this.form = this.$form.createForm(this, {name: 'login'});
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
        }
    }
</script>

<style scoped>
    #login .login-form-forgot {
        float: right;
    }

    #login .login-form-button {
        width: 100%;
    }
</style>