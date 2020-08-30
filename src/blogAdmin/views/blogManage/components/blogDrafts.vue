<template>
  <div class="blog-drafts">
    <ul class="drafts-list">
      <li class="drafts-item">
        <div class="blog-title">无标题</div>
        <span class="blog-date">2020-12-12 12:00</span>
        <i class="el-icon-edit" title="编辑"></i>
        <i class="el-icon-delete" title="删除"></i>
      </li>
    </ul>
  </div>
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
.blog-drafts {
  @include wh(100%, 100%);
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  .drafts-list {
    @include wh(100%, 100%);
    .drafts-item {
      position: relative;
      @include wh(100%, 60px);
      padding-left: 10px;
      background: #fdfdfd;
      border: 1px solid rgba(0, 0, 0, 0.05);
      margin-bottom: 10px;
      &:before {
        position: absolute;
        content: "";
        left: 0;
        @include wh(4px, 100%);
        background: $admin-bg-color;
      }
      .blog-title {
        @include font(18px, #000, bold);
        margin: 5px 0;
      }
      .blog-date {
        margin-right: 20px;
        @include font(15px, #333, normal);
      }
      i {
        cursor: pointer;
        @include font(15px, #333, normal);
        margin-right: 10px;
      }
    }
  }
}
</style>