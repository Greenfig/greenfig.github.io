<template>
    <section id="skills">
        <div class="container">
            <div class="container-label">
                Skills
            </div>
            <div class="row container-body">
                <div class="col-12 col-md-6 col-lg-6"
                     style="padding-bottom: 20px"
                     v-for="(skill, index) in mySkillsData"
                     :key="index">
                    <div class="col-12">
                        <q-card class="skill">
                            <div class="skill-title">
                                {{ skill.title }}
                            </div>
                            <ul class="skill-list">
                                <li v-for="(skillset, sindex) in skill.skillsets"
                                    :key="sindex"
                                    class="skill-list-item">
                                    <div class="row">
                                        <div class="col-12">
                                            <span class="skill-list-item-skill">{{ skillset.skill }}</span>
                                            <span class="skill-list-item-level">{{ skillset.level }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </q-card>
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
        ...mapGetters({ mySkillsData: 'userSkillSettings' })
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
        display: table;
        margin: auto;
        padding-bottom:0 !important;

        &-item {
            line-height: 1.95;
            margin-bottom: 10px;

            &-skill, &-level {
                display: table-cell;
            }
            &-skill {
                width: 170px;
            }
            &-level {
                text-transform: capitalize;
                font-style:italic;
            }
        }
    }
}

/deep/.q-card {
    height: calc(100% - 52px);
    margin: 0 15px;

    >div {
        padding: 20px 0;
        text-align: center;

        >.q-icon {
            margin-top: -40px;
            color: #027be3;
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
                color: #027be3;
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
