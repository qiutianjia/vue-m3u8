<template>
    <div>
        123456
    </div>
</template>

<script>

    export default {
        name: "UserPage",
        components: {

        },
        data() {
            return {

            }
        },
        computed: {

        },
        beforeDestroy() {
            console.log(123);
        },
        beforeRouteUpdate(to, from, next) {
            this.$store.state.breadcrumb.push(to);
            this.$store.state.breadcrumb.push(from);
            next();
        },
    }
</script>

<style scoped>

</style>