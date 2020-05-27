<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @itemClick="scrollToItem" ref="detailNav"/>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="detailImageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="params"/>
      <detail-comment-info :comment-info="commentInfo" ref="comments"/>
      <goods-list :goods="recommends" ref="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top class="backTop" @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "network/detail";
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import {debounce} from "../../common/utils";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "../../components/content/goods/GoodsList";
  import {backToTop, itemListenerMixin} from "../../common/mixin";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImage: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeScrollY: [],
        getThemeScrollY: null,
        navCurrentIndex: 0,
      }
    },
    mixins: [itemListenerMixin,backToTop],
    mounted() {
      const refresh=debounce(this.$refs.scroll.refresh,500)
      this.itemListener= () => {
        refresh()
      }
      this.$bus.$on('goodsImgLoad',this.itemListener)
    },
    destroyed() {
      this.$bus.$off('goodsImgLoad',this.itemListener)
    },
    created() {
      this.iid=this.$route.params.iid
      console.log(this.iid);
      getDetail(this.iid).then(res=>{
        // console.log(res);
        // const data=res.result
        // this.topImage=res.result.itemInfo.topImages
        // this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // this.shop=new Shop(data.shopInfo)
        // this.detailInfo=data.detailInfo
        // this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        // if(data.rate.list) {
        //   this.commentInfo=data.rate.list[0]
        // }

        this.topImage=[
          'https://s5.mogucdn.com/mlcdn/c45406/200430_8b44d12ehgh59fk22072lh0c8l3b0_3999x5999.jpg_640x960.v1cAC.70.webp','https://s11.mogucdn.com/mlcdn/c45406/200430_68lcc28jc0jlc464lh8b3c2fcb0h3_3999x5999.jpg_640x960.v1cAC.70.webp','https://s11.mogucdn.com/mlcdn/c45406/200430_5jb7h7333617jc6dbihkfjcjl977c_3999x5999.jpg_640x960.v1cAC.70.webp']
        const itemInfo={
          title: '白色短袖T恤女宽松韩2020夏新款女装卡通刺绣学院风纯棉上衣',
          desc:'新款上市~',
          discount:'活动价',
          price:'￥38.50~69.00',
          oldPrice:'￥69.00',
          lowNowPrice:'￥38.50'
        }
        const columns=['销量 10442','收藏 616人']
        const services=[
          {icon:'https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp',name:'72小时发货'},
          {icon:'https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp',name:'7天无理由退货'},
          {name:'退货补运费'}]
        this.goods=new Goods(itemInfo,columns,services)

        const shopInfo={
          cfans: 17145,
          cGoods: 99,
          shopLogo: 'https://s11.mogucdn.com/mlcdn/c45406/180911_58c8gklj32b5b521059kjf558idkd_200x200.jpg_120x120.webp',
          name: '女神de衣橱',
          cSells: 57876,
          score: [
            {
              name: '描述相符',
              score: 4.64,
              isBetter: false
            },
            {
              name: '价格合理',
              score: 5,
              isBetter: true
            },
            {
              name: '质量满意',
              score: 4.62,
              isBetter: false
            }
          ]
        }
        this.shop=new Shop(shopInfo)

        const detailInfo={
          desc: '新款上市',
          detailImage: [
            {
              anchor: 'model_img',
              desc: '',
              key: '穿着效果',
              list: [
                'https://s11.mogucdn.com/mlcdn/c45406/200430_2l9h60e3adeiil95ajc803blh5if4_750x165.jpg_468x468.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200430_3hk52660256kghdiec07j7igiiele_750x904.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_8ak8ai4bib9jceichh11acijfcal7_750x2077.jpg_468x468.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200430_44djb43cdi55h4gjbhljdjgd6g7j3_750x750.jpg_468x468.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200430_039670kl9a5h5980cdk85i2b2kbcc_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_6gl5kj27e48d9cfeh4g14ke1bd6c8_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_1bf5c94ib249e5eb188lbd0ediaic_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_4aj8cji3d666fh4kb7ki744j8655e_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_79caai6bdeka1db185333fhhg8jb5_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_4kg4912g4d2g74c24be274ickeld3_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_1f9die54e62ci53llal8909f6d5ff_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_16iaaljjf0gf6l96b957echdlke7l_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_3e6fh6ke3i0k2f52ek375lilgb96a_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_7ffk5llaa0ib9j7jgf7acg2d8a9h5_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_7ffk5llaa0ib9j7jgf7acg2d8a9h5_750x750.jpg_468x468.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200430_0ff0bkg0jj76078810184fi1fglfk_750x750.jpg_468x468.webp',
                'https://s5.mogucdn.com/mlcdn/c45406/200430_2cldlj8dg60chfk5282f272i660ai_750x750.jpg_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c45406/200430_26ed58e4l2jk0k5gcd811efad0j2g_695x394.png_468x468.webp',
                'https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp'
              ],
            }
          ]
        }
        this.detailInfo=detailInfo

        const itemParams = {
          info: {
            anchor: 'product_info',
            key: '产品参数',
            set: [
              {
                key: '图案',
                value: '宫廷复古图/民族复古图，字母/文字/数字'
              },
              {
                key: '图案',
                value: '爱美丽服饰有限公司'
              },
              {
                key: '颜色',
                value: '黑白拼接'
              },
              {
                key: '袖型',
                value: '常规袖'
              },
              {
                key: '上衣厚度',
                value: '适中'
              },
              {
                key: '尺码',
                value: 'XL,L,M,XXL'
              },
              {
                key: '衣长',
                value: '常规款（51-65cm）'
              },
              {
                key: '版型',
                value: '宽松'
              },
              {
                key: '季节',
                value: '春秋'
              },
              {
                key: '厂址',
                value: '广东省揭阳市普宁市 池尾镇贵政山'
              },
              {
                key: '材质',
                value: '棉'
              },
              {
                key: '领型',
                value: '圆领'
              },
              {
                key: '元素',
                value: '面料拼接，平绣'
              },
              {
                key: '袖长',
                value: '长袖'
              },
              {
                key: '风格',
                value: '原宿'
              },
              {
                key: '潮流',
                value: '韩系'
              }
            ]
          },
          rule: {
            anchor: 'size_info',
            disclaimer: '※ 以上尺寸为实物人工测量,因测量当时不同会有1-2cm误差,相关数据仅作参考,以收到实物为准。 ※',
            key: '尺码说明',
            tables: [
              ['尺码','M','L','XL','XXL'],
              ['衣长','61.5','63','64.5','66'],
              ['胸围','98','104','110','116'],
              ['袖长','63','66','68.5','70.5']
            ]
          }
        }
        this.paramInfo=new GoodsParam(itemParams.info,itemParams.rule)

        const rate={
          list: {
            user: {
              avatar: 'https://s11.mogucdn.com/mlcdn/5abf39/180119_7il90gdi4424ij76ba40k943k2d77_466x466.jpg_48x48.webp',
              uname: '玫瑰玫瑰201810'
            },
            content: '弹力大穿起来比较舒服质量相对比较好跟商品描述一样闺蜜也入手了推荐这家店',
            created: 1590302554,
            style: ' 浅蓝 / L',
            images: [
              'https://s11.mogucdn.com/mlcdn/c45406/200514_4e5l7k3ajhl6efkj2hkfkh59fc3k3_480x640.jpg_200x200.v1cAC.40.webp',
              'https://s11.mogucdn.com/mlcdn/c45406/191223_404b5a57884aalej0h782f7hebh4g_599x640.jpg_200x200.v1cAC.40.webp',
              'https://s11.mogucdn.com/mlcdn/c45406/191223_66633b5c1g3h0i8748g7l23dih120_361x640.jpg',
              'https://s11.mogucdn.com/mlcdn/c45406/191223_1chgbbg70k2l0i8d682aei4ifk090_361x640.jpg'
            ]
          }
        }
        this.commentInfo=rate.list
      })
      getRecommend().then(res=> {
        console.log(res)
        // this.recommends=res.data.list
        const list=[
          // {
          //   afav: 10880,
          //   discount: 700,
          //   discountPrice: '59.90',
          //   image: 'https://s5.mogucdn.com/mlcdn/c45406/191026_6k7bi38gjd852246clh63chl43g19_640x960.jpg_320x999.webp',
          //   price: '85',
          //   title: '2020春秋季新款高腰牛仔裤女百搭显瘦紧身外穿小脚九分牛仔裤'
          // },
          {
            iid: '2',
            image: 'https://s11.mogucdn.com/mlcdn/c45406/200312_0kkal2hdf658h6jbh1kid1ik4kfea_640x960.jpg_320x999.webp',
            price: '79.9',
            title: '高腰牛仔裤女宽松2020年夏装浅色薄款显瘦显高老爹九分萝卜裤'
          },
          {
            iid: '3',
            image: 'https://s11.mogucdn.com/mlcdn/55cf19/200221_5b6ecj7i317le4hgd27h78a6k52dj_640x960.jpg_320x999.webp',
            price: '79',
            title: '2020欧洲站时尚春装新款印花蕾丝拼接打底衫宽松T恤女潮'
          },
          {
            iid: '4',
            image: 'https://s11.mogucdn.com/mlcdn/55cf19/200221_6a9l6d704j5ah2i0i16fci6c7fi7a_640x960.jpg_320x999.webp',
            price: '105',
            title: '牛仔马甲外套女宽松百搭BF复古无袖坎肩外穿背心上衣'
          },
          {
            iid: '5',
            image: 'https://s5.mogucdn.com/mlcdn/c45406/200423_7ehe2idl025jbl6aed6345gc399ll_3800x5700.jpg_320x999.webp',
            price: '74',
            title: '夏新款韩版时尚泫雅风洋气减龄遮肚仙女裙法式仙女雪纺连衣裙子女'
          },
          {
            iid: '6',
            image: 'https://s11.mogucdn.com/mlcdn/c45406/200312_0kkal2hdf658h6jbh1kid1ik4kfea_640x960.jpg_320x999.webp',
            price: '79.9',
            title: '高腰牛仔裤女宽松2020年夏装浅色薄款显瘦显高老爹九分萝卜裤'
          },
          {
            iid: '7',
            image: 'https://s11.mogucdn.com/mlcdn/55cf19/200221_5b6ecj7i317le4hgd27h78a6k52dj_640x960.jpg_320x999.webp',
            price: '79',
            title: '2020欧洲站时尚春装新款印花蕾丝拼接打底衫宽松T恤女潮'
          },
          {
            iid: '8',
            image: 'https://s11.mogucdn.com/mlcdn/55cf19/200221_6a9l6d704j5ah2i0i16fci6c7fi7a_640x960.jpg_320x999.webp',
            price: '105',
            title: '牛仔马甲外套女宽松百搭BF复古无袖坎肩外穿背心上衣'
          },
          {
            iid: '9',
            image: 'https://s5.mogucdn.com/mlcdn/c45406/200423_7ehe2idl025jbl6aed6345gc399ll_3800x5700.jpg_320x999.webp',
            price: '74',
            title: '夏新款韩版时尚泫雅风洋气减龄遮肚仙女裙法式仙女雪纺连衣裙子女'
          },
          {
            iid: '10',
            image: 'https://s11.mogucdn.com/mlcdn/c45406/200312_0kkal2hdf658h6jbh1kid1ik4kfea_640x960.jpg_320x999.webp',
            price: '79.9',
            title: '高腰牛仔裤女宽松2020年夏装浅色薄款显瘦显高老爹九分萝卜裤'
          },
          {
            iid: '11',
            image: 'https://s11.mogucdn.com/mlcdn/55cf19/200221_5b6ecj7i317le4hgd27h78a6k52dj_640x960.jpg_320x999.webp',
            price: '79',
            title: '2020欧洲站时尚春装新款印花蕾丝拼接打底衫宽松T恤女潮'
          },
          {
            iid: '12',
            image: 'https://s11.mogucdn.com/mlcdn/55cf19/200221_6a9l6d704j5ah2i0i16fci6c7fi7a_640x960.jpg_320x999.webp',
            price: '105',
            title: '牛仔马甲外套女宽松百搭BF复古无袖坎肩外穿背心上衣'
          },
          {
            iid: '13',
            image: 'https://s5.mogucdn.com/mlcdn/c45406/200423_7ehe2idl025jbl6aed6345gc399ll_3800x5700.jpg_320x999.webp',
            price: '74',
            title: '夏新款韩版时尚泫雅风洋气减龄遮肚仙女裙法式仙女雪纺连衣裙子女'
          }
        ]
        this.recommends=list
      })
      // this.$bus.$on('imageLoad',()=> {
      //   this.newRefresh()
      // })
      this.getThemeScrollY=debounce(()=>{
        this.themeScrollY.push(0)
        this.themeScrollY.push(this.$refs.params.$el.offsetTop)
        this.themeScrollY.push(this.$refs.comments.$el.offsetTop)
        this.themeScrollY.push(this.$refs.recommends.$el.offsetTop)
        this.themeScrollY.push(Number.MAX_VALUE)
      })
    },
    components: {
      DetailBottomBar,
      GoodsList,
      DetailCommentInfo,
      DetailParamInfo,
      DetailGoodsInfo,
      Scroll,
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailNavBar
    },
    methods: {
      ...mapActions(['addCart']),
      detailImageLoad() {
        this.newRefresh()
        this.getThemeScrollY()
      },
      scrollToItem(index) {
        this.$refs.scroll.scrollTo(0,-this.themeScrollY[index],1000)
      },
      contentScroll(position) {
        const positionY=-position.y;
        this.contentY=positionY;
        const length=this.themeScrollY.length-1
        const tempThemeScrollY=this.themeScrollY
        for(let i=0;i<length;i++) {
          // 1.普通做法
          // if(this.navCurrentIndex!=i && (i<length-1 &&
          //   positionY>=tempThemeScrollY[i] && positionY<tempThemeScrollY[i+1])
          //   || (i===length-1 && positionY>=tempThemeScrollY[i])) {
          //   console.log(i)
          //   this.navCurrentIndex=i
          //   this.$refs.detailNav.currentIndex=i
          // }
          // 2.hack做法
          // 给 this.themeScrollY 添加多一个值 值是Number.MAX_VALUE
          if(this.navCurrentIndex!=i &&
            (positionY>=tempThemeScrollY[i] && positionY<tempThemeScrollY[i+1])) {
            console.log(i)
            this.navCurrentIndex=i
            this.$refs.detailNav.currentIndex=i
          }
        }
      },
      addToCart() {
        const product={}

        product.title=this.goods.title
        product.image=this.topImage[0]
        product.desc=this.goods.desc
        product.price=this.goods.realPrice
        product.iid=this.iid
        // 如何将数据发送到购物车，这里用到Vuex
        // this.$store.dispatch('addCart',product)
        this.addCart(product).then(res=>{
          this.$toast.show(res,1000)
        })
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*overflow: hidden;*/
    height: calc(100% - 102px);
    background-color: #fff;
  }

</style>
