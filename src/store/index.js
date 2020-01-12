import Vue from 'vue'
import Vuex from 'vuex'

// Store modules
import api from './modules/api'
import settings from './modules/settings'
import nav from './modules/navigation'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            api: api,
            settings: settings,
            nav: nav
        },

        // enable strict mode (adds overhead!)
        // for dev mode only
        strict: process.env.DEV
    })

    return Store
}
