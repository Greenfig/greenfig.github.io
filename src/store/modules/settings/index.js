const state = require('../../../../appsettings.json')

const getters = {
    getGithubSettings: (state) => state.github,
    getLinkedinSettings: (state) => state.linkedin
}

export default {
    state,
    getters
}
