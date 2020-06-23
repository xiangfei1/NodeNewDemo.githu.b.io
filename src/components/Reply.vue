<template>
  <div class="reply">
    <div>
      <span>{{ data.length }}</span> &nbsp;回复
    </div>
    <div v-for="(item,index) in data" :key="item.id">
      <router-link :to="'/user/'+item.author.loginname">
        <img
          :src="item.author.avatar_url"
          alt="头像"
          style="outline: red dashed 1px;"
        />
      </router-link>
      <div>
        <div class="info">
          <p>
            <span>{{index+1}}楼 </span>
            <router-link to="/">
              {{ item.loginname }}
            </router-link>
            <span>{{item.create_at | dateFormat('YYYY-MM-DD')}}</span>
          </p>
          <span class="thumbs">
            <img v-if="item.ups.length" src="@/assets/image/thumbs-up.svg" alt="点赞" />
            {{item.ups.length >0 ? item.ups.length: ''}}
          </span>
        </div>
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.data);
  },
  props: {
    data: {
      type: Array,
      default: function() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.reply {
  width: 100%;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 15px;
  }
  > div {
    display: flex;
    border: 1px solid #ebedf0;
    border-bottom-width: 0;
    padding: 10px 20px;
    color: rgba(0, 0, 0, 0.65);
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .thumbs {
          font-size: 15px;
          display: flex;
          align-items: center;
          img {
            width: 12px;
            height: 12px;
            margin-right: 5px;
            transform: rotate(-15deg);
          }
        }
      }
      p {
        margin: 0;
        width: 100%;
      }
    }
  }
  > div:first-child {
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
  }
}
</style>
