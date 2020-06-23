<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="tabChanged">
      <el-tab-pane label="全部" name="all">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <Content :list="list" />
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <Content :list="list" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Content from "@/components/Content.vue";
import { getTopics } from "@/utils/api";
export default {
  data() {
    return {
      tab: "all",
      page: 1, //页数
      limit: 20, //每一页的主题数
      list: [],
      store: {},  //在切换tab栏，重置limit和list
    };
  },
  // 在 此钩子下 调用接口数据
  created() {
    this.getTopics();
    window.addEventListener("scroll",this.scrollMethod);
  },
  // 在组件销毁时，移除滚动事件
  destroyed() {
    window.removeEventListener("scroll",this.scrollMethod);
  },

  methods: {
    // 封装获取首页数据的函数
    getTopics() {
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab
      }).then(res => {
        this.list = res.data;
        // console.log(res.data);
        this.limit = this.limit + 20;

        const store = this.store;
        // 将数据存储在store
        store[this.tab] = {
          limit: this.limit,
          data: res.data
        }
      });
    },
    // tab切换事件
    tabChanged() {
      const store = this.store
      // 切换tab后，重新存储数据
      if(!store[this.tab]) {
        this.limit = 20;
        this.list = [];
        this.getTopics();
        return
      }
      this.list = store[this.tab].data
      this.limit = store[this.tab].limit
      // console.log(this.tab)
    },
    // 滚动函数，判断当前滚动条是否到了底部来决定是否重新拉取数据
    scrollMethod() {
      const sumH = document.body.scrollHeight || document.documentElement.scrollHeight
      const viewH = document.documentElement.clientHeight;
      const scrollH = document.body.scrollTop || document.documentElement.scrollTop;
      if(viewH + scrollH >= sumH) {
        this.getTopics();
      }
    }
  },
  components: {
    Content
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
