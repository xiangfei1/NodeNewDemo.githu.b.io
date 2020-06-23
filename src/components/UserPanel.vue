<template>
  <div class="panel">
    <router-link class="user" :to="'/user/' + user.loginname">
      <img :src="user.avatar_url" />
      <span>{{ user.loginname }}</span>
    </router-link>
    <div>积分：{{ user.score }}</div>
    <div>
      Github:
      <a :href="'https://github.com/' + user.githubUsername" target="_blank">{{
        user.githubUsername
      }}</a>
    </div>
    <div>注册时间：{{ user.create_at | dateFormat("YYYY-MM-DD") }}</div>
  </div>
</template>

<script>
import { getUserByName } from "@/utils/api.js";
import eventProxy from '@/utils/eventProxy.js';
export default {
  // 当前组件的数据中心
  data() {
    return {
      user: {}
    };
  },
  created() {
    if (!this.loginname) {
      return;
    }
    this.fetchData(this.loginname);
  },
  methods: {
    fetchData(loginname) {
      getUserByName(loginname).then(res => {
        this.user = res.data;
        eventProxy.trigger('user',res.data);
      });
    }
  },
  // 监听loginname值的变化
  watch: {
    loginname(loginname) {
      if (!loginname) {
        return;
      }
      this.fetchData(loginname);
    }
  },
  // 父组件向子组件传递的数据
  props: ["loginname"]
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .user {
    margin-bottom: 10px;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
  > a {
    display: flex;
    align-items: center;
  }
}
</style>
