<template>
  <div>
    <swiper class="lunbo">
      <swiper-item v-for="item in topImage" class="lunbo-item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    props: {
      topImage: {
        type: Array,
        default: []
      }
    },
    components: {
      Swiper,SwiperItem
    }
  }
</script>

<style scoped>
  .lunbo {
    height: 300px;
    overflow: hidden;
    text-align: center;
  }
  .lunbo img {
    width: 70%;
  }
</style>
