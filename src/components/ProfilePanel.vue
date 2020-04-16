<template>
    <div class="panel">
        <router-link class="user" :to="{path:'/user/' + user.loginname}">
           <el-avatar size ="small" shape="square"  :src="user.avatar_url" alt="用户头像" ></el-avatar>
           <span>{{user.loginname}}</span>
        </router-link>
        <div>积分:{{user.score}}</div>
        <div>
            Github:
            <el-link type="primary" :href='"https://github.com/"+ user.githubUsername'  target="_blank">
            {{user.githubUsername}}
            </el-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"ProfilePanel",
    props:["loginname"],
    data(){
        return{
            user:{}
        }
    },
    methods:{
        fetchData(loginname){
            this.getLoginname(loginname).then(res =>{
                this.user =res.data})
        }
    },
    created(){
        if(!this.loginname){
            return
        }
        this.fetchData(this.loginname)
    },
    watch:{
        loginname(){
            if(!this.loginname){
                return
            }
            this.fetchData(this.loginname)
        }
    }
}
</script>