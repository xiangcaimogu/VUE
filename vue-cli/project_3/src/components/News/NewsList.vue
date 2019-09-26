<template>
    <div class="tmp1">
      <nav-bar title="新闻中心"></nav-bar>
      <div class="demo">
        <ul>
          <li v-for="news in newslist" :key="news.id">
            <router-link :to="{name:'news.detail',query:{id:news.id} }" >
              <img class="" :src="news.img_url" alt="">
              <div>
                <span>{{news.title}}</span>
                <div class="nei">
                  <p>点击数：{{news.click}}</p>
                  <p>发表时间：{{news.add_time | converTime('YYYYMMDD') }}</p>
                </div>
              </div>
            </router-link>
          </li>
          <li class="line"></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "news-list",
  data () {
    return {
      newslist: ''}
  },
  created () {
    this.$axios.get('getnewslist').then(
      res => {
        console.log(res)
        this.newslist = res.data.message
      }
    )
  }
}
</script>

<style scoped>
.demo span {
  display: block;
  width: 100%;
  font-size: 17px;
  line-height: 21px;
}
  .demo a p {
    float: left;
    color:#0bb0f5;
    font-size:14px;
    line-height: 21px;
  }
  .demo p:nth-child(2) {
    float: right;
  }
  .cms-s-header {
    background-color: #f7f7f7;
  }
  .tmp1 h1{
    display: inline-block;
  }
  .page-title {
    margin-left: 25%;
  }
  .line {
    margin-left: 16px ;
    transform: scaleY(.5);
    border-bottom: 1px solid #c8c7cc;
  }
  .nei {
    height: 45px;
  }
</style>
