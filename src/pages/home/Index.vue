<template>
    <q-page>
        <header-section />
        <about-section />
        <github-section v-bind:repos="myRepoList" />
        <projects-section />
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
        'github-section': () => ({
            component: import(/* webpackChunkName: "github-section" */ 'src/components/home/github')
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
