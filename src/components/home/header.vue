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
            myDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
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
