import article from '../utils/article'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        list:[],
        topics:{},
        user:{}
    },
    mutations:{
        addTopics(state, list){
            state.list = list
        },
        addDetail(state,topics){
            state.topics = topics
        },
        addUserInfo(state,UserInfo){
            state.user = UserInfo
        }
    },
    actions:{
        //添加return then接loading回调函数
        getTopics({commit},params){
           return  article.getTopics(params).then(
             (response)=>{
                 commit('addTopics',response.data.data)}
         )
        },
        getDetailById({commit},id){
            article.getDetailById(id).then(
                (response) =>commit('addDetail', response.data.data)
            )
        },
        getUserInfo({commit},userId){
            article.getUserInfo(userId).then(
                (response)=> commit('addUserInfo',response.data.data)
            )
        }
    }

})