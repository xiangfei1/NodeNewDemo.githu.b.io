<template>
  <div class="panel">
    <header>最近参加的话题</header>
    <Divider class="divider" />
    <template v-for="(item, key) in user.recent_replies">
      <div :id="item.id">
        <router-link v-if="simple" :to="'/topic/' + item.id">
          {{ item.title }}
        </router-link>
        <div v-else>
          <div class="main">
            <div>
              <router-link class="avatar" to="#">
                <img :src="item.author.avatar_url" alt="#" />
              </router-link>
              <router-link key="{item.id}" :to="'/topic/' + item.id">
                {{ item.title }}
              </router-link>
            </div>
            <span class="time">
              {{ item.last_reply_at | dateFormat("YYYY-MM-DD") }}
            </span>
          </div>
          <Divider class="inside-divider" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Divider from "@/components/Divider.vue";
import eventProxy from "@/utils/eventProxy.js";
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    this.isUnmounted = false;
    eventProxy.on("user", data => {
      if (!this.isUnmounted) {
        this.user = data;
        // console.log(this.user);
      }
    });
  },
  destroyed() {
    this.isUnmounted = true;
  },
  components: {
    Divider
  },
  props: {
    simple: {
      default: true,
      type: Boolean
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  header {
    color: black;
    font-weight: bold;
  }
  > div {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
    .avatar {
      margin-left: 10px;
    }
    .time {
      float: right;
      color: #777;
      font-size: 11px;
    }
    .inside-divider {
      margin: 10px 0;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin-right: 5px;
  }
  .divider {
    margin: 12px 0;
  }
}
</style>
