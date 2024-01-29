const state = {
    appSettings: require('../../../../appsettings.json'),
    githubRepos: require('src/assets/githubreposinfo.json')
}

const getters = {
    githubSettings: (state) => state.appSettings.userInfo.social.github,
    linkedinSettings: (state) => state.appSettings.userInfo.social.linkedin,
    googleSettings: (state) => state.appSettings.google,
    userInfoSettings: (state) => {
        let ui = JSON.parse(JSON.stringify(state.appSettings.userInfo))
        delete ui.social
        delete ui.skills
        delete ui.projects
        return ui
    },
    userSkillSettings: (state) => {
        const skillRanking = Object.entries(state.appSettings.skillRanking)
        return JSON.parse(JSON.stringify(state.appSettings.userInfo.skills)).map((skill) => {
            skill.skillsets = skill.skillsets.sort((a, b) => b.level - a.level).map(({ skill, level }) => ({ skill, level: skillRanking.find(f => f[1] === level)[0] }))
            return skill
        })
    },
    githubRepoData: (state) => state.githubRepos.repos
}

export default {
    state,
    getters
}
