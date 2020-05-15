<template>
    <section id="repos">
        <div class="container">
            <div class="container-label">
                Public Git Repo
            </div>

            <div class="row">
                <div class="col-12 col-md-6 col-lg-6" style="margin:auto;">
                    <q-input v-model="repoSearchStr"
                             label="Search"
                             placeholder="C#, MVC">
                        <template v-slot:append>
                            <q-icon v-if="repoSearchStr !== ''"
                                    name="close"
                                    @click="repoSearchStr = ''"
                                    class="cursor-pointer" />
                            <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
            </div>

            <div class="container-body">
                <div v-if="repoSearchResults.length > 0" class="row">
                    <div class="col-12 col-md-6 col-lg-6 my-card-container"
                         v-for="(value, index) in repoSearchResults"
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
                                    <div style="margin:auto;padding:0 5px;"
                                         v-for="(langObj, langIndex) in value.languages_info"
                                         :key="`${langIndex}-langs`">
                                        <div class="repo-language-circle" :style="getBgColor(langObj.key)"></div>
                                        <span style="margin:auto;">{{ `${langObj.key} - ${langObj.percent}`}}</span>
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
                <div v-else
                     style="display:flex;vertical-align:middle;width:100%;height:100%;">
                    <span style="margin:auto;font-size:2.5rem;color:#95b0c7;">Search Coding Samples</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import gcolors from 'src/assets/githubcolors'
import { mapActions, mapGetters } from 'vuex'
import { go } from 'fuzzysort'
export default {
    data () {
        return {
            repoSearchResults: [],
            repoSearchStr: ''
        }
    },
    computed: {
        ...mapGetters(['githubRepoData']),
        repos () {
            return this.githubRepoData
        }
    },
    watch: {
        repoSearchStr (val) {
            this.repoSearchStr = val
            this.searchRepo()
        }
    },
    methods: {
        ...mapActions(['GET_USER_REPO_LANG']),
        getBgColor (lang) {
            return `background-color:${gcolors[lang]}`
        },
        searchRepo () {
            let results = go(this.repoSearchStr, this.repos, {
                keys: ['fuzzy_search_data'],
                threshold: -1000
            })
            this.repoSearchResults = results.sort((a, b) => a.score - b.score).map(res => this.repos.find(rep => rep.id === res.obj.id))
        }
    }
}
</script>

<style lang="scss" scoped>
.container-body {
    height: 530px;
    overflow: auto;
    // margin-bottom: 130px;
}
.card {
    &-head {
        display: inline-flex;
        width: 100%;
        word-break: break-word;
        flex-wrap: wrap;
        background: #8a89a0;
        color: #eee;
    }
    &-links {
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
