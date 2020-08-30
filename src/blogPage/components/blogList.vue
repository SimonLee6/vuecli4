<template>
  <ul class="blog-list" @click.stop="showBlogDetail">
    <li
      class="blog-item"
      :style="itemStyle"
      :data-id="blog.id"
      v-for="blog in blogList"
      :key="blog.id"
    >
      <div class="blog-item-left">
        <p class="blog-item-title">{{ blog.title }}</p>
        <div class="blog-item-introduce">
          Vue 全称为 Vue.js，是一个构建数据驱动的 web
          界面的渐进式框架，此框架是开源世界华人的骄傲，因为它的作者是位中国人–尤雨溪（Evan
          You）
        </div>
        <div class="blog-item-info">
          <i class="el-icon-date"></i>
          <span>2020-06-21 16:00</span>
          <i class="el-icon-view"></i>
          <span>0</span>
          <i class="el-icon-chat-dot-square"></i>
          <span>20</span>
          <span class="blog-item-tag">
            <el-tag class="blog-tag">vue</el-tag>
          </span>
        </div>
      </div>
      <div class="blog-item-right">
        <img :src="blog.cover_image" alt="logo" />
      </div>
    </li>
    <!-- <li class="blog-item" :style="itemStyle">
      <div class="blog-item-left">
        <p class="blog-item-title">基于Vue的自定义指令用法</p>
        <div class="blog-item-introduce">
          Vue 全称为 Vue.js，是一个构建数据驱动的 web
          界面的渐进式框架，此框架是开源世界华人的骄傲，因为它的作者是位中国人–尤雨溪（Evan
          You）
        </div>
        <div class="blog-item-info">
          <i class="el-icon-date"></i>
          <span>2020-06-21 16:00</span>
          <i class="el-icon-view"></i>
          <span>0</span>
          <i class="el-icon-chat-dot-square"></i>
          <span>20</span>
          <span class="blog-item-tag">
            <el-tag class="blog-tag">vue</el-tag>
          </span>
        </div>
      </div>
      <div class="blog-item-right">
        <img src="../../assets/img/blog27.jpg" alt="logo" />
      </div>
    </li> -->
    <li class="blog-pagination">
      <el-pagination background layout="prev, pager, next" :total="10">
      </el-pagination>
    </li>
  </ul>
</template>
<script>
import Util from "@util/util";
export default {
  props: {
    itemStyle: {
      type: String,
      default: "margin-bottom: 20px;border-radius: 5px;"
    },
    blogList: {
      type: Array
    }
  },
  methods: {
    showBlogDetail(e) {
      console.log(e);
      let eventPath = Util.eventPath(e);
      console.log(eventPath);
      let id = Array.from(eventPath)
        .find(ele => ele.className === "blog-item")
        .getAttribute("data-id");
      this.$emit("showBlogDetail", id);
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @include wh(100%, auto);
  .blog-item {
    display: flex;
    @include wh(100%, 300px);
    background: $blog-bg-color;
    padding: 20px;
    box-sizing: border-box;
    .blog-item-left {
      cursor: pointer;
      @include wh(65%, 100%);
      margin-right: 20px;
      .blog-item-title {
        margin: 10px 0;
        @include font(22px, #000, bold);
      }
      .blog-item-introduce {
        @include wh(100%, 50%);
        @include font(16px, rgba(0, 0, 0, 0.9), 500);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        overflow: hidden;
        text-overflow: hidden;
        margin: 20px 0;
        line-height: 25px;
      }
      .blog-item-info {
        @include wh(100%, 30px);
        @include font(15px, rgba(0, 0, 0, 0.5), 500);
        i {
          margin: 0 5px 0 10px;
        }
        i:first-child {
          margin-left: 0;
        }
        .blog-item-tag {
          float: right;
        }
      }
    }
    .blog-item-right {
      @include wh(35%, 100%);
      padding: 20px;
      box-sizing: border-box;
      z-index: 10;
      img {
        border-radius: 5px;
        @include wh(100%, 100%);
      }
    }
  }
  .blog-pagination {
    @include wh(100%, 50px);
    background: $blog-bg-color;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .el-pagination {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
