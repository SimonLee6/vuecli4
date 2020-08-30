<template>
  <div class="blog-add">
    <div class="blog-add-info">
      <el-input
        class="blog-title1"
        placeholder="输入文章标题"
        v-model="blog.title"
      ></el-input>
      <!-- <el-input class="blog-title2" placeholder="输入文章介绍"></el-input> -->
      <span class="add-btn">
        <el-button @click="addDrafts">草稿</el-button>
        <el-popover
          popper-class="add-blog-pic"
          placement="bottom-end"
          offset="10"
          width="240"
          trigger="click"
        >
          <div class="pic-info">
            <p class="add-title">添加封面大图</p>
            <div class="pic-wrap">
              <i class="el-icon-delete" v-if="uploadImg.hasPic"></i>
              <!-- <span class="pic-mask" @click="addBlogPic">
                <span>点击此处添加图片</span>
              </span> -->
              <el-upload
                class="pic-mask"
                action="/api/saveFile?type=image"
                accept="image"
                :show-file-list="false"
                :on-success="handleSuccess"
                :on-progress="handleProgress"
                v-loading="uploadImg.loading"
                element-loading-text="上传图片中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
              >
                <img
                  v-if="uploadImg.hasPic"
                  :src="uploadImg.imageUrl"
                  class="blog-pic"
                />
                <!-- <i v-else class="el-icon-plus avatar-uploader-icon"></i> -->
                <span v-else>点击此处添加图片</span>
              </el-upload>
            </div>
          </div>
          <i
            slot="reference"
            class="el-icon-picture add-pic"
            :class="{
              'add-pic-active': uploadImg.hasPic
            }"
          >
          </i>
        </el-popover>
        <el-popover
          popper-class="add-blog-popover"
          placement="bottom-start"
          width="500"
          trigger="click"
        >
          <div class="other-info">
            <p>添加文章介绍</p>
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入介绍"
              v-model="blog.introduce"
            >
            </el-input>
            <p class="add-title">添加标签</p>
            <el-button
              v-if="!showTag"
              size="mini"
              plain
              type="primary"
              icon="el-icon-plus"
              @click="addBlogTag"
            >
              添加标签
            </el-button>
            <el-select
              v-if="showTag"
              v-model="blog.tag"
              multiple
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading"
            >
              <el-option
                v-for="item in tagsOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <footer>
              <el-button class="btn-default" @click="addBlog"
                >确定并发布</el-button
              >
            </footer>
          </div>
          <el-button slot="reference" class="btn-text">
            发布<i class="el-icon-caret-bottom el-icon--right"></i>
          </el-button>
        </el-popover>
      </span>
    </div>
    <mavon-editor
      ref="md"
      :ishljs="true"
      :externalLink="false"
      v-model="blog.content"
      @imgAdd="$imgAdd"
    ></mavon-editor>
    <!-- <vue-Markdown v-highlight :source="markDown"></vue-Markdown> -->
  </div>
</template>

<script>
import axios from "axios";
// import vueMarkdown from "vue-markdown";
import Hljs from "highlight.js";
import blogManageService from "../service/blogManage.service";
import { Validator } from "@/plugins/validator/validator";
export default {
  directives: {
    highlight(el) {
      const blocks = el.querySelectorAll("pre code");
      for (let i = 0; i < blocks.length; i++) {
        Hljs.highlightBlock(blocks[i]);
      }
    }
  },
  data() {
    return {
      md: "",
      showTag: false,
      loading: false,
      tagsOption: [],
      uploadImg: {
        hasPic: false,
        imageUrl: "1212121",
        loading: ""
      },
      blog: {
        title: "",
        content: "",
        cover_image: "",
        tag: "",
        introduce: ""
      }
    };
  },
  mounted() {
    // axios.get("/api/user");
  },
  methods: {
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData();
      formdata.append("file", $file);
      axios({
        url: "/api/saveFile?type=image",
        method: "post",
        data: formdata,
        headers: { "Content-Type": "multipart/form-data" }
      }).then(res => {
        // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)

        console.log(res);
        this.$refs.md.$img2Url(pos, res.data.urls);
      });
    },
    // beforeUpload() {

    // },
    handleProgress() {
      this.uploadImg.loading = true;
    },
    handleSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      this.uploadImg.loading = false;
      if (response.code === 200) {
        this.uploadImg.imageUrl = response.urls;
        this.uploadImg.hasPic = true;
      } else {
        this.uploadImg.hasPic = false;
        this.$message.error("上传失败");
      }
    },
    validateFunc() {
      let validate = new Validator();
      // title: "",
      // content: "",
      // cover_image: "",
      // tag: "",
      // introduce: ""
      validate.add(this.blog.title, [
        { strategies: "isNotEmpty", errMsg: "博客标题未添加" }
      ]);
      validate.add(this.blog.content, [
        { strategies: "isNotEmpty", errMsg: "博客内容未添加" }
      ]);
      validate.add(this.blog.cover_image, [
        { strategies: "isNotEmpty", errMsg: "博客封面图片未添加" }
      ]);
      validate.add(this.blog.tag, [
        { strategies: "isNotEmpty", errMsg: "博客标签未添加" }
      ]);
      let errMsg = validate.start();
      if (errMsg) {
        this.$message.warning(errMsg);
        return false;
      }
      return true;
    },
    addBlog() {
      if (!this.validateFunc()) {
        return;
      }
      this.blog.cover_image = this.uploadImg.imageUrl;
      blogManageService
        .addBlog(this.blog)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.$message.success("添加成功");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error("添加失败");
        });
    },
    addDrafts() {},
    addBlogTag() {
      this.showTag = true;
    },
    remoteMethod() {}
  },
  computed: {},
  components: {
    // vueMarkdown
  }
};
</script>
<style lang="scss" scoped>
.blog-add {
  @include wh(100%, 100%);
  .blog-add-info {
    @include wh(100%, 50px);
    margin-bottom: 10px;
    .blog-title1 {
      width: 600px;
      margin-right: 20px;
    }
    .blog-title2 {
      width: 700px;
    }
    .add-btn {
      float: right;
      margin-right: 10px;
      .el-button {
        background: none;
        &:hover {
          background: none;
        }
      }
      .btn-text {
        font-size: 20px;
        color: $admin-bg-color;
        border: 0;
        &:hover {
          background: none;
        }
        i {
          @include font(20px, $admin-bg-color, bold);
        }
      }
    }
    .add-pic {
      font-size: 35px;
      margin: 0 20px 0 50px;
      vertical-align: middle;
    }
    .add-pic-active {
      color: $admin-bg-color;
    }
  }
  .markdown-body {
    @include wh(100%, calc(100% - 50px));
    overflow: hidden;
    /deep/ .hljs {
      background: rgba(0, 0, 0, 0.8);
    }
    /deep/ .content-input-wrapper {
      box-sizing: border-box;
      padding: 20px;
    }
  }
}
</style>