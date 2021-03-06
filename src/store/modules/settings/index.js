const state = {
    appSettings: require('../../../../appsettings.json'),
    githubRepos: require('src/assets/githubreposinfo.json')
}

const getters = {
    githubSettings: (state) => state.appSettings.userInfo.social.github,
    linkedinSettings: (state) => state.appSettings.userInfo.social.linkedin,
    userInfoSettings: (state) => {
        let ui = JSON.parse(JSON.stringify(state.appSettings.userInfo))
        delete ui.social
        delete ui.skills
        delete ui.projects
        return ui
    },
    userSkillSettings: (state) => JSON.parse(JSON.stringify(state.appSettings.userInfo.skills)).map(skill => {
        skill.skillsets = skill.skillsets.sort((a, b) => b.level - a.level)
        return skill
    }),
    githubRepoData: (state) => state.githubRepos.repos
}

export default {
    state,
    getters
}
