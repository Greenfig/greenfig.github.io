<template>
    <section>
        <div class="container">
            <div class="container-label">
                Projects
            </div>

            <div class="container-body row">
                <div class="col-12 row"
                     style="padding:10px 0;"
                     v-for="(project, index) in projects"
                     :key="index">
                    <div class="col-12 col-md-5">
                        <h5>
                            <a :href="project.url"
                               target="_blank"
                               style="color:inherit;text-decoration:none;">{{project.title}}</a>
                        </h5>
                        <span v-html="project.desc"></span>
                    </div>
                    <div class="col-12 col-md-7">
                        <div class="img-container">
                            <q-img :src="project.img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import atbImg from 'src/assets/atbcheck.jpg'
import tbImg from 'src/assets/trinbago.jpg'
export default {
    data () {
        return {
            projects: [
                {
                    title: 'Atbcheck',
                    url: 'https://atbcheck.com',
                    desc: 'Lorem ipsum dolor sit amet, <b>consectetur</b> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    img: atbImg
                },
                {
                    title: 'TrinbagoHotspot',
                    url: 'https://trinbagohotspot.com',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    img: tbImg
                }
            ]
        }
    }
}
</script>
