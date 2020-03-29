<template>
    <a-form
            id="register"
            :form="form"
            class="register-form"
            @submit="handleSubmit"
    >
        <a-form-item>
            <a-input
                    v-decorator="[
                        'nickname',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入昵称',
                                    whitespace: true
                                }
                            ],
                        },
                    ]"
                    placeholder="昵称"
            >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                    v-decorator="[
                        'email',
                        {
                            rules: [
                                {
                                    type: 'email',
                                    message: '无效的邮箱',
                                },
                                {
                                    required: true,
                                    message: '请输入你的邮箱',
                                },
                            ],
                        },
                    ]"
                    placeholder="邮箱"
            >
                <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)"/>
            </a-input>
        </a-form-item>
        <a-form-item has-feedback>
            <a-input
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入您的密码',
                                },
                                {
                                    validator: validateToNextPassword,
                                },
                            ],
                        },
                    ]"
                    type="password"
                    placeholder="密码"
            >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
            </a-input>
        </a-form-item>
        <a-form-item has-feedback>
            <a-input
                    v-decorator="[
                        'confirm',
                        {
                            rules: [
                                {
                                    required: true,
                                    message: '请再次输入您的密码',
                                },
                                {
                                    validator: compareToFirstPassword,
                                },
                            ],
                        },
                    ]"
                    type="password"
                    @blur="handleConfirmBlur"
                    placeholder="确认密码"
            >
                <a-icon slot="prefix" type="block" style="color: rgba(0,0,0,.25)"/>
            </a-input>
        </a-form-item>
        <a-form-item extra="我们必须确认邮箱属于您的">
            <a-row :gutter="8">
                <a-col :span="8">
                    <a-input
                            v-decorator="[
                                'captcha',
                                {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入邮箱验证码'
                                        }
                                    ]
                                },
                            ]"
                    >
                        <a-icon slot="prefix" type="number" style="color: rgba(0,0,0,.25)"/>
                    </a-input>
                </a-col>
                <a-col :span="16">
                    <a-button>发送验证码</a-button>
                </a-col>
            </a-row>
        </a-form-item>
        <a-button type="primary" html-type="submit" class="register-form-button">
            注册
        </a-button>
    </a-form>
</template>

<script>

    export default {
        name: 'Register',
        data() {
            return {
                confirmDirty: false,
                autoCompleteResult: [],
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this, {name: 'register'});
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleConfirmBlur(e) {
                const value = e.target.value;
                this.confirmDirty = this.confirmDirty || !!value;
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('Two passwords that you enter is inconsistent!');
                } else {
                    callback();
                }
            },
            validateToNextPassword(rule, value, callback) {
                const form = this.form;
                if (value && this.confirmDirty) {
                    form.validateFields(['confirm'], {force: true});
                }
                callback();
            },
        },
    };
</script>

<style scoped>
    #register .register-form-button {
        width: 100%;
    }
</style>