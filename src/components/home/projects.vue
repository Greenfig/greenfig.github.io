<template>
    <section id="projects">
        <div class="container">
            <div>
                <div class="container-label">
                    Projects
                </div>

                <div class="container-body">
                    <q-card class="project-card"
                            v-for="(project, index) in projects"
                            :key="index">
                        <q-card-section class="row" style="padding:0;">
                            <q-img
                                class="col-12 col-md-5 project-img"
                                :src="project.img"
                            />

                            <q-card-section class="col-12 col-md-7">
                                <div class="project-title">
                                    <a :href="project.url"
                                       target="_blank"
                                       style="color:inherit;text-decoration:none;">{{ project.title }}</a>
                                </div>
                                <div class="desc">
                                    <div class="desc-summary">
                                        <p v-html="project.summary.desc"></p>
                                    </div>
                                    <div class="desc-tech">
                                        <p>Technology Summary</p>
                                        <p v-html="project.summary.tech"></p>
                                    </div>
                                </div>
                            </q-card-section>
                        </q-card-section>

                        <q-separator />
                        <q-card-actions class="col-12">
                            <div class="project-stack">
                                <div class="project-stack-title">
                                    Tech Stack:
                                </div>
                                <div class="project-stack-list row">
                                    <div class="project-stack-list-item"
                                         v-for="(stk, sindex) in project.stack"
                                         :key="sindex">
                                        <q-img class="project-stack-list-item-img"
                                               :src="stk.img"
                                               v-on:click="openUrl(stk.link)" />
                                        <q-tooltip>{{ stk.tip }}</q-tooltip>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-left:auto;">
                                <q-btn flat
                                       color="primary"
                                       icon-right="visibility"
                                       push
                                       label="View"
                                       v-on:click="openUrl(project.url)" />
                            </div>
                        </q-card-actions>
                    </q-card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            projects: [
                {
                    title: 'WEB API AND DESKTOP APP (Compliance App)',
                    url: 'https://atbcheck.com',
                    summary: {
                        desc: `Atbcheck.com was built to provide companies with an easy and convienient way 
                                to comply with the Financial Intelligent Unit Laws of Trinidad and Tobago.`,
                        tech: `Consists of a web api and a desktop application. The web api was built using Asp .Net Core and acts as a server for the
                        desktop application. The desktop application uses the Electron framework to provide a self contained NodeJs environment on the user's machine.
                        The application also implements multi threading with a custom built NodeJs C++ add on and OpenMp to provide users control over its performance.`
                    },
                    img: require('src/assets/atbcheck.jpg'),
                    stack: [
                        { img: require('src/assets/vuejs.svg'), link: 'https://vuejs.org/', tip: 'VueJs' },
                        { img: require('src/assets/aspcore.png'), link: 'https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1', tip: 'Asp .Net Core' },
                        { img: require('src/assets/electron.png'), link: 'https://www.electronjs.org/', tip: 'Electron' },
                        { img: require('src/assets/nodejs.svg'), link: 'https://nodejs.org/en/', tip: 'NodeJs' },
                        { img: require('src/assets/postgresql.svg'), link: 'https://www.postgresql.org/', tip: 'PostgreSQL' }
                    ]
                },
                {
                    title: 'CONTENT MANAGEMENT SITE (Classifeid Ads)',
                    url: 'https://trinbagohotspot.com',
                    summary: {
                        desc: `TrinbagoHotspot.com is a classified ad website 
                                build to provide users with a platform to create, read, 
                                update and delete (CRUD) their own ads.`,
                        tech: `Built on Asp .Net, this web app implements Identity Framework to manage user privileges, Code first migrations 
                        to manage data model changes and Lucene .Net as a robust full-text search engine. Great attention to detail was spent on Search Engine Optimizations
                        which resulted in multiple dynamically generated pages reaching the first page result on Google.`
                    },
                    img: require('src/assets/trinbago.jpg'),
                    stack: [
                        { img: require('src/assets/aspnet.png'), link: 'https://dotnet.microsoft.com/apps/aspnet', tip: 'Asp .Net' },
                        { img: require('src/assets/lucene.png'), link: 'https://lucenenet.apache.org/', tip: 'Lucene .Net' }
                    ]
                }
            ]
        }
    },
    methods: {
        openUrl (url) {
            window.open(url, '_blank')
        }
    }
}
</script>
<style lang="scss" scoped>
.container .container-label {
    color: inherit;
}
.desc {
    &-tech {
        > p:first-of-type {
            font-size: 0.95rem;
            font-weight: bold;
            font-style: italic;
        }
    }
}
.project {
    &-card {
        margin: 0 0 45px 0;
    }
    &-img {
        background-color: #eeeeff;
        /deep/.q-img__image {
            margin: 0 5px;
        }
    }
    &-title {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: normal;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    &-stack {
        display: inline-flex;
        padding: 0 8px;
        &-title {
            font-weight: bold;
            font-size: 0.95rem;
            margin: auto;
            min-width: 81px;
        }
        &-list {
            &-item {
                color: black;
                border-radius: 4px;
                background-color: white;
                padding: 3px;
                margin: 2px 10px;
                box-shadow:0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
                cursor: default;
                font-size: 0.85rem;
                &-img {
                    width: 45px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
