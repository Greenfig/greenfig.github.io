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
                    <div class="col-12">
                        <div class="skill">
                            <div class="skill-title">
                                {{ skill.title }}
                            </div>
                            <ul class="skill-list">
                                <li v-for="(skillset, sindex) in skill.skillsets"
                                    :key="sindex"
                                    class="skill-list-item"><div class="row">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['userSkillSettings']),
        mySkillsData () {
            return this.userSkillSettings
        }
    }
}
</script>
<style lang="scss" scoped>
.skill {
    padding: 0 10px;
    &-title {
        font-size: 1.25rem;
        text-align: center;
    }
    &-list {
        list-style: none;
        line-height: 1.75;
        &-item {

        }
    }
}
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
