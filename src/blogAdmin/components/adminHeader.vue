<template>
  <el-header class="admin-header" height="70px">
    <el-row>
      <el-col :span="3" class="header-title">博客后台管理</el-col>
      <el-col :span="1" class="header-tab" v-for="tab in tabs" :key="tab.value">
        <span
          :class="{ active: new RegExp(tab.value).test($route.path) }"
          @click="routerLink(tab)"
        >
          {{ tab.tab }}
        </span>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { tab: "博客管理", value: "blogM", name: "blogManage" },
        { tab: "博客发表", value: "addBlod" }
      ]
    };
  },

  mounted() {
    console.log(this.$route)
  },

  computed: {},

  methods: {
    routerLink(tab) {
      this.$router.push({ path: `/blogAdmin/${tab.value}` });
    }
  },

  components: {}
};
</script>
<style lang="scss" scoped>
.admin-header {
  @include wh(100%, 70px);
  background: #fff;
  border-top: 3px solid $admin-bg-color;
  box-shadow: 0 0 2px $admin-bg-color;
  line-height: 70px;
  .header-title {
    @include font(25px, $admin-bg-color, bold);
  }
  .header-tab {
    cursor: pointer;
    text-align: center;
    @include font(18px, #757575, normal);
    &:hover,
    .active {
      @include font(18px, $admin-bg-color, bold);
    }
    margin-right: 10px;
  }
}
</style>
