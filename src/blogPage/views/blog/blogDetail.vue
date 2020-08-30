<template>
  <div class="blog-detail">
    <blogPageTitle :titleInfo="blogDetail" />
    <div class="blog-content translateY-50">
      <vue-Markdown
        class="blog-markdown"
        v-highlight
        :source="content"
      ></vue-Markdown>
      <div class="blog-detail-footer">
        <i class="icon-end">END</i>
        <div class="blog-info">
          <el-row>
            <span class="info-title">版权归属:</span> {{ nickName }}
          </el-row>
          <el-row>
            <span class="info-title">发表时间:</span>
            {{ blogDetail.date | formatDate }}
          </el-row>
          <el-row>
            <span class="info-title">版权声明:</span>
            作品采用 知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议
            国际许可协议 进行许可
          </el-row>
        </div>
      </div>
      <div class="blog-detail-comments">
        <blogComments></blogComments>
      </div>
    </div>
  </div>
</template>

<script>
import vueMarkdown from "vue-markdown";
import Hljs from "highlight.js";
import { mapState } from "vuex";
export default {
  directives: {
    highlight(el) {
      const blocks = el.querySelectorAll("pre code")
      for (let i = 0; i < blocks.length; i++) {
        Hljs.highlightBlock(blocks[i]);
      }
    }
  },
  created() {},
  mounted() {
    // this.blogInfo = this.$route.params.blogInfo;
    this.content = this.blogInfo.content;
    this.$nextTick(() => {
      const blocks = document.querySelectorAll("pre code");
      // console.log(blocks);
      for (let i = 0; i < blocks.length; i++) {
        Hljs.highlightBlock(blocks[i]);
      }
    });
    this.initBlogDetail();
  },
  data() {
    return {
      blogDetail: {
        type: "detail",
        id: "",
        name: "vue.js进阶",
        date: "",
        readCount: 0,
        msgCount: 0,
        tags: [{ name: "Vue", value: "vue" }]
      },
      // blogInfo: {},
      content: ""
    };
  },
  computed: {
    ...mapState(["nickName", "blogList"]),
    blogInfo() {
      return this.blogList.find(ele => ele.id === this.$route.params.id);
    }
  },
  methods: {
    initBlogDetail() {
      this.blogDetail.id = this.$route.params.id;
      this.blogDetail.name = this.blogInfo.title;
      this.blogDetail.date = this.blogInfo.created_time;
    }
  },
  components: {
    vueMarkdown
  }
};
</script>
<style lang="scss" scoped>
.blog-detail {
  @include wh(100%, auto);

  .blog-content {
    margin: 0 auto;
    background: $blog-bg-color;
    @include wh(60%, auto);
    min-height: 700px;
    // box-shadow: ;
    .blog-markdown {
      padding: 50px;
      box-sizing: border-box;
      @include wh(100%, auto);
      /deep/ p {
        margin: 0;
        font-size: 15px;
      }
      /deep/ img {
        @include wh(100%, 500px);
      }
    }
    .blog-detail-footer {
      margin-top: 10px;
      @include wh(100%, auto);
      margin: 0 auto;
      // padding: 50px;
      .icon-end {
        @include wh(100%, 10px);
        line-height: 10px;
        text-align: center;
        margin-top: 20px;
        @include font(15px, #000, bold);
        &:before {
          text-align: center;
          float: left;
          content: "";
          @include wh(48%, 2px);
          border-bottom: 1px dotted #999;
        }
        &::after {
          float: right;
          text-align: center;
          content: "";
          @include wh(48%, 2px);
          border-bottom: 1px dotted #999;
        }
      }
      .blog-info {
        margin: 20px 0;
        background: #fcfff5;
        box-shadow: 0 0 0 0.5px #a3c293 inset, 0 0 0 0 transparent;
        @include wh(100%, 150px);
        padding: 20px;
        box-sizing: border-box;
        .el-row {
          line-height: 25px;
          @include font(14px, #2c662d, normal);
        }
        .info-title {
          @include font(15px, #2c662d, bold);
        }
      }
    }
    .blog-detail-comments {

    }
  }
}
</style>
