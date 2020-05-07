<template>
    <q-page>
        <header-section />
        <about-section />
        <projects-section />
        <repos-section v-bind:repos="myRepoList" />
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'PageIndex',
    components: {
        'header-section': () => ({
            component: import(/* webpackChunkName: "header-section" */ 'src/components/home/header')
        }),
        'about-section': () => ({
            component: import(/* webpackChunkName: "about-section" */ 'src/components/home/about')
        }),
        'projects-section': () => ({
            component: import(/* webpackChunkName: "projects-section" */ 'src/components/home/projects')
        }),
        'repos-section': () => ({
            component: import(/* webpackChunkName: "repos-section" */ 'src/components/home/repos')
        })
    },
    data () {
        return {
            myRepoList: [],
            myHeaderStyle: {}
        }
    },
    computed: {
        ...mapGetters(['getGithubRepoSettings'])
    },
    mounted () {
        this.myRepoList = this.getGithubRepoSettings
    }
}
</script>
