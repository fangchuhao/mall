<template>
  <div>
    <nav-bar class="navBar">
      <div slot="middle"><h3>购物车</h3></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "Category",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .navBar {
    background-color: pink;
    color: white;
  }
</style>
