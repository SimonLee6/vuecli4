<template>
  <div id="app">
    <blog-header></blog-header>
    <div class="blog-content">
      <router-view />
    </div>
    <blogFooter></blogFooter>
  </div>
</template>
<script>
import blogHeader from "@blog/components/blogHeader";
import blogFooter from "@blog/components/blogFooter";
export default {
  created() {
    document.title = "木子muzi丶";
    this.$store.dispatch("getBlogList");
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    blogHeader,
    blogFooter
  }
};
</script>
<style lang="scss" scoped>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-width: 1280px;
  min-height: 1020px;
  font-size: 12px;
  // overflow-y: auto;
  .blog-content {
    @include wh(100%, auto);
    min-height: 900px;
  }
}
</style>
