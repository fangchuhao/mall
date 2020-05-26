<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #a3a3a5;
  }
  .check {
    border: 2px solid var(--color-high-text);
    background-color: var(--color-high-text);
    border-radius: 50%;
  }
</style>
