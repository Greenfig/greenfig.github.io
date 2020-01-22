<template>
    <div class="container">
        <div class="container-label">
            Skills
        </div>
        <div class="row container-body">
            <div class="col-12 col-md-6 col-lg-3"
                 v-for="(skill, index) in mySkills"
                 :key="index">
                <q-card class="col-12">
                    <div>
                        <q-icon :name="skill.icon" />
                    </div>
                    <h5>{{ skill.title }}</h5>
                    <ul>
                        <li v-for="(skillset, sindex) in skill.skillsets"
                            :key="sindex"><q-icon name="done_all"/>{{ skillset }}</li>
                    </ul>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            mySkills: [
                {
                    icon: 'devices',
                    title: 'Languages',
                    skillsets: [
                        'C#',
                        'HTML / CSS / SCSS',
                        'Javascript ES6+',
                        'Java',
                        'Python',
                        'PHP'
                    ]
                },
                {
                    icon: 'dns',
                    title: 'Technologies',
                    skillsets: [
                        'Asp.Net & .Net Core',
                        'Nodejs & Nodejs addons',
                        'Vuejs',
                        'MVC5 & MVVM',
                        'OpenMp',
                        'CUDA'
                    ]
                },
                {
                    icon: 'storage',
                    title: 'Databases',
                    skillsets: [
                        'MSSql',
                        'MySql',
                        'Lucene .Net (Solr)',
                        'PostgreSql',
                        'Sqlite3'
                    ]
                },
                {
                    icon: 'build',
                    title: 'Other',
                    skillsets: [
                        'Android Studio',
                        'Microsoft Office',
                        'Visual Studio & Code',
                        'Azure Functions'
                    ]
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/.q-card {
    height: calc(100% - 52px);
    margin: 0 15px;
    > div {
        margin-top: 40px;
        text-align: center;
        > .q-icon {
            margin-top: -40px;
            color: #027BE3;
            font-size: 3rem;
            background-color: #d0e7fa;
            width: 85px;
            height: 85px;
            border-radius: 50%;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
        }
    }
    h5 {
        text-align: center;
    }
    ul {
        list-style: none;
        padding: 0 30px 30px 30px;
        li {
            .q-icon {
                color: #027BE3;
                font-size: 1.4rem;
                margin-right: 10px;
            }
        }

    }
}
</style>
