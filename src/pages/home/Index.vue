<template>
    <q-page>
        <section class="my-header">
            <header-section />
        </section>
        <section>
            <about-section />
        </section>
        <section>
            <a href="/#git"></a>
            <github-section v-bind:repos="myRepoList" />
        </section>
        <section>
            <projects-section />
        </section>
    </q-page>
</template>

<script>
import { mapActions } from 'vuex'
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
            myRepoList: []
        }
    },
    methods: {
        ...mapActions(['GET_USER_REPOS']),
        async getRepoList () {
            try {
                this.myRepoList = await this.GET_USER_REPOS().catch(err => Promise.reject(err))
            } catch (err) {
                console.error(err)
            }
        }
    },
    async mounted () {
        await this.getRepoList()
    }
}
</script>
