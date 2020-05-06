<template>
  <div>
    <p>{{p1}}</p>
    <p>{{count}}</p>
    <button @click='count++'>增加</button>
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
export default {
  props: {
    p1: String
  },
  setup(props, context) {
    console.log(props);
    console.log(context);
    console.log("setup");

    const state = reactive({ count: 1 });

    return state;
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  }
};
</script>

<style>
</style>