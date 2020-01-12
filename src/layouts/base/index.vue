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
                    <q-route-tab to="/page1" label="About" />
                    <q-route-tab to="/page2" label="Projects" />
                    <q-route-tab to="/page3" label="Resume" />
                    <q-route-tab to="/page3" label="Contact" />
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
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters(['getGithubSettings', 'getLinkedinSettings'])
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
            width: 36px;
            height: 36px;
            padding-top: 7px;
            display: inline-block;
            text-align: center;
            border-radius: 50%;
            color: #d0e7fa;
            text-decoration: none;
            i {
                display: block;
                font-size: .75em;
                margin: 5px 10px;
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
</style>
