import base from './base.js'
import http from './http.js'

const article = {
    getTopics(params){
        return http.get(`${base.loadTopics}`,{
            params:params
        })
    },
    getDetailById(id){
        return http.get(`${base.loadId}/${id}`)
    },
    getUserInfo(userId){
        return http.get(`${base.loadUserInfo}/${userId}`)
    }
}

export default article


/*
Vue  ---   methods ---- actions ---- mutations ----state
Topics --- getTopics -- getTopics ---addTopics ----Topics
Detail --- getDetail-----getDetail ---addDetail ---Detail
User ------getUserInfo---getUserInfo---addUserInfo--User
*/