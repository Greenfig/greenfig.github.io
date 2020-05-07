<template>
    <section class="my-header"
             :style="customStyle">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-6">
                    <div class="name">
                        {{ myName }}
                    </div>
                    <div class="desc">
                        {{ myDesc }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import backgroundImage from 'src/assets/php-code-bg.jpg'
export default {
    props: ['setHeader'],
    data () {
        return {
            customStyle: {
                backgroundImage: `url(${backgroundImage})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundColor: 'none',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                verticalAlign: 'middle'
            },
            myName: 'Rene Anderson',
            myDesc: "Persistent and results oriented software developer, seeking opportunities to continue and expand my learning in the field. Searching for elegant and efficient solutions to problems while writing maintainable and readable code. I enjoy new challenges and I'm always eager to learn."
        }
    }
}
</script>
<style lang="scss" scoped>
.desc {
    font-weight: normal;
    font-size: 1.2rem;
    padding: 10px 0;
}
.name {
    font-size: 3rem;
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
            text-align: center;
            padding: 15px;
        }
    }
}
</style>
