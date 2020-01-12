import { createNewInstance } from './_base'

const state = {
    axiosInstance: createNewInstance()
}

const actions = {
    GET_USER_REPOS: ({ rootState }) => {
        return rootState.api.axiosInstance.request({
            // eslint-disable-next-line no-undef
            url: `/users/${rootState.settings.github.user}/repos`,
            method: 'GET'
        })
    }
}

export default {
    state,
    actions
}
