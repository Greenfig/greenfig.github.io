<template>
    <q-page>
        <header-section />
        <skills-section />
        <projects-section />
        <repos-section/>
    </q-page>
</template>

<script>
export default {
    name: 'PageIndex',
    components: {
        'header-section': () => ({
            component: import(/* webpackChunkName: "header-section" */ 'src/components/home/header')
        }),
        'skills-section': () => ({
            component: import(/* webpackChunkName: "skills-section" */ 'src/components/home/skills')
        }),
        'projects-section': () => ({
            component: import(/* webpackChunkName: "projects-section" */ 'src/components/home/projects')
        }),
        'repos-section': () => ({
            component: import(/* webpackChunkName: "repos-section" */ 'src/components/home/repos')
        })
    },
    data () {
        return {
            myHeaderStyle: {}
        }
    }
}
</script>
