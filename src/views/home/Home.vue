<template>
  <div>
    <nav-bar class="navBar">
      <div slot="middle"><h3>首页</h3></div>
    </nav-bar>
    <home-swiper :banner="banner"/>
    <home-recommend-vue :recommend="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendVue from "./childComps/HomeRecommendVue";

  import {getMultiData} from "network/home";


  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendVue
    },
    created() {
      getMultiData().then(res=>{
        console.log(res)
        this.banner=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .navBar {
    background-color: pink;
    color: white;
  }
</style>
