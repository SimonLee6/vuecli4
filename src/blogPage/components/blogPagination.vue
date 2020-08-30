<template>
  <div class="blog-pagination">
    <el-pagination background layout="prev, pager, next" :total="10">
    </el-pagination>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.blog-pagination {
  @include wh(100%, 40px);
  background: $blog-bg-color;
}
</style>
