<template>
  <el-container class="blog-manage">
    <el-aside class="admin-aside" width="220px">
      <el-menu
        router
        default-active="/blogAdmin/blogM/addBlog"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>博客发表</span>
          </template>
        </el-submenu> -->
        <el-menu-item index="/blogAdmin/blogM/addBlog">
          <i class="el-icon-menu"></i>
          <span slot="title">博客发表</span>
        </el-menu-item>
        <el-menu-item index="/blogAdmin/blogM/blogDrafts">
          <i class="el-icon-menu"></i>
          <span slot="title">草稿箱</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  computed: {},

  methods: {},

  components: {}
};
</script>
<style lang="scss" scoped>
.blog-manage {
  @include wh(100%, 100%);
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }
}
</style>
