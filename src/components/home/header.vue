<template>
    <section id="main"
             class="my-header"
             :style="customStyle">
        <div class="bg-blur">
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
                backgroundRepeat: 'no-repeat'
            },
            myName: 'Rene Anderson',
            myDesc: `Persistent and results oriented software developer. 
            I enjoy searching for elegant and efficient solutions to problems while writing maintainable and readable code.`
        }
    }
}
</script>
<style lang="scss" scoped>
.bg-blur {
    width: 100%;
    height: 100vh;
    display: flex;
    vertical-align: middle;
    backdrop-filter: blur(8px);
}
.desc {
    font-weight: normal;
    font-size: 1.30rem;
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
            border: 2px solid white;
            border-radius: 4px;
            text-align: center;
            padding: 15px;
        }
    }
}
</style>
