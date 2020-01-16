import { createNewInstance } from './_base'

const getGithubAxiosInstance = () => {
    const axios = createNewInstance()
    axios.interceptors.request.use(config => {
        config.baseURL = 'https://api.github.com'
        return config
    }, err => Promise.reject(err))

    return axios
}

const state = {
    githubApiAxios: getGithubAxiosInstance(),
    axiosInstance: createNewInstance()
}

const actions = {
    GET_USER_REPOS: ({ rootState }) => {
        return rootState.api.githubApiAxios.request({
            // eslint-disable-next-line no-undef
            url: `/users/${rootState.settings.github.user}/repos`,
            method: 'GET'
        })
    },
    GET_USER_REPO_LANG: ({ rootState }, url) => {
        return rootState.api.axiosInstance.request({
            url,
            method: 'GET'
        })
    }
}

export default {
    state,
    actions
}
