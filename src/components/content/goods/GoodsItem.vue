<template>
  <div class="goods-item" @click="toGoodsDetail">
    <img :src="goodsItem.image" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.love}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imageLoad() {
        // if(this.$route.path.indexOf('/home')) {
        //   this.$bus.$emit('goodsImgLoad')
        // }else if(this.$route.path.indexOf('/detail')) {
        //   this.$bus.$emit('detailGoodsImgLoad')
        // }
        this.$bus.$emit('goodsImgLoad')
      },
      toGoodsDetail() {
        this.$router.push('/detail/'+'这是一个id',() => {}, (e) => {
          console.log('输出报错',e)
        })
        // this.$router.push('/detail/'+this.goodsItem.iid)
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
