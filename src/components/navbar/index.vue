<template>
    <q-header bordered
              class="text-white"
              height-hint="98">
        <q-toolbar>
            <q-toolbar-title>
                <ul class="toolbar-title-social">
                    <li>
                        <a :href="githubSettings.url" target="_blank">
                            <q-tooltip>Github</q-tooltip>
                            <q-icon name="fab fa-github-alt" />
                        </a>
                    </li>
                    <li>
                        <a :href="linkedinSettings.url" target="_blank">
                            <q-tooltip>LinkedIn</q-tooltip>
                            <q-icon name="fab fa-linkedin-in" />
                        </a>
                    </li>
                </ul>
            </q-toolbar-title>
            <q-tabs align="left">
                <!-- static routes -->
                <q-route-tab :to="value"
                             :label="value.title"
                             v-for="(value, index) in homeRoutes.children[0].children"
                             :key="`${index}-home`" />
                <!-- Other routes -->
                <q-route-tab :to="value.path"
                             :label="value.title"
                             v-for="(value, index) in otherRoutes"
                             :key="`${index}-other`" />
                <q-btn v-on:click="toggleResumeDialogue" class="resume-btn">
                    Resume
                </q-btn>
            </q-tabs>
        </q-toolbar>
        <q-dialog
            v-model="showResumeDialogue"
            persistent
            :maximized="maximizedToggle"
            transition-show="slide-up"
            transition-hide="slide-down">
            <q-card>
                <q-bar>
                    <q-space />

                    <q-btn dense
                           flat
                           icon="close"
                           v-close-popup>
                        <q-tooltip content-class="bg-white text-primary">
                            Close
                        </q-tooltip>
                    </q-btn>
                </q-bar>
                <resume-section :show="showResumeDialogue"/>
            </q-card>
        </q-dialog>
    </q-header>
</template>

<script>
import routes from 'src/router/routes'
import { mapGetters } from 'vuex'

export default {
    components: {
        'resume-section': () => ({
            component: import(/* webpackChunkName: "resume-section" */ 'src/components/home/resume')
        })
    },
    data () {
        return {
            showResumeDialogue: false,
            maximizedToggle: true
        }
    },
    computed: {
        ...mapGetters(['githubSettings', 'linkedinSettings']),
        homeRoutes () { return routes.find(f => f.title === 'Main' && !f.hidden) },
        otherRoutes () { return routes.filter(f => f.title !== 'Main' && !f.hidden) }
    },
    methods: {
        toggleResumeDialogue () { this.showResumeDialogue = !this.showResumeDialogue }
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
                // background-color:  #208ae5;
                background-color: #96969663;
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
.resume-btn {
    margin-left: 10px;
    background-color: #5e5d6d;
}
</style>
