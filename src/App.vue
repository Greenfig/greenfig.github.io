<template>
    <div id="q-app">
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
import GoogleAnalytics from 'src/plugins/google-analytics'
import { mapGetters } from 'vuex'
// import Vue from 'vue'
export default {
    name: 'App',
    computed: {
        ...mapGetters(['googleSettings'])
    },
    created () {
        GoogleAnalytics.setup(this.googleSettings.analytics)
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
