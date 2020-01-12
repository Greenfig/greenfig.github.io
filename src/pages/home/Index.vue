<template>
    <q-page class="flex flex-center">
        <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'PageIndex',
    data () {
        return {
            myRepoList: []
        }
    },
    methods: {
        ...mapActions(['GET_USER_REPOS']),
        async getRepoList () {
            try {
                console.log('ehllo                ')
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
