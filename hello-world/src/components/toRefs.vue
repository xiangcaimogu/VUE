<template>
  <div>
    <p>当前的toref-count值为：{{count}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { toRefs,reactive } from "@vue/composition-api";
export default {
  setup() {
    // 定义响应式数据对象
    const state = reactive({
      count: 0
    });

    // 定义页面上可用的事件处理函数 vue2.0的methods也写在setup中
    const increment = () => {
      state.count++;
    };

    // 在 setup 中返回一个对象供页面使用
    // 这个对象中可以包含响应式的数据，也可以包含事件处理函数
    return {
      // ...state 通过展开运算符 return 出去的reactive会变成固定的值，不在双向响应
      // 将 state 上的每个属性，都转化为 ref 形式的响应式数据
      ...toRefs(state),
      // 自增的事件处理函数
      increment
    };
  }
};
</script>

<style>
</style>