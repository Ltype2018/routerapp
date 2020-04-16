<template>
    <div class="user">
        <section class="userInfomation">
            <el-col><el-cow><router-link :to="{path:'/user/'+user.loginname}">{{user.loginname}}</router-link></el-cow></el-col>
            <el-col><el-cow>积分：{{user.score}}</el-cow></el-col>
            <el-col><el-cow>注册时间{{user.create_at}}</el-cow></el-col>
        </section>
        <section class="recentTopics">
           <el-col v-for="item in user.recent_topics" :key="item.id"><el-cow><router-link :to="{path:'/topic/'+item.id}">{{item.title}}</router-link></el-cow></el-col> 
        </section>
        
    </div>
</template>

<script>



export default {
    name:"User"
}
</script>