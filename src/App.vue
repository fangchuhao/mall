<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="mainTabBar"/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabbar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  .mainTabBar {
    z-index: 10;
  }
</style>
