<template>
    <q-layout view="hHh lpR fFf">

        <navbar-section/>

        <q-page-container>
            <router-view />
        </q-page-container>

        <div class="footer-section">
            <div class="footer-container containter-body">
                <p class="footer-head">
                    Contact Info
                </p>
                <div>
                    {{ userInfoSettings }}
                </div>
                <div>
                    <p style="font-size:15px;">
                        Powered by <a href="https://quasar.dev/" target="_blank">Quasar framework</a>
                    </p>
                    <p>© {{ publishedYear }} {{ userFullName }}. All Rights Reserved</p>
                </div>
            </div>
        </div>

    </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {
        'navbar-section': () => ({
            component: import(/* webpackChunkName: "navbar-section" */ 'src/components/navbar')
        })
    },
    computed: {
        ...mapGetters(['userInfoSettings']),
        userFullName () {
            return `${this.userInfoSettings.fname} ${this.userInfoSettings.lname}`
        },
        publishedYear () {
            let published = this.userInfoSettings.published
            let currentYear = new Date().getFullYear()
            return published === currentYear ? published : `${published} - ${currentYear}`
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    &-section {
        background-color: #5e5d6d;
        color: white;
    }
    &-container {
        padding: 15px 0 5px 0;
        > div {
            font-weight: normal;
            font-size: 1rem;
            text-align: center;
            > p > a {
                text-decoration: none;
                color:#208ae5;
                font-weight: bolder;
            }
        }
        > .footer-head {
            font-size: 1.75rem;
            font-weight: 700;
            text-align: center;
        }
    }
}
</style>
