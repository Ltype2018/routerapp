import axios from 'axios'
const instance = axios.create(
    {
        baseURL:'https://cnodejs.org/api/v1',
        timeout:5000
    }
)

instance.interceptors.response.use(
    response =>{
        if(response.status === 200){
            return response.data
        } else{
            return Promise.reject(response)
        }
    },
    err =>{
        return Promise.resolve(err)
    }

)

export  default instance