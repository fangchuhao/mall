<template>
  <div class="buttom-bar">
    <div class="select-content">
      <check-button class="select-all" :is-checked="isSelectAll" @click.native="selectAllClick"/>
      <span>全选</span>
    </div>

    <div class="price">
      <span>总计:{{totalPrice}}</span>
    </div>

    <div class="calculate" @click="calClick">
      去计算:({{selectCartLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartButtomBar",
    components: {CheckButton},
    computed: {
      ...mapGetters({
        'cartList': 'getCartList'
      }),
      totalPrice() {
        return this.cartList.filter(item=>{
          return item.isChecked
        }).reduce((total,item)=>{
          return '￥'+(total+parseFloat(item.price.substr(1))*item.count).toFixed(2)
        },0)
      },
      selectCartLength() {
        return this.cartList.filter(item=>{
          return item.isChecked
        }).length
      },
      isSelectAll() {
        return this.cartList.length!=0 && this.selectCartLength==this.cartList.length
      }
    },
    methods: {
      selectAllClick() {
        if(this.isSelectAll) {
          this.cartList.forEach(item=>item.isChecked=false)
        }else {
          this.cartList.forEach(item=>item.isChecked=true)
        }
        // this.cartList.forEach(item=>item.isChecked=!this.isSelectAll)
      },
      calClick() {
        if(this.selectCartLength==0) {
          this.$toast.show('请选择商品')
        }
      }
    }
  }
</script>

<style scoped>
  .buttom-bar {
    width: 100%;
    height: 30px;
    font-size: 16px;
    background-color: white;
    display: flex;
    line-height: 30px;
  }
  .select-content {
    display: flex;
    width: 90px;
  }
  .select-all {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 5px 5px 3px;
  }
  .price {
    margin: 0 5px;
    color: var(--color-text);
    flex: 1;
  }
  .calculate {
    width: 90px;
    background-color: #f13e3a;
    text-align: center;
    color: white;
  }
</style>
