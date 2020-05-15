<template>
    <div id="pdfobject-id"></div>
</template>

<script>
import resumePdf from 'src/assets/resume.pdf'
import pdfObject from 'pdfobject'
export default {
    props: ['show'],
    mounted () {
        pdfObject.embed(resumePdf, '#pdfobject-id')
    }
}
</script>

<style language="scss" scoped>
.pdfobject-container {
    height: calc(100vh - 32px);
}
</style>
