
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

            // get readme
            const readmeUrl = `${repo.url}/readme`

            let results = await axiosInstance.get(readmeUrl).catch(err => Promise.reject(err))
            let readmeData = results.data.content || null
            if (readmeData) {
                let readmeBuff = Buffer.from(readmeData, 'base64')
                let readmeText = readmeBuff.toString('ascii')

                repo.readme_text = readmeText
            } else {
                repo.readme_text = ''
            }

            // format search data
            repo.fuzzy_search_data = `${repo.name} ${repo.description} ${repo.readme_text} ${repo.languages_info.reduce((result, current) => {
                if (parseFloat(current.percent.match(/[0-9.]+/g)) > 5) {
                    result.push(current.key)
                }
                return result
            }, []).join(',')}`.replace(/\n{1,}/g, ' ').replace(/#{2,}/g, '').replace(/!?\[.+\]\(.*\)/g, '').replace(/```.+```/g, '').replace(/\s#\s/g, ' ')
        }

        const newObj = {
            created: Date.now(),
            repos: results.data
        }

        if (fs.existsSync(filePath)) fs.unlinkSync(filePath)
        fs.writeFileSync(filePath, JSON.stringify(newObj))
    }).catch(console.error)
})()
