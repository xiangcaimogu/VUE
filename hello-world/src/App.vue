<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <set-up p1='asd'></set-up>
    <com-ref></com-ref>
    <com-Toref></com-Toref>
    <com-computed></com-computed>
    <com-Watch></com-Watch>
    <parent></parent>
  </div>
</template>

<script>
import setUp from './components/setup.vue'
import comRef from './components/ref.vue'
import comToref from './components/toRefs.vue'
import comComputed from './components/computed.vue'
import comWatch from './components/watch.vue'
import parent from './components/provideInject.vue'

export default {
  name: 'App',
  components: {
    setUp,
    comRef,
    comToref,
    comComputed,
    comWatch,
    parent,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
