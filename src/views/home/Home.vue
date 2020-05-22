<template>
  <div id="home">
    <nav-bar class="navBar">
      <div slot="middle"><h3>首页</h3></div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banner="banner"/>
      <home-recommend-vue :recommend="recommend"/>
      <feature-view/>
      <tab-control :titles="titles" class="tabController" @tabClick="tabClick"/>
      <goods-list :goods="showGoods" class="goodsList"/>
    </scroll>
    <back-top class="backTop" @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendVue from "./childComps/HomeRecommendVue";
  import FeatureView from "./childComps/FeatureView";
  import BackTop from "components/content/backTop/BackTop";

  import {getMultiData,getHomeGoods} from "network/home";


  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommend: [],
        titles: ['流行','新款','精选'],
        goods: {
          pops: {page: 0, list: []},
          'news': {page: 0, list: []},
          'sells': {page: 0, list: []}
        },
        currentType: 'pops',
        contentY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },
      isShowBackTop() {
        return this.contentY>700
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,

      HomeSwiper,
      HomeRecommendVue,
      FeatureView
    },
    created() {
      this.getMultiData(),
      // this.getHomeGoods('pops'),
      // this.getHomeGoods('news'),
      // this.getHomeGoods('sells'),
      this.getHomeGoods2('pops')
      this.getHomeGoods2('news')
      this.getHomeGoods2('sells')
    },
    methods: {
      /*
      * 事件监听相关方法
      * */
      tabClick(index) {
        // console.log(index)
        this.currentType=Object.keys(this.goods)[index]
        // console.log(this.currentType)
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position) {
        this.contentY=-position.y
      },
      loadMore() {
        console.log('加载更多')
        this.$refs.scroll.finishPullUp()
        // getHomeGoods(this.currentType)
      },
      /*
      * 网络请求相关方法
      * */
      getMultiData() {
        getMultiData().then(res=>{
          console.log(res)
          this.banner=res.data.banner.list
          this.recommend=res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page= this.goods[type].page
        getHomeGoods(type,page).then(res=> {
          console.log(res)
          // this.goods[type].list.push(...this.goods[type].list,...res.data.data.list)
          this.goods[type].page+=1
        })
        this.scroll.refresh()
      },
      getHomeGoods2(type) {
        if(type=='news') {
          this.goods[type].list=[
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/200521_25cjk6bfbaj896aj93dc7e4g563jl_1080x1906.jpg_600x999.v1c96.81.webp',
              love: 124
            }
          ]
        }else if(type=='sells') {
          this.goods[type].list=[
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            }
          ]
        }else {
          this.goods[type].list=[
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s11.mogucdn.com/mlcdn/c45406/191128_57bc62kjjg7764bf3b5ehhi77730d_1080x1618.jpg_600x999.v1c96.81.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            },
            {
              title: '初恋桃花粉穿搭',
              price: 345.6,
              image: 'https://s5.mogucdn.com/mlcdn/c45406/190507_878cbai7h1c4affk65l3dig1715h9_640x960.jpg_640x854.v1cAC.40.webp',
              love: 124
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
  }
  .navBar {
    background-color: pink;
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tabController {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .goodsList {
    padding-top: 5px;
  }
  .content {
    height: calc(100% - 49px);
    overflow: hidden;
    margin-top: 44px;
  }
  .backTop {
    position: fixed;
    bottom: 60px;
    right: 10px;
  }
</style>
