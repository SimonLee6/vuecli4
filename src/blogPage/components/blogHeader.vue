<template>
  <transition name="fade">
    <header class="blog-header" v-if="showHead" :class="{ active: showHead }">
      <div class="b-head-autor">吧唧吧唧丿</div>
      <div class="b-head-tabs">
        <span
          class="head-tab"
          :class="{ tab_active: item.value === $route.name }"
          v-for="item in tabs"
          :key="item.value"
          @click="$router.push({ name: item.value })"
        >
          <i class="icon-tab"></i>
          <span>{{ item.name }}</span>
        </span>
      </div>
    </header>
  </transition>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    ...mapState(["tabs", "showHead"])
  },
  watch: {
    $route(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-header {
  // position: fixed;
  // top: 0;
  // z-index: 10;
  @include wh(100%, $blog-head-h);
  // @include bg-max($blog-head-bg);
  .b-head-autor {
    margin-left: 20px;
    float: left;
    @include font(20px, orange, bold);
    line-height: $blog-head-h;
    .icon-logo {
      @include wh(50px, 50px);
      border-radius: 50%;
      @include bg-max($blog-logo);
    }
  }
  .b-head-tabs {
    float: left;
    margin-left: 100px;
    line-height: $blog-head-h;
    @include font(17px, #fff, normal);
    .head-tab {
      position: relative;
      cursor: pointer;
      @include wh(100px, $blog-head-h);
      text-align: center;
      &:hover {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          @include wh(100%, 4px);
          background: orange;
        }
      }
    }
    .tab_active {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        @include wh(100%, 4px);
        background: orange;
      }
    }
  }
}
.active {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
}
.fade-enter,
.fade-leave-to {
  transition: head 0.5s linear;
}
@keyframes head {
  from {
    transform: translateY(-$blog-head-h);
  }
  to {
    transform: translateY($blog-head-h);
  }
}
</style>
