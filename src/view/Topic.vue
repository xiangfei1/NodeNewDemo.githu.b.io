<template>
  <div class="topic">
    <div class="left">
      <div class="title">
        {{topic.title}}
      </div>
      <div class="info">
        <span>
          发布于 &nbsp; {{topic.last_reply_at | dateFormat('YYYY-MM-DD')}}&nbsp;•&nbsp;
        </span>
        作者：
        <router-link :to="'/user/'+topic.loginname">{{ topic.loginname }}</router-link>&nbsp;•&nbsp;
        <span>{{topic.visit_count}}次浏览 &nbsp;•&nbsp; </span>
        <span>
          来自： {{$tab[topic.tab] && $tab[topic.tab].name}}
        </span>
      </div>
      <Divider />
      <div class="content" v-html="topic.content"></div>
      <!-- <div class="reply"></div> -->
      <!-- 回复 -->
      <Reply :data="topic.replies"/>
    </div>
    <div class="right">
      <UserPanel :loginname="topic.loginname" />
      <OtherTopic />
      <RecentReply />
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider.vue";
import UserPanel from '@/components/UserPanel.vue';
import OtherTopic from '@/components/OtherTopic.vue';
import RecentReply from '@/components/RecentReply.vue';
import Reply from '@/components/Reply.vue';
import {getTopicsByID} from '@/utils/api.js';
export default {
  data() {
    return {
      topic: {}
    }
  },
  created() {
    this.fetchData(this.$route.params.id)
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(to.params.id);
    next();
  },
  methods: {
    fetchData(id) {
      getTopicsByID(id).then(res => {
        this.topic = {
          ...res.data,
          ...res.data.author
        }
        // console.log(this.topic)
      })
    }
  },
  components: {
    Divider,
    UserPanel,
    OtherTopic,
    RecentReply,
    Reply
  }
};
</script>

<style lang="scss" scoped>
.topic {
  display: flex;
  margin-bottom: 100px;
  .left {
    width: 72%;
    float: left;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    .info {
      display: flex;
      align-items: center;
      color: #838383;
      font-size: 12px;
    }
  }
  .title {
    color: black;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 8px;
  }
  .content {
    line-height: 1.6;
    color: #333;
    margin-bottom: 50px;
    /deep/ img {
      width: 100%;
    }
  }
  .right {
    float: right;
    width: 25%;
    height: 100%;
    margin-left: 2%;
  }
}
.reply {
  width: 100%;
}
</style>
