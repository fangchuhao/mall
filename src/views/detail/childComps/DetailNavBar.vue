<template>
  <div>
    <nav-bar class="navBar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="middle" class="title">
        <div v-for="(item,index) in titles"
             :class="{active:currentIndex==index}"
             @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";


  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex=index
        this.$emit('itemClick',index)
      },
      backClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .back img {
    width: 20px;
    margin-top: 13px;
  }
  .title {
    display: flex;
  }
  .title div {
    flex: 1;
    font-size: 14px;
  }
  .active {
    color: var(--color-high-text);
  }
</style>
