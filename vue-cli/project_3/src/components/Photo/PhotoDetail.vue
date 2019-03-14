<template>
  <div>
    <nav-bar title="图文详情"></nav-bar>
    <div>
      <p>{{info.title}}</p>
      <span>发起时间：{{info.addtime | converTime('YYYY-MM-DD')}}</span>
      <span>{{info.click}}</span>
      <span>分类：名声紧急</span>
    </div>
    <ul>
      <vue-preview :slides="imgs"></vue-preview>
    </ul>
    <div class="photo-desc">
      <p v-html="info.content"></p>
    </div>

    <!------评论组件------>
    <comment :cid="$route.query.id"></comment>
  </div>
</template>

<script>
  export default {
    name: "photo-detail",
    data() {
      return {
        info: [],
        imgs:[]
      }
    },

    created() {
      let id = this.$route.query.id
      this.$axios.get('getimageInfo/' + id).then(res => {
        this.info = res.data.message[0]
      }).catch(err=>{})
      this.$axios.get('getthumumages/'+id).then(res=>{
        this.imgs=res.data.message
        this.imgs.forEach(img=>{
          img.msrc=imgs.src
          img.w=100
          img.h=200
        })
      })
    }
  }
</script>

<style scoped>

</style>
