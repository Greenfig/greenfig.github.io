import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
const { getScrollTarget, setScrollPosition } = require('quasar').scroll
export default function (/* { store, ssrContext } */) {
    const Router = new VueRouter({
        scrollBehavior: (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            } else {
                if (to.hash) {
                    let el = document.querySelector(to.hash)
                    let target = getScrollTarget(el)
                    let offset = el.offsetTop - 51 // minus the height of the fixed navbar
                    let duration = 250
                    setScrollPosition(target, offset, duration)
                    return false
                }
                return { x: 0, y: 0 }
            }
        },
        routes,

        // Leave these as they are and change in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE
    })

    return Router
}
