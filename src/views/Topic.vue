<template>
  <div class="topic">
    <div>{{topics.title}}</div>
    <el-row>
      <el-col :span="24">
        <router-link :to="{path:'/user/' + topics.author.loginname }">
          <span>{{topics.author.loginname}}</span>

        </router-link>
                  <span>{{topics.visit_count}}次浏览</span>
      </el-col>
    </el-row>
    <div class="content" v-html="topics.content"></div>
  </div>
</template>

<script>
export default {
  name:"Topic",
  data(){
    return{
      topics:Object
    }
  },
  methods:{
    getDetail(url){
      this.$getTopic.getTopicDetail(url).then(response =>{
        this.topics = response.data
      })
    }
  },
  mounted(){
    let url = this.$route.params.id
    this.getDetail(url)
  }
}
</script>