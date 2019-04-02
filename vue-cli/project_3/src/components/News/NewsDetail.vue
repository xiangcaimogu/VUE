<template>
    <div class="tmpl">
      <nav-bar title="新闻详情"/>
      <div class="news-title">
        <p>{{newsDetail.title}}</p>
        <div>
          <span>{{newsDetail.click}}</span>
          <span>分类：民生经济</span>
          <span>添加时间：{{newsDetail.add_time | converTime('YYYY年MM月DD日')}}</span>
        </div>
      </div>
      <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>

<script>
export default {
  name: "NewsDetail",
  data(){
    return {
       newsDetail:''
    }
  },
  created() {
      //获取路由参数
    let id=this.$route.query.id;
    console.log(id)
      this.$axios.get('getnew/'+id).then(res=>{
        this.newsDetail=res.data.message[0]
      })
  }
}
</script>

<style scoped>
.news-title p {
  color: #0a87f8;
  font-size: 20px;
  font-weight: bold;
}
.news-title span {
  margin-right: 30px;
}
.news-title {
  margin-top: 5px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
.news-content {
  padding: 10px 5px;
}
</style>
