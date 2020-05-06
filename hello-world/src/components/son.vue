<template>
  <div>
    <h1 :style="{color: themeColor}">子组件:{{themeColor}}</h1>
    <sonson>{</sonson>
  </div>
</template>

<script>
import sonson from "./sonson.vue";
import { inject } from "@vue/composition-api";
export default {
  components: {
    sonson
  },
  setup() {
    // 2. 调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const themeColor = inject("globalColor");

    // 3. 把接收到的共享数据 return 给 Template 使用
    return {
      themeColor
    };
  }
};
</script>

<style>
</style>