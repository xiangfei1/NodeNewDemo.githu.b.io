<template>
  <div class="user">
    <UserPanel :loginname="loginname" />
    <OtherTopic :simple="false" />
    <RecentReply :simple="false" />
  </div>
</template>

<script>
import UserPanel from "@/components/UserPanel";
import OtherTopic from "@/components/OtherTopic";
import RecentReply from "@/components/RecentReply";
export default {
  data() {
    return {
      loginname: ""
    };
  },
  created() {
    this.loginname = this.$route.params.id;
  },
  beforeCreate(to, from, next) {
    this.loginname = to.params.id;
    next();
  },
  components: {
    UserPanel,
    OtherTopic,
    RecentReply
  }
};
</script>

<style lang="scss" scoped>
.user {
  margin: auto;
  width: 70%;
}
</style>
