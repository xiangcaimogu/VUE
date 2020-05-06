<template>
  <div>{{plusOne}}</div>
</template>

<script>
import { computed, ref } from "@vue/composition-api";
export default {
  setup() {
    const count = ref(1);

    // 根据 count 的值，创建一个响应式的计算属性 plusOne
    // 它会根据依赖的 ref 自动计算并返回一个新的 ref
    // const plusOne = computed(() => count.value + 1);
    const plusOne = computed({
      // 取值函数
      get: () => count.value + 1,
      // 赋值函数
      set: val => {
        count.value = val - 1;
      }
    });
    console.log(plusOne.value); // 输出 2
    // plusOne.value++; // error computed没有设置set只能读
    return { plusOne };
  }
};
</script>

<style>
</style>