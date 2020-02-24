<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-6">
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
    props: ['setHeader'],
    data () {
        return {
            myName: 'Rene Anderson',
            myDesc: "Persistent and results oriented software developer, seeking opportunities to continue and expand my learning in the field. Searching for elegant and efficient solutions to problems while writing maintainable and readable code. I enjoy new challenges and I'm always eager to learn."
        }
    },
    mounted () {
        this.setHeader({
            backgroundImage: `url(${require('src/assets/php-code-min.jpg')})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundColor: 'none',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            verticalAlign: 'middle'
        })
    }
}
</script>
<style lang="scss" scoped>
.desc {
    font-weight: normal;
    font-size: 1rem;
    padding: 10px 0;
}
.container {
    margin-top: auto;
    margin-bottom: auto;
    > div.row {
        vertical-align: middle;
        > div {
            margin:auto;
            background: rgba(0, 0, 0, 0.88);
            border: 5px solid white;
            border-radius: 30px 0;
            padding: 15px;
        }
    }
}
</style>
