<template>
    <div>
        <video-player :options="videoOptions"/>
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
                    controls: true,
                    preload: 'auto',
                    playbackRates: [0.5, 1, 1.5, 2],
                    liveui: true,
                    sources: [
                        {
                            src: "https://video2.hsanhl.com/btt1/2020/03/20200325/oWvwdzmz/index.m3u8",
                            type: "application/x-mpegURL"
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>