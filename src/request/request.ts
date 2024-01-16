import axios from "axios";

const instance = axios.create({
    baseURL: '',
    timeout: 15000
})
instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})
export default instance