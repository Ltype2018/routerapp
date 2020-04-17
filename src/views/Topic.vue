<template>
  <div class="topic">
    <div>{{topics.title}}</div>
    <el-row>
      <el-col :span="24">
        <router-link :to="{path:`/user/${topics.author.loginname}`}">
          <span>{{topics.author.loginname}}</span>
        </router-link>
        <span>{{topics.visit_count}}次浏览</span>
      </el-col>
    </el-row>
    <div class="content" v-html="topics.content"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Topic",
  computed: {
    ...mapState(["topics"])
  },
  methods: {
    ...mapActions(["getDetailById"]),
    getDetail(id) {
      this.getDetailById(id);
    }
  },
  created() {
    let id = this.$route.params.id;
    this.getDetail(id);
  }
};
</script>