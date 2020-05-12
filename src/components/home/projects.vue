<template>
    <section class="section">
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
                                class="col-12 col-md-5"
                                :src="project.img"
                            />

                            <q-card-section class="col-12 col-md-7">
                                <div class="project-title">
                                    <a :href="project.url"
                                       target="_blank"
                                       style="color:inherit;text-decoration:none;">{{ project.title }}</a>
                                </div>
                                <span v-html="project.desc"></span>
                                <!-- <div class="project-stack">
                                    <div class="project-stack-title">
                                        Tech Stack:
                                    </div>
                                    <div class="project-stack-list">
                                        <div class="project-stack-list-item"
                                             v-for="(stk, sindex) in project.stack"
                                             :key="sindex">
                                            {{ stk }}
                                        </div>
                                    </div>
                                </div> -->
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
                                        {{ stk }}
                                    </div>
                                </div>
                            </div>
                            <div style="margin-left:auto;">
                                <q-btn flat
                                       color="primary"
                                       icon-right="visibility"
                                       push
                                       label="Live"
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
import atbImg from 'src/assets/atbcheck.jpg'
import tbImg from 'src/assets/trinbago.jpg'
export default {
    data () {
        return {
            projects: [
                {
                    title: 'WEB API AND DESKTOP APP (Compliance App)',
                    url: 'https://atbcheck.com',
                    desc: '<b>Atbcheck.com</b> was built to provide companies with an easy and convienient way to ',
                    img: atbImg,
                    stack: ['MVC', 'VueJs', 'ASP.NET Core', 'NodeJs', 'JavaScript', 'PostgreSQL']
                },
                {
                    title: 'CONTENT MANAGEMENT WEBSITE (Classifeid Ads)',
                    url: 'https://trinbagohotspot.com',
                    desc: '<b>TrinbagoHotspot.com</b> was built to provide',
                    img: tbImg,
                    stack: ['MVC', 'ASP.NET', 'Html', 'CSS', 'MSSQL']
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
/deep/.q-img {
    background-color: #eeeeff;
    &__image {
        margin: 2px;
    }
}
.project {
    &-card {
        margin: 0 0 15px 0;
    }
    &-title {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: normal;
        margin-top: 20px;
        margin-bottom: 40px;
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
                margin: 4px;
                box-shadow:0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
                cursor: default;
                font-size: 0.85rem;
            }
        }
    }
}
</style>
