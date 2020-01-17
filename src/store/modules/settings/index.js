const state = {
    appSettings: require('../../../../appsettings.json'),
    githubRepos: require('src/assets/githubreposinfo.json')
}

const getters = {
    getGithubSettings: (state) => state.appSettings.github,
    getLinkedinSettings: (state) => state.appSettings.linkedin,
    getGithubRepoSettings: (state) => state.githubRepos.repos
}

export default {
    state,
    getters
}
