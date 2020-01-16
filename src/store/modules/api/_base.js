import axios from 'axios'
import { Notify } from 'quasar'

export const createNewInstance = () => {
    const a = axios.create()

    // Switch adapter
    a.defaults.adapter = require('axios/lib/adapters/http')

    // Setup response interceptor
    a.interceptors.response.use(
        response => {
            if (response.data.message) {
                Notify.create({
                    message: response.data.message,
                    color: 'primary',
                    timeout: 3 * 1000
                })
            }
            return Promise.resolve(response.data.content ? response.data.content : (response.data || response))
        },
        error => {
            const showMessage = msg =>
                Notify.create({
                    message: msg,
                    color: 'red',
                    duration: 3 * 1000
                })

            switch (error.code) {
                case 'ECONNREFUSED': {
                    break
                }
                default: {
                    switch (error.response.status) {
                        // Ignore 500 errors
                        case 500: {
                            break
                        }
                        // Unauthorize
                        case 401: {
                            showMessage(error.response.statusText)
                            break
                        }
                        // Access denied
                        case 403: {
                            break
                        }
                        // Not Found
                        case 404: {
                            showMessage('Route Not Found!')
                            break
                        }
                        default:
                            showMessage(error.response.data.error)
                            break
                    }
                    return Promise.reject(error)
                }
            }
        }
    )
    return a
}
