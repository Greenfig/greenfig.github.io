<template>
    <q-layout view="hHh lpR fFf">

        <q-header bordered
                  class="bg-primary text-white"
                  height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <ul class="toolbar-title-social">
                        <li>
                            <a :href="getGithubSettings.url" target="_blank"><q-icon name="fab fa-github-alt" /></a>
                        </li>
                        <li>
                            <a :href="getLinkedinSettings.url" target="_blank"><q-icon name="fab fa-linkedin" /></a>
                        </li>
                    </ul>
                </q-toolbar-title>
                <q-tabs align="left">
                    <q-route-tab :to="value.path"
                                 :label="value.title"
                                 v-for="(value, index) in otherRoutes"
                                 :key="index" />
                </q-tabs>
            </q-toolbar>

        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import routes from 'src/router/routes'
export default {
    data () {
        return {
            homeRoutes: routes.find(f => f.title === 'About' && !f.hidden),
            otherRoutes: routes.filter(f => f.title !== 'About' && !f.hidden)
        }
    },
    computed: {
        ...mapGetters(['getGithubSettings', 'getLinkedinSettings'])
    },
    mounted () {
        console.log(routes)
    }
}
</script>

<style lang="scss" scoped>
.toolbar-title-social {
    list-style: none;
    display: block;
    margin: 0;
    li {
        padding: 0 5px;
        display: inline-block;
        a {
            color: #d0e7fa;
            width: 36px;
            height: 36px;
            display: flex;
            text-align: center;
            border-radius: 50%;
            text-decoration: none;
            vertical-align: middle;
            i {
                font-size: .915em;
                margin: auto;
                &:hover {
                    background-color: transparent;
                }
            }
            &:hover {
                background-color:  #208ae5;
            }
        }
    }
}
/deep/.q-tabs__content {
    padding-right: 40px;
    a {
        width: 110px;
    }
}
/deep/.q-tab, a {
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
}
/deep/.q-tabs__label {
    font-weight: normal;
    &.active {
        font-weight: 500;
    }
}
</style>
