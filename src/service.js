import axios from 'axios'
import { getToken } from '@/utils/setToken.js'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL:'/api',//baseurl自动加载在请求地址上
    timeout:3000
})

//添加请求拦截器
service.interceptors.request.use((config)=>{
    //在请求之前获取并设置token
    config.headers['token'] = getToken('token')
    return config
},(error)=>{
    return Promise.reject(error)
})
//添加响应拦截器
service.interceptors.response.use((response)=>{
    //对响应的不同状态码做出相对应提示
    let{ status,message} = response.data
    if(status!==200){
        Message({message:message ||'error',type:'warning'})
    }
    return response
},(error)=>{
    return Promise.reject(error)
})
export default service