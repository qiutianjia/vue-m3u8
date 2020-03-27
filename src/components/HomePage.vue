<template>
    <div>
        <a-row>
            <a-col :span="12">
                <video-player :options="videoOptions"/>
            </a-col>
            <a-col :span="11" :offset="1">
                <a-form layout="horizontal">
                    <a-form-item label="M3U8 VIDEO资源地址">
                        <a-input allowClear size="large">
                            <a-icon slot="prefix" type="link" />
                        </a-input>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import VideoPlayer from "@/components/VideoPlayer";

    export default {
        name: "HomePage",
        components: {
            VideoPlayer
        },
        data() {
            return {
                videoOptions: {
                    sources: [
                        {
                            src: "https://video2.hsanhl.com/btt1/2020/03/20200325/oWvwdzmz/index.m3u8",
                            type: "application/x-mpegURL"
                        }
                    ],
                    controls: true,
                    // preload: 'auto',
                    playbackRates: [0.5, 1, 1.5, 2],
                    liveui: true,
                    fluid: true,
                },
            }
        },
        computed: {

        },
    }
</script>

<style scoped>

</style>