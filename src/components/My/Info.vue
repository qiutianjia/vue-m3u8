<template>
    <div>
        <a-row>
            <a-col :span="6">
                <a-upload
                        name="avatar"
                        listType="picture-card"
                        class="avatar-uploader"
                        :showUploadList="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :beforeUpload="beforeUpload"
                        @change="handleChange"
                >
                    <a-avatar v-if="imageUrl" :src="imageUrl" alt="avatar" :size="128"/>
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'"/>
                        <div class="ant-upload-text">上传</div>
                    </div>
                </a-upload>
                <a-form
                        id="info"
                        :form="form"
                        class="info-form"
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
                    <a-button type="primary" html-type="submit" class="info-form-button">
                        修改
                    </a-button>
                </a-form>
            </a-col>
            <a-col :span="4" offset="1">
                <a-statistic title="区域" value="东莞" />
            </a-col>
            <a-col :span="4">
                <a-statistic title="IP" value="127.0.0.1" />
            </a-col>
            <a-col :span="4">
                <a-statistic title="设备" value="浏览器" />
            </a-col>
        </a-row>
    </div>
</template>
<script>
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    export default {
        name: 'Info',
        data() {
            return {
                loading: false,
                imageUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
            };
        },
        beforeCreate() {
            this.form = this.$form.createForm(this, {name: 'info'});
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
            handleChange(info) {
                if (info.file.status === 'uploading') {
                    this.loading = true;
                    return;
                }
                if (info.file.status === 'done') {
                    // Get this url from response in real world.
                    getBase64(info.file.originFileObj, imageUrl => {
                        this.imageUrl = imageUrl;
                        this.loading = false;
                    });
                }
            },
            beforeUpload(file) {
                const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
                if (!isJpgOrPng) {
                    this.$message.error('只支持jpeg和png格式的图片');
                }
                const isLt50KB = file.size / 1024 < 50;
                if (!isLt50KB) {
                    this.$message.error('上传的图片必须小于50KB');
                }
                return isJpgOrPng && isLt50KB;
            },
        },
    };
</script>
<style>
    .avatar-uploader > .ant-upload {
        width: 128px;
        height: 128px;
    }

    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }

    #info {
        margin-top: 20px;
    }

    #info .info-form-button {
        width: 100%;
    }
</style>
