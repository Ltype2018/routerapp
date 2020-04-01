

import instance from './request.js'
const base = {
    topics:`/topics`,
    id:`/topic`,
    loginname:`/user`
}

const getTopic = {
      getTopicList(params){
          return instance.get(`${base.topics}`,{
              params:params
          })
      },
      getTopicDetail(url){
          return instance.get(`${base.id}/${url}`)
      },
      getLoginname(loginname){
          return instance.get(`${base.loginname}/${loginname}`)
      }
}

export default getTopic