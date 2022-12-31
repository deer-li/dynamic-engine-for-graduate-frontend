import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        //地址
        baseURL: process.env.VUE_APP_BASE_API,
        //超时设置
        timeout: 10000
    })
    instance.interceptors.request.use(config => {
        return config
    }),err => {
        return err
    }
    instance.interceptors.response.use(res => {
        return res.data
    }), err => {
        return err
    }
    //3.发起真正的网络请求
    return instance(config)
}
