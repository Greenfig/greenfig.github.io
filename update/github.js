
(function () {
    const fs = require('fs')
    const path = require('path')
    const fileName = 'githubreposinfo.json'
    const axios = require('axios')
    const appSettings = require('../appsettings.json')
    const axiosInstance = axios.create()
    const filePath = path.resolve(__dirname, `../src/assets/${fileName}`)

    axiosInstance.defaults.adapter = require('axios/lib/adapters/http')

    axiosInstance.get(`https://api.github.com/users/${appSettings.github.user}/repos`).then(async results => {
        const getFullLang = async (url) => {
            const langsResults = await axiosInstance.get(url).catch(err => Promise.reject(err))
            const totalVal = Object.values(langsResults.data).reduce((sum, value) => sum + value)
            return Object.keys(langsResults.data).map(key => {
                const percent = `${((langsResults.data[key] / totalVal) * 100).toFixed(2)}%`
                return ({ key, percent })
            })
        }

        for (var repo of results.data) {
            repo.languages_info = await getFullLang(repo.languages_url)
        }

        const newObj = {
            created: Date.now(),
            repos: results.data
        }

        if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
        fs.writeFileSync(filePath, JSON.stringify(newObj))
    }).catch(console.error)
})()
