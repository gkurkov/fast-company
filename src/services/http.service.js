import axios from 'axios'
import { toast } from 'react-toastify'
import configFile from '../config.json'

const http = axios.create({
    baseURL: configFile.apiEndPoint
})

// axios.defaults.baseURL = configFile.apiEndPoint

http.interceptors.request.use(
    function (config) {
        if (configFile.isFireBase) {
            const containSlash = /\/$/gi.test(config.url)
            config.url =
                (containSlash ? config.url.slice(0, -1) : config.url) + '.json'
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

function transformData(data) {
    return data
        ? Object.keys(data).map((key) => ({
              ...data[key]
          }))
        : []
}

// перехватчик ошибок
http.interceptors.response.use(
    // получили данные
    (response) => {
        if (configFile.isFireBase) {
        response.data = { content: transformData(response.data) }
        }
        return response
    },
    // обрабатываем ошибки
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500
        // обработали ошибку:
        if (!expectedErrors) {
            // Sentry.captureException(error)
            console.log(error)
            // toast.info('Something is wrong. Try later')
            toast.error('Something is wrong. Try later')
            toast('Unexpected error')
        }
        // продолжаем выполнять код, передаем ошибку жальше
        return Promise.reject(error)
    }
)

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete
}

export default httpService
