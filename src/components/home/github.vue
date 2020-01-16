<template>
    <div class="container">
        <div class="container-label">
            Git Repos
        </div>
        <div class="container-body row">
            <div class="col-12 col-md-6 col-lg-6 my-card-container"
                 v-for="(value, index) in repos"
                 :name="index"
                 :key="index">
                <q-card flat
                        bordered
                        class="my-card"
                >
                    <q-card-section class="card-head column">
                        <div class="text-h6 card-head-title col-12">
                            <span style="margin:auto;">{{ value.name }}</span>
                        </div>
                    </q-card-section>

                    <q-card-section>
                        {{ value.description || "N/A" }}
                    </q-card-section>

                    <q-separator inset />

                    <q-card-section class="row">
                        <div class="col-auto" style="display:flex;">
                            <p style="margin:auto;">
                                {{ new Date(value.created_at).toDateString() }}
                            </p>
                            <div style="margin:auto;padding:0 5px;">
                                <div class="repo-language-circle" :style="getBgColor(value.language)"></div>
                                <span style="margin:auto;">{{ value.language }}</span>
                            </div>
                        </div>
                        <div class="card-links col-auto">
                            <div class="card-links-a">
                                <a :href="value.html_url" target="_blank">
                                    <q-tooltip>View code on github</q-tooltip>
                                    <q-icon name="code" />
                                </a>
                            </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
import gcolors from 'src/assets/githubcolors'
import { mapActions } from 'vuex'
export default {
    props: ['repos'],
    data () {
        return {
            slide: 0
        }
    },
    methods: {
        ...mapActions(['GET_USER_REPO_LANG']),
        getBgColor (lang) {
            return `background-color:${gcolors[lang]}`
        }
    },
    mounted () {
        console.log(gcolors)
    }
}
</script>

<style lang="scss" scoped>
.card-head {
    display: inline-flex;
    width: 100%;
    word-break: break-word;
    flex-wrap: wrap;
    background: #eee;
    color: #757575;
}
.card-links {
    display: inline-flex;
    margin-left: auto;
    &-a{
        padding: 0 5px;
        width: 100%;
        a {
            color: #616161;
            width: 36px;
            height: 36px;
            display: flex;
            text-align: center;
            border-radius: 50%;
            text-decoration: none;
            vertical-align: middle;
            float: right;
            i {
                display: block;
                font-size: 1.715em;
                margin: auto;
                &:hover {
                    background-color: transparent;
                }
            }
            &:hover {
                background-color:  #efefef;
            }
        }
    }
}
.my-card-container {
    // min-width:198px;
    // width:100%;
    // max-width:320px;
    padding: 10px;
}
.q-card__section {
    min-height: 55px;
}
.repo-language-circle {
    position: relative;
    top: 1px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin:0 2px;
}
</style>
