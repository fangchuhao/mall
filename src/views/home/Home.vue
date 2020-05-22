<template>
  <div id="home">
    <nav-bar class="navBar">
      <div slot="middle"><h3>首页</h3></div>
    </nav-bar>
    <tab-control :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControl2" class="fixed" v-show="isFixTabControl"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @loadMore="loadMore">
      <home-swiper :banner="banner"/>
      <home-recommend-vue :recommend="recommend"/>
      <feature-view/>
      <tab-control :titles="titles"
                   @tabClick="tabClick"
                   ref="tabControl"/>
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
  import BackTop from "components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendVue from "./childComps/HomeRecommendVue";
  import FeatureView from "./childComps/FeatureView";


  import {getMultiData,getHomeGoods} from "network/home";
  import {debounce} from "common/utils";

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
        contentY: 0,
        tabControlOffsetTop: 561
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      },
      isShowBackTop() {
        return this.contentY > 700
      },
      isFixTabControl() {
        return this.contentY > this.tabControlOffsetTop
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
    // activated() {
    //   this.$refs.scroll.scrollTo(0,this.contentY,0)
    //   this.$refs.scroll.refresh()
    // },
    // deactivated() {
    //   this.contentY=-this.$refs.scroll.scroll.y
    //   console.log(this.contentY)
    // },
    mounted() {
      const refresh=debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('goodsImgLoad',() => {
        refresh()
      })

      setTimeout(()=>{
        this.tabControlOffsetTop=this.$refs.tabControl.$el.offsetTop
        console.log(this.tabControlOffsetTop)
      },1000)
    },
    methods: {
      /*
      * 事件监听相关方法
      * */
      loadMore() {
        // this.getHomeGoods(this.currentType)
        this.$refs.scroll.finishPullUp()
        this.getHomeGoods2(this.currentType)
        console.log('加载更多')
      },
      tabClick(index) {
        // console.log(index)
        this.currentType=Object.keys(this.goods)[index]
        this.$refs.tabControl2.currentIndex=index
        this.$refs.tabControl.currentIndex=index
        // console.log(this.currentType)
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position) {
        this.contentY=-position.y
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
          // this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page+=1
          this.$refs.scroll.finishPullUp()
        })
      },
      getHomeGoods2(type) {
        const list1=[
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
        const list2=[
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
        const list3=[
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
        if(type=='news') {
          this.goods[type].list.push(...list1)
        }else if(type=='sells') {
          this.goods[type].list.push(...list2)
        }else {
          this.goods[type].list.push(...list3)
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

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .goodsList {
    padding-top: 5px;
  }
  .fixed {
    position: relative;
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    /*height: calc(100% - 49px);*/
    /*overflow: hidden;*/
    /*margin-top: 44px;*/
  }
  .backTop {
    position: fixed;
    bottom: 60px;
    right: 10px;
  }
</style>
