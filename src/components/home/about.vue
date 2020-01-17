<template>
    <div class="container">
        <div class="container-label">
            Skills
        </div>
        <div class="row container-body">
            <div class="col-12 col-md-4 col-lg-4">
                <q-card class="col-12">
                    <div>
                        <q-icon name="devices" />
                    </div>
                    <h5>Frontend</h5>
                    <ul>
                        <li><q-icon name="done_all" />HTML / CSS / SCSS</li>
                        <li><q-icon name="done_all" />Javascript / JQuery</li>
                        <li><q-icon name="done_all" />Webpack</li>
                        <li><q-icon name="done_all" />Vuejs</li>
                    </ul>
                </q-card>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <q-card class="col-12">
                    <div>
                        <q-icon name="dns" />
                    </div>
                    <h5>Backend</h5>
                    <ul>
                        <li><q-icon name="done_all" />Asp.Net &amp; .Net Core</li>
                        <li><q-icon name="done_all" />Nodejs &amp; Nodejs C++ addons</li>
                        <li><q-icon name="done_all" />PHP</li>
                        <li><q-icon name="done_all" />PostgreSQL / MySQL / MSSQL</li>
                    </ul>
                </q-card>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <q-card class="col-12">
                    <div>
                        <q-icon name="build" />
                    </div>
                    <h5>Other</h5>
                    <ul>
                        <li><q-icon name="done_all" />Visual Studio &amp; VS Code</li>
                        <li><q-icon name="done_all" />Entity Framework</li>
                        <li><q-icon name="done_all" />MVC5 / MVVM</li>
                        <li><q-icon name="done_all" />OpenMp / CUDA</li>
                    </ul>
                </q-card>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
/deep/.q-card {
    height: calc(100% - 52px);
    margin: 0 15px;
    > div {
        margin-top: 40px;
        text-align: center;
        > .q-icon {
            margin-top: -40px;
            color: #027BE3;
            font-size: 3rem;
            background-color: #d0e7fa;
            width: 85px;
            height: 85px;
            border-radius: 50%;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
        }
    }
    h5 {
        text-align: center;
    }
    ul {
        list-style: none;
        padding: 0 30px 30px 30px;
        li {
            .q-icon {
                color: #027BE3;
                font-size: 1.4rem;
                margin-right: 10px;
            }
        }

    }
}
</style>
