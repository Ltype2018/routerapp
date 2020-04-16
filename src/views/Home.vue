<template>
  <div class="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部" name="Content"></el-tab-pane>
      <el-tab-pane label="精华" name="Test1"></el-tab-pane>
      <el-tab-pane label="分享" name="Test2"></el-tab-pane>
      <el-tab-pane label="问答" name="Test3"></el-tab-pane>
      <el-tab-pane label="问答" name="Test4"></el-tab-pane>
    </el-tabs>
    <component v-bind:is="activeName" :loading="loading" :list="list"></component>
  </div>
</template>

<script>
import Content from "@/components/Content";
import Test1 from "@/components/Test1"
import Test2 from "@/components/Test2"
import Test3 from "@/components/Test3"
import {mapState,mapActions} from 'vuex'

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      activeName: "Content",
      limit: 15,
      tab: "all",
      loading: true
    };
  },
  computed:{
      ...mapState(['list'])
  },
  methods: {
    ...mapActions(['getTopics']),
    getTopic() {
      let params = {
        page: this.page,
        tab: this.tab,
        limit: this.limit
      };
      this.getTopics(params).then(() =>this.loading = false)
    }
  },
  mounted() {
    this.getTopic()
  },
  components: {
    Content,
    Test1,
    Test2,
    Test3,
    Test4:()=>import('@/components/Test4.vue')
  }
};
</script>