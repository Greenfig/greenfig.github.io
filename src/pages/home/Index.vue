<template>
    <q-page>
        <section class="my-header">
            <div class="container">
                Rene Anderson
            </div>
        </section>
        <section>
            <div class="container">
                <github-repos v-bind:repos="myRepoList" />
            </div>
        </section>
    </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'PageIndex',
    components: {
        'github-repos': () => ({
            component: import(/* webpackChunkName: "github" */ 'src/components/home/github')
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
