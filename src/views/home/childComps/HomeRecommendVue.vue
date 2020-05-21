<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommendVue",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 8px 0 10px;
    border-bottom: 8px solid darkgrey;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 60px;
    height: 60px;
    margin-bottom: 6px;
  }
</style>
