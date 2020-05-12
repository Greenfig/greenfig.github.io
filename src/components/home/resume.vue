<template>
    <q-pdfviewer
        v-model="show"
        :src="resume"
        type="pdfjs"
        content-class="absolute"
    />
</template>

<script>
import resumePdf from 'src/assets/resume.pdf'
export default {
    props: ['show'],
    computed: {
        resume () {
            console.log(resumePdf)
            return resumePdf
        }
    }
}
</script>

<style>

</style>
