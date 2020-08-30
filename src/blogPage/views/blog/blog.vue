<template>
  <div class="blog-list">
    <div class="blog-type-title">
      <blogPageTitle :titleInfo="titleInfo"></blogPageTitle>
    </div>
    <div class="blog-tags translateY-50">
      <i class="el-icon-collection-tag icon-tag"> 标签</i>
      <div class="tag-list">
        <el-tag class="blog-tag">vue</el-tag>
        <el-tag class="blog-tag">vue</el-tag>
      </div>
    </div>
    <div class="blog-list-wrap translateY-50">
      <blogList
        :itemStyle="itemStyle"
        @showBlogDetail="showBlogDetail"
        :blogList="blogList"
      >
      </blogList>
    </div>
  </div>
</template>
<script>
// import blogService from "@blogApi/blog.service";
import { mapState } from "vuex";
export default {
  data() {
    return {
      itemStyle: "border-radius: 0;border-bottom: 2px dotted #ddd",
      titleInfo: {
        type: "introduce",
        name: "文章",
        introduce: "青春终将散场，唯独记忆永垂不朽。"
      }
      // blogList: []
    };
  },
  mounted() {},
  methods: {
    showBlogDetail(id) {
      console.log(id);
      let find = this.blogList.find(ele => ele.id === id);
      this.$router.push({ name: "blogDetail", params: { id, blogInfo: find } });
    },
    // getBlogList() {
    //   blogService
    //     .getBlogList()
    //     .then(res => {
    //       console.log(res);
    //       this.blogList = res.data.data;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // }
  },
  computed: {
    ...mapState(["blogList"])
  }
};
</script>
<style lang="scss" scoped>
.blog-list {
  position: relative;
  @include wh(100%, auto);
  .blog-tags {
    @include wh(60%, 200px);
    background: $blog-bg-color;
    border-radius: 5px;
    padding: 20px;
    box-sizing: border-box;
    margin: 10px auto;
    .icon-tag {
      @include font(20px, #000, bold);
    }
    .tag-list {
      margin-top: 20px;
      .el-tag {
        cursor: pointer;
        margin: 10px;
        color: $blog-tag-color;
        border-color: $blog-tag-color;
        height: 30px;
      }
    }
  }
  .blog-list-wrap {
    @include wh(60%, auto);
    margin: 20px auto;
  }
}
</style>
