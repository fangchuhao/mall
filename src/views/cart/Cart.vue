<template>
  <div>
    <nav-bar class="navBar">
      <div slot="middle"><h3>购物车( {{cartNumber}} )</h3></div>
    </nav-bar>
    <cart-list :cartList="cartList"/>
    <cart-buttom-bar class="cart-buttom-bar"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {mapGetters} from 'vuex'
  import CartList from "./childComps/CartList";
  import CartButtomBar from "./childComps/CartButtomBar";
  export default {
    name: "Category",
    components: {
      CartButtomBar,
      CartList,
      NavBar
    },
    computed: {
      ...mapGetters({
        'cartNumber':'getCartNumber',
        'cartList': 'getCartList'
      })
    }
  }
</script>

<style scoped>
  .navBar {
    background-color: pink;
    color: white;
  }
  .cart-buttom-bar {
    position: fixed;
    bottom: 49px;
  }
</style>
