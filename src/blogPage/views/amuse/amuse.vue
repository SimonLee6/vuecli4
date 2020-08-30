<template>
  <div class="blog-amuse">
    <div class="blog-title-img amuse-img"></div>
  </div>
</template>
<script>
export default {
  name: "Amuse",
  mounted() {}
};
</script>
<style lang="scss">
.blog-amuse {
  position: absolute;
  top: 0;
  @include wh(100%, 500px);
  // padding-top: $blog-head-h;
  .amuse-img {
    // @include bg-max($title-amuse);
    background: url("../../../assets/img/title-amuse.jpg");
  }
}
</style>
