<template>
  <div id="blog-admin">
    <admin-header></admin-header>
    <div class="blog-content">
      <router-view />
    </div>
    <!-- <blogFooter></blogFooter> -->
  </div>
</template>
<script>
import adminHeader from "@adminComponents/adminHeader.vue";
export default {
  created() {},
  components: {
    // eslint-disable-next-line vue/no-unused-components
    adminHeader
    // blogFooter
  }
};
</script>
<style lang="scss">
#blog-admin {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  min-width: 1280px;
  // min-height: 1020px;
  font-size: 12px;
  // overflow-y: auto;
  // height: 100%;
  height: 100vh;
  overflow-y: hidden;
  .blog-content {
    @include wh(100%, calc(100vh - 70px));
    min-height: 700px;
    overflow-y: auto;
  }
}
</style>
