<template>
  <div class="blog-home">
    <div class="b-home-head">
      <div class="home-info">
        <i class="icon-avatar"></i>
        <p>Helo! 木子muzi丶</p>
        <div class="blog-contact">
          <span class="contact-item">
            <span v-for="item in contactList" :key="item.type">
              <i :class="`iconfont icon-${item.type}`"></i>
            </span>
          </span>
        </div>
        <div class="blog-tabs">
          <span
            class="blog-tab"
            v-for="tab in tabs"
            :key="tab.value"
            @click="$router.push(tab.value)"
          >
            <i :class="`iconfont icon-${tab.value}`"></i>{{ tab.name }}
          </span>
        </div>
        <p class="blog-text ali-font">你如星辰似海似万鲸成宇宙</p>
        <p class="blog-text1 ali-font">不要放弃,</p>
        <p class="blog-text1 ali-font">你要配的上自己的野心,</p>
        <p class="blog-text1 ali-font">也不要辜负了所受的苦难.</p>
      </div>
    </div>
    <div class="b-home-article">
      <div class="article-content">
        <div class="article-title">推荐</div>
        <div class="article-recommend">
          <div class="article-item" v-for="blog in blogList" :key="blog.id">
            <img :src="blog.cover_image" alt="logo" />
            <span class="blog-title">{{ blog.title }}</span>
          </div>
        </div>
        <div class="article-title">最新Blog</div>
        <div class="artical-recently">
          <blogList :blogList="blogList"></blogList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import blogList from "@blogComponents/blogList.vue";
export default {
  data() {
    return {
      data: "2222"
    };
  },
  mounted() {},
  methods: {},
  computed: {
    ...mapState(["tabs", "contactList", "blogList"])
  },
  components: {
    blogList
  }
};
</script>
<style lang="scss">
.blog-home {
  // z-index: 1;
  // position: absolute;
  // top: 0;
  @include wh(100%, auto);
  .b-home-head {
    position: relative;
    @include wh(100%, 1020px);
    @include bg-max($blog-head-bg);
    .home-info {
      text-align: center;
      @include center;
      top: 40%;
      @include font(50px, #fff, bold);
      .icon-avatar {
        @include wh(150px, 150px);
        @include bg-max($blog-avatar);
        border-radius: 50%;
      }
      .blog-text {
        @include font(40px, #fff, normal);
        margin-top: 20px;
      }
      .blog-text1 {
        @include font(30px, #fff, normal);
        margin-top: 20px;
      }
      .blog-contact {
        margin-bottom: 30px;
        padding: 0 150px;
        .contact-item {
          display: flex;
          justify-content: space-around;
          align-items: center;
          span {
            cursor: pointer;
            @include wh(30px, 30px);
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .iconfont {
          @include font(20px, #333, normal);
        }
      }
      .blog-tabs {
        @include font(20px, #fff, normal);
        .blog-tab {
          cursor: pointer;
          margin-right: 20px;
          @include wh(100px, 30px);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.3);
          @include font(18px, #eee, normal);
          line-height: 30px;
          .iconfont {
            @include font(20px, #fff, normal);
            margin-right: 5px;
            vertical-align: middle;
          }
          &:hover {
            color: #000;
            background: orange;
            .iconfont {
              color: #000;
            }
          }
        }
      }
    }
  }
  .ali-font {
    font-family: "webfont" !important;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  .b-home-article {
    // position: absolute;
    margin: 0 auto;
    // @include wh(800px, 900px);
    // background: rgba(255, 255, 255, 0.7);
    .article-content {
      z-index: 1;
      position: relative;
      margin: 20px auto;
      padding: 0 50px;
      box-sizing: border-box;
      @include wh(80%, auto);
      .article-title {
        margin: 0 auto;
        @include wh(500px, 50px);
        @include font(18px, #333, bold);
        text-align: center;
        line-height: 50px;
        background-color: rgba(255, 255, 255, 0.7);
      }
      .article-recommend {
        display: flex;
        justify-content: center;
        // flex-wrap: wrap;
        margin: 30px 0 80px 0;
        .article-item {
          position: relative;
          @include wh(25%, 100%);
          // background: rgba(255, 255, 255, 0.9);
          margin: 0 20px;
          img {
            @include wh(100%, 100%);
          }
          .blog-title {
            position: absolute;
            bottom: 3px;
            left: 0;
            @include wh(100%, 25%);
            @include font(15px, #fff, bold);
            line-height: 50px;
            padding: 0 10px;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
      }
      .artical-recently {
        width: 80%;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
