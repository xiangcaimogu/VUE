<template></template>

<script>
import { watch, ref, reactive } from "@vue/composition-api";
export default {
  setup() {
    // 定义数据源
    // const count = ref(0);
    // // 指定要监视的数据源
    // watch(count, (newVal, oldVal) => {
    //   //watch 第一次创建组件watch就会执行
    //   console.log("新值", newVal, "旧值", oldVal);
    // });
    // setTimeout(() => {
    //   count.value += 1;
    // }, 2000);

    const state = reactive({ count: 0, name: "zs" });

    const stop = watch(
      [() => state.count, () => state.name], // Object.values(toRefs(state)),
      ([count, name], [prevCount, prevName]) => {
        console.log(count); // 新的 count 值
        console.log(name); // 新的 name 值
        console.log("------------");
        console.log(prevCount); // 旧的 count 值
        console.log(prevName); // 新的 name 值
      },
      {
        lazy: true // 在 watch 被创建的时候，不执行回调函数中的代码
      }
    );

    setTimeout(() => {
      state.count++;
      state.name = "ls";
    }, 1000);
    // 调用停止函数，清除对应的监视
    // stop();
  }
};
</script>

<style>
</style>