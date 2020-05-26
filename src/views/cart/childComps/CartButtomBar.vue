<template>
  <div class="buttom-bar">
    <div class="select-content">
      <check-button class="select-all"/>
      <span>全选</span>
    </div>

    <div class="price">
      <span>总计:{{totalPrice}}</span>
    </div>

    <div class="calculate">
      去计算:({{cartLength}})
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  export default {
    name: "CartButtomBar",
    components: {CheckButton},
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item=>{
          return item.isChecked
        }).reduce((total,item)=>{
          return '￥'+(total+parseFloat(item.price.substr(1))*item.count).toFixed(2)
        },0)
      },
      cartLength() {
        return this.$store.state.cartList.filter(item=>{
          return item.isChecked
        }).length
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
