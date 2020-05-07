<template>
    <div id="app">
        <router-view :width="windowWidth"></router-view>
    </div>
</template>

<script>

    export default {
        name: 'App',
        data: () => ({
           windowWidth: window.innerWidth
        }),
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize)
            })
        },
        beforeDestroy() {
          window.removeEventListener('resize', this.onResize)
        },
        methods: {
            onResize() {
                this.windowWidth = window.innerWidth
            }
        }
    }
</script>

<style>
    @import './styles/main.css';
    @import './styles/media.css';
</style>
