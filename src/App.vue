<template>
  <div id="app">
    <Header />
    <div class="main_section">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}

* {
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
  .main_section {
    margin: auto;
    margin-top: 40px;
    width: 1200px;
  }
</style>
