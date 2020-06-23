<template>
  <div class="content">
    <div class="topic" v-for="item in list" :key="item.id">
      <router-link :to="'/user/'+item.author.loginname">
        <img :src="item.author.avatar_url" />
      </router-link>
      <span class="count"> <em>{{item.reply_count}}</em>/<em>{{item.visit_count}}</em> </span>
      <!-- 搞不懂 -->
      <el-tag :type="$tab[item.tab] && $tab[item.tab].type" effect="dark">
        {{$tab[item.tab] && $tab[item.tab].name}}  
      </el-tag> 
      
      <router-link :to="'/topic/'+item.id" class="title">
        {{item.title}}
      </router-link>
      <span class="time">
        {{item.last_reply_at | dateFormat('YYYY-MM-DD')}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style lang="scss" scoped>
.content {
  .topic {
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 50px;
      border-radius: 50%;
      height: 50px;
    }
    span.count {
      width: 50px;
      text-align: center;
      em:first-child {
        font-size: 1.2em;
        color: purple;
      }
      em:last-child {
        color: grey;
      }
    }
    .title {
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
    }
    .time {
      width: 70px;
      text-align: right;
    }
  }
}
</style>
