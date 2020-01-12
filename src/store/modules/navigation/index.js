const state = {
    currentPage: location.href
}

const getters = {
    getCurrentPage: state => () => state.currentPage
}

const mutations = {
    SET_CURRENT_NAV: state => (page) => { state.currentPage = page }
}

const actions = {
    SET_CURRENT_NAV: ({ commit }, page) => {
        commit('SET_CURRENT_NAV', page)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
