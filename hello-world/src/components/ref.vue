<template>
  <div>
    refCount：
    <p>{{refCount}}</p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const refCount = ref(0);
    //在setup内部访问ref的值需要.value,外面就不需要了
    console.log(refCount.value);

    return { refCount }; //在template中访问ref创建的响应式数据需要return出去
  }
};
</script>

<style>
</style>