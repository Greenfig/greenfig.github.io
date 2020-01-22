<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-lg-3">
                <q-img
                    :src="myPhoto"
                    spinner-color="white"
                    style="height: 200px; max-width: 200px"
                />
            </div>
            <div class="col-md-9 col-lg-9">
                <div>{{ myName }}</div>
                <div class="desc">
                    {{ myDesc }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            myPhoto: 'https://via.placeholder.com/200',
            myName: 'Rene Anderson',
            myDesc: "Persistent and results oriented software developer, seeking an opportunity to continue and expand my learning in the field. Searching for elegant and efficient solutions to problems while writing maintainable and readable code. I enjoy new challenges and I'm always eager to learn."
        }
    }
}
</script>
<style lang="scss" scoped>
.desc {
    font-weight: normal;
    font-size: 1rem;
    padding: 10px 0;
}
</style>
