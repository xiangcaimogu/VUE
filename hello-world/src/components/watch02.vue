<template>
  <div>
    <input type="text" v-model="keywords" />
  </div>
</template>

<script>
import { watch, ref, reactive } from "@vue/composition-api";
export default {
  setup() {
      // ***说明：监听keywords 只要变化就会触发 异步入任务，但是数据变化小于1秒，下次的变化重新触发watch 里面的onCleanup会清除异步任务，所以没来及的触发。
    const keywords = ref("");

    // 异步任务：打印用户输入的关键词
    const asyncPrint = val => {
      // 延时 1 秒后打印
      return setTimeout(() => {
        console.log(val);
      }, 1000);
    };

    // 定义 watch 监听
    watch(
      keywords,
      (keywords, prevKeywords, onCleanup) => {
        // 执行异步任务，并得到关闭异步任务的 timerId
        const timerId = asyncPrint(keywords);

        // 如果 watch 监听被重复执行了，则会先清除上次未完成的异步任务
        onCleanup(() => clearTimeout(timerId));
      },
      // watch 刚被创建的时候不执行
      { lazy: true }
    );

    // 把 template 中需要的数据 return 出去
    return {
      keywords
    };
  }
};
</script>

<style>
</style>