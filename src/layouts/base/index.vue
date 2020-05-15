<template>
    <q-layout view="hHh lpR fFf">

        <navbar-section/>

        <q-page-container>
            <router-view />
        </q-page-container>

        <footer-section />

    </q-layout>
</template>

<script>
export default {
    components: {
        'navbar-section': () => ({
            component: import(/* webpackChunkName: "navbar-section" */ 'src/components/navbar')
        }),
        'footer-section': () => ({
            component: import(/* webpackChunkName: "footer-section" */ 'src/components/footer')
        })
    }
}
</script>
