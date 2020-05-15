<template>
    <section id="contact">
        <div class="footer-section">
            <div class="footer-container containter-body">
                <p class="footer-head">
                    Contact Info
                </p>
                <div>
                    <p>Phone Number: {{ userPhone }}</p>
                    <p>Email Address: {{ userEmail }}</p>
                </div>
                <div>
                    <p style="font-size:15px;">
                        Powered by <a href="https://quasar.dev/" target="_blank">Quasar framework</a>
                    </p>
                    <p>© {{ publishedYear }} {{ userFullName }}. {{ userLocation }}.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['userInfoSettings']),
        userFullName () {
            return `${this.userInfoSettings.fname} ${this.userInfoSettings.lname}`
        },
        userPhone () {
            return this.userInfoSettings.contact.phone
        },
        userEmail () {
            return this.userInfoSettings.contact.email
        },
        userLocation () {
            return this.userInfoSettings.contact.location
        },
        publishedYear () {
            let published = this.userInfoSettings.published
            let currentYear = new Date().getFullYear()
            return published === currentYear ? published : `${published} - ${currentYear}`
        }
    }
}
</script>

<style lang="scss" scoped>
.footer{
    &-section {
        background-color: #5e5d6d;
        color: white;
    }
    &-container {
        padding: 15px 0 5px 0;
        > div {
            font-weight: normal;
            font-size: 1rem;
            text-align: center;
            > p > a {
                text-decoration: none;
                color:#208ae5;
                font-weight: bolder;
            }
        }
        > .footer-head {
            font-size: 1.75rem;
            font-weight: 700;
            text-align: center;
        }
    }
}
</style>
