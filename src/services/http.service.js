import axios from 'axios'
import { toast } from 'react-toastify'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndPoint

// перехватчик ошибок
axios.interceptors.response.use(
    // получили данные
    (response) => response,
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
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

export default httpService
