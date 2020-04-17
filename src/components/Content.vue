<template>
    <div class="topic" v-loading="loading">
        <el-row>
            <el-col :span="24" v-for="item in list" :key="item.id">
                <router-link :to='{path:"/user/" + item.author.loginname}'>
                <el-avatar size="small" :src="item.author.avatar_url" alt ="用户头像"></el-avatar>
                </router-link>
                <span class="count">
                    <em>{{item.reply_count}}</em>/<em>{{item.visit_count}}</em>
                </span>
                <router-link class="title" :to='{path:"/topic/" + item.id}'> 
                  {{item.title}}
                </router-link>
            </el-col>
        </el-row> 
    </div>
</template>
<script>

export default {
    name:"Topics",
    props:['loading','list']
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    height: 40px;
  }
</style>