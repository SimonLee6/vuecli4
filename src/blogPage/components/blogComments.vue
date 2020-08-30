<template>
  <div class="blog-comments">
    <p class="comments-title">评论</p>
    <div class="commments-input">
      <el-input
        type="textarea"
        :rows="7"
        placeholder="请输入评论"
        v-model="comments.text"
      >
      </el-input>
      <div class="row-input">
        <el-input placeholder="昵称*" v-model="comments.nickname"></el-input>
        <el-input placeholder="邮箱*" v-model="comments.email"></el-input>
        <el-input placeholder="网站" v-model="comments.net"></el-input>
      </div>
      <div class="row-btn">
        <el-button type="primary">提交</el-button>
      </div>
    </div>
    <ul class="comments-list">
      <li class="comments-item">
        <div class="comments1">
          <img
            class="comments-avatar"
            src="../../assets/img/icon-avatar.jpg"
            alt="logo"
          />
          <div class="comments1-content">
            <h3 class="comments-nickname">
              nickname
              <span class="comments-time">1分钟前</span>
            </h3>
            <section>内容哒哒哒哒哒</section>
            <span class="comments-reply" @click="replyComments()">回复</span>
          </div>
        </div>
        <div class="comments2">
          <img
            class="comments-avatar"
            src="../../assets/img/icon-avatar.jpg"
            alt="logo"
          />
          <div class="comments1-content">
            <h3 class="comments-nickname">
              nickname
              <span class="reply-name">@nick</span>
              <span class="comments-time">1分钟前</span>
            </h3>
            <section>内容哒哒哒哒哒</section>
            <span class="comments-reply" @click="replyComments()">回复</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: {
        text: "",
        nickname: "",
        email: "",
        net: ""
      }
    };
  },

  mounted() {},

  computed: {},

  methods: {
    replyComments() {}
  },

  components: {}
};
</script>
<style lang="scss" scoped>
.blog-comments {
  @include wh(100%, auto);
  padding: 20px 30px 50px 30px;
  box-sizing: border-box;
  .comments-title {
    position: relative;
    @include font(20px, #000, bold);
    &:before {
      position: absolute;
      left: -10px;
      content: "";
      @include wh(5px, 25px);
      background: $blog-tag-color;
    }
  }
  .commments-input {
    @include wh(100%, auto);
    .row-input {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      .el-input {
        @include wh(30%, 40px);
      }
    }
    .row-btn {
      text-align: right;
    }
  }
  .comments-list {
    @include wh(100%, auto);
    .comments-item {
      .comments-avatar {
        border: 2px solid #dddddd;
        @include wh(30px, 30px);
        border-radius: 50%;
      }
      .comments1 {
        display: flex;
        .comments1-content {
          margin-left: 10px;
        }
      }
      .comments2 {
        display: flex;
        @include wh(auto, auto);
        box-sizing: border-box;
        margin-left: 25px;
        padding: 10px 20px;
        background: rgba(0, 0, 0, 0.1);
        .comments1-content {
          margin-left: 10px;
        }
      }
      .comments-time {
        @include font(15px, #666666, normal);
        margin: 0 10px;
      }
      .comments-nickname {
        margin-top: 5px;
        .reply-name {
          color: $blog-tag-color;
        }
      }
      .comments-content {
        margin: 10px;
        font-weight: normal;
      }
      .comments-reply {
        cursor: pointer;
        margin: 5px 0;
      }
    }
  }
  /deep/ .el-input__inner,
  /deep/ .el-textarea__inner {
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    background: transparent;
    &:focus {
      border-color: $blog-tag-color;
    }
    &::placeholder {
      color: #999999;
    }
  }
}
</style>
