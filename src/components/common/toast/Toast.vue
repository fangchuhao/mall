<template>
  <div class="toast" v-show="isShow">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        msg: '',
        isShow: false
      }
    },
    methods: {
      show(msg='默认样式',duration='2000') {
        this.msg=msg
        this.isShow=true
        setTimeout(()=>{
          this.isShow=false
          this.msg=''
        },duration)

      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.4);
    color: white;
    padding: 5px 8px;
    border-radius: 8px;
    z-index: 999;
  }
</style>
