<template>
  <div class="goods-list">
    <goods-item v-for="item in goods" :goods-item="item" class="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from './GoodsItem'
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsItem
    }
  }
</script>

<style scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    /*padding: 5px;*/
    justify-content: space-evenly;
  }

  .goods-list .item {
    width: 48%;
  }
</style>
