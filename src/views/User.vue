<template>
    <div class="user">
        <section class="userInfomation">
            <el-row><el-col><router-link :to="{path:'/user/'+user.loginname}">{{user.loginname}}</router-link></el-col></el-row>
            <el-row><el-col>积分：{{user.score}}</el-col></el-row>
            <el-row><el-col>注册时间{{user.create_at}}</el-col></el-row>
        </section>
        <section class="recentTopics">
           <el-row><el-col v-for="item in user.recent_topics" :key="item.id"><router-link :to="{path:'/topic/'+item.id}">{{item.title}}</router-link></el-col></el-row> 
        </section>  
    </div>
</template>

<script>


import {mapState, mapActions} from 'vuex'
export default {
    name:"User",
    computed:{
     ...mapState(['user'])
    },
    methods:{
        ...mapActions(['getUserInfo']),
        loadUserInfo(userId){
            this.getUserInfo(userId)
        }
    },
    mounted(){
        let userId = this.$route.params.id 
        this.loadUserInfo(userId)
    }
}
</script>