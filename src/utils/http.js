import axios from 'axios'
//创建axios实列并配置请求头和等待时间
let instance = axios.create({timeout:5000})
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//响应拦截设置
instance.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    err => Promise.reject(err)
)

export default instance 