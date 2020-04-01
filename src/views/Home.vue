<template>
  <div class="home">
    <el-tabs v-model="tab">
      <el-tab-pane label="全部" name="all">
        <Content :list="list" :loading = 'loading'></Content>
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <Content :list="list"></Content>
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <Content :list="list"></Content>
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <Content :list="list"></Content>
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <Content :list="list"></Content>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import Content from '@/components/Content'

export default {
    name:"Home",
     data(){
        return{
            page:1,
            tab:"all",
            limit:15,
            list:[],
            loading:true  
        }
    },
    methods:{
        getTopics(){
            let params = {
                page:this.page,
                tab:this.tab,
                limit:this.limit
            }
            this.$getTopic.getTopicList(params).then(Response =>{
              this.list = Response.data;
              this.limit += 10;
              this.loading = false;
            })
        }
    },
    created(){
        this.getTopics()
    },
    components:{
        Content
    }
    
}
</script>