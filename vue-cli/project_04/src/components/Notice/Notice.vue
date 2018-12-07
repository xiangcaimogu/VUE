<template>
  <div>
  <el-button
    size="small"
    plain
    @click="open2">
    疑问
  </el-button>
  </div>
</template>

<script>
export default {
  name: "notice",
  props:['title','message'],
  data() {
    return {
      asd:"提示符"
    }
  },
  methods: {
    open2() {
      this.$notify({
        title: 'asd',
        message: 'message',
        duration: 0});
    }
  }
}
</script>

<style scoped>

</style>
