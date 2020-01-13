<template>
    <div class="q-pa-md">
        <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            padding
            arrows
            height="300px"
            class="bg-white text-black shadow-1 rounded-borders no-shadow"
        >
            <q-carousel-slide :name="index"
                              class="column no-wrap"
                              v-for="(value, index) in repos"
                              :key="index">
                <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
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
                            {{ value.description }}
                        </q-card-section>

                        <q-separator inset />

                        <q-card-section class="row">
                            <div class="col-auto" style="display:flex;">
                                <p style="margin:auto;">
                                    {{ value.created_at }}
                                </p>
                            </div>
                            <div class="card-links col-auto">
                                <div class="card-links-a">
                                    <a :href="value.html_url" target="_blank"><q-icon name="code" /></a>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>
<script>
export default {
    props: ['repos'],
    data () {
        return {
            slide: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.card-head {
    display: inline-flex;
    width: 100%;
    word-break: break-word;
    flex-wrap: wrap;
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
.my-card {
    min-width:198px;
    width:100%;
    max-width:320px;
}
</style>
