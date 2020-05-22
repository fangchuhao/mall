<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles" class="tabControlItem" @click="changeCurrentIndex(index)">
      <span :class="{active:currentIndex==index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      changeCurrentIndex(index) {
        this.currentIndex=index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tabControl {
    display: flex;
    height: 33px;
    line-height: 33px;
    text-align: center;
    border-top: 1px solid #666666;
    border-bottom: 1px solid #666666;
    background-color: white;
  }
  .tabControlItem {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    padding-bottom: 3px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
