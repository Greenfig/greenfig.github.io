<template>
    <section>
        <div class="container">
            <div class="container-label">
                Skills
            </div>
            <div class="row container-body">
                <div class="col-12 col-md-6 col-lg-6"
                     style="padding-bottom:20px;"
                     v-for="(skill, index) in mySkillsData"
                     :key="index">
                    <q-card class="col-12">
                        <div>
                            <q-icon :name="skill.icon" />
                        </div>
                        <h5>{{ skill.title }}</h5>
                        <ul>
                            <li v-for="(skillset, sindex) in skill.skillsets"
                                :key="sindex"><div class="row">
                                    <div class="col-6">
                                        <q-icon name="done_all"/>
                                        {{ skillset.skill }}
                                    </div>
                                    <div class="col-6 progress-container">
                                        <q-linear-progress rounded :value="skillset.level"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
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
            mySkills: [
                {
                    icon: 'devices',
                    title: 'Languages',
                    skillsets: [
                        { skill: 'Javascript ES6+', level: 0.75 },
                        { skill: 'HTML / CSS / SCSS', level: 0.7 },
                        { skill: 'C#', level: 0.65 },
                        { skill: 'PHP', level: 0.55 },
                        { skill: 'C++', level: 0.5 },
                        { skill: 'Java', level: 0.45 },
                        { skill: 'Python', level: 0.4 }
                    ]
                },
                {
                    icon: 'dns',
                    title: 'Technologies',
                    skillsets: [
                        { skill: 'Asp.Net & .Net Core', level: 0.75 },
                        { skill: 'Vuejs', level: 0.7 },
                        { skill: 'MVC5 & MVVM', level: 0.7 },
                        { skill: 'Nodejs & Nodejs addons', level: 0.65 },
                        { skill: 'OpenMp', level: 0.35 },
                        { skill: 'CUDA', level: 0.3 }
                    ]
                },
                {
                    icon: 'storage',
                    title: 'Databases',
                    skillsets: [
                        { skill: 'Sqlite3', level: 0.7 },
                        { skill: 'MSSql', level: 0.65 },
                        { skill: 'MySql', level: 0.6 },
                        { skill: 'PostgreSql', level: 0.5 },
                        { skill: 'Lucene .Net (Solr)', level: 0.4 }
                    ]
                },
                {
                    icon: 'build',
                    title: 'Other',
                    skillsets: [
                        { skill: 'Visual Studio & Code', level: 1.0 },
                        { skill: 'Microsoft Office', level: 0.9 },
                        { skill: 'Android Studio', level: 0.5 },
                        { skill: 'Azure Functions', level: 0.3 }
                    ]
                }
            ]
        }
    },
    computed: {
        mySkillsData: function () {
            let data = this.mySkills
            data.forEach(skill => {
                skill.skillsets = skill.skillsets.sort((a, b) => b.level - a.level)
            })
            return data
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
.progress-container {
    display: flex;
    .q-linear-progress {
        margin: auto;
        height: 10px;
        color: #64829c;
    }
}
</style>
