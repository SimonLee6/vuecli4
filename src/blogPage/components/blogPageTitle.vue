<template>
  <div class="blog-page-title">
    <img src="../../assets/img/title-blog.jpg" alt="blog" />
    <div class="blog-type-content">
      <p class="type-name">{{ titleInfo.name }}</p>
      <span class="type-introduce" v-if="titleInfo.type === 'introduce'">
        {{ titleInfo.introduce }}
      </span>
      <div v-else class="blog-detail-title">
        <i class="el-icon-date"> {{ titleInfo.date | formatDate }}</i>
        <i class="el-icon-view"> {{ titleInfo.readCount }}</i>
        <i class="el-icon-chat-dot-square"> {{ titleInfo.msgCount }}</i>
        <span class="blog-item-tag">
          <el-tag
            class="blog-tag"
            v-for="tag in titleInfo.tags"
            :key="tag.value"
          >
            {{ tag.name }}
          </el-tag>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titleInfo: {
      type: Object,
      default() {
        return {
          type: "introduce",
          name: "Icon Man",
          introduce: "青春终将散场，唯独记忆永垂不朽。",
          date: "2020-06-21 16:00",
          readCount: 0,
          msgCount: 0,
          tags: [{ name: "Vue", value: "vue" }]
        };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-page-title {
  position: relative;
  @include wh(100%, 400px);
  img {
    display: inline-block;
    @include wh(100%, 100%);
    background: transparent;
  }
  .blog-type-content {
    position: absolute;
    top: 0;
    @include wh(100%, 100%);
    background: rgba(0, 0, 0, 0.6);
    text-align: center;
    @include font(25px, #fff, bold);
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    p {
      width: 100%;
      @include font(60px, rgba(255, 255, 255, 0.9), normal);
      font-family: "titleFont";
      transform: translateY(-10px);
    }
    .type-introduce {
      font-family: "introduceFont";
      @include font(30px, rgba(255, 255, 255, 0.7), normal);
    }
    .blog-detail-title {
      @include font(17px, rgba(255, 255, 255, 0.6), normal);
      i {
        margin: 0 10px;
      }
      .blog-item-tag {
        display: block;
        margin-top: 10px;
      }
    }
  }
}
</style>
