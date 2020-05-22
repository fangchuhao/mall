<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-param-info :param-info="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
  import {getDetail,Goods,Shop,GoodsParam} from "network/detail";
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import {debounce} from "../../common/utils";
  import DetailParamInfo from "./childComps/DetailParamInfo";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImage: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {}
      }
    },
    mounted() {
      const refresh=debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('imageLoad',() => {
        refresh()
      })
    },
    created() {
      this.iid=this.$route.params.iid
      console.log(this.iid);
      getDetail(this.iid).then(res=>{
        console.log(res);
        // const data=res.result
        // this.topImage=res.result.itemInfo.topImages
        // this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        // this.shop=new Shop(data.shopInfo)
        // this.detailInfo=data.detailInfo
        // this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

        this.topImage=[
          'https://s5.mogucdn.com/mlcdn/c45406/200430_8b44d12ehgh59fk22072lh0c8l3b0_3999x5999.jpg_640x960.v1cAC.70.webp','https://s11.mogucdn.com/mlcdn/c45406/200430_68lcc28jc0jlc464lh8b3c2fcb0h3_3999x5999.jpg_640x960.v1cAC.70.webp','https://s11.mogucdn.com/mlcdn/c45406/200430_5jb7h7333617jc6dbihkfjcjl977c_3999x5999.jpg_640x960.v1cAC.70.webp']
        const itemInfo={
          title: '白色短袖T恤女宽松韩2020夏新款女装卡通刺绣学院风纯棉上衣',
          desc:'新款上市~',
          discount:'活动价',
          price:'￥38.50',
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
      })
    },
    components: {
      DetailParamInfo,
      DetailGoodsInfo,
      Scroll,
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailNavBar
    },
    methods: {

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
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
