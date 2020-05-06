<template>
  <div>
    <h1>父组件</h1>
    <button @click="themeColor='red'">红色</button>
    <button @click="themeColor='blue'">蓝色</button>
    <button @click="themeColor='orange'">橘黄色</button>
    <son></son>
  </div>
</template>

<script>
import son from "./son.vue";
import { provide, ref } from "@vue/composition-api";
export default {
  components: {
    son
  },
  setup() {
      const themeColor=ref('red')
    // 2. App 根组件作为父级组件，通过 provide 函数向子级组件共享数据（不限层级）
    //    provide('要共享的数据名称', 被共享的数据)
    provide("globalColor", themeColor);
    return {
        themeColor
    }
  }
};
</script>

<style>
</style>