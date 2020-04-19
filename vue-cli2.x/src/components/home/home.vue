<template>
    <div>
      <!--上有轮播图，下有九宫格-->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.img" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="grid">
        <my-ul>
          <my-li v-for="(grid, index) in grids" :key="index">
            <router-link :to="grid.router">
            <span :class="grid.classname"></span>
            <p>{{grid.title}}</p>
            </router-link>
          </my-li>
        </my-ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'welcome to your vue.js app',
      imgs:[],
      grids:[
        {classname:'cms-news',title:'新闻资讯',router:{name:'news.list'}},
        {classname:'cms-news',title:'图文分享',router:{name:'photo.list',params:{categoryId:0}}},
        {classname:'cms-news',title:'商品展示',router:{name:'goods.list'},query:{id:1}},
        {classname:'cms-news',title:'留言反馈',router:{name:'news.list'}},
        {classname:'cms-news',title:'搜索资讯',router:{name:'news.list'}},
        {classname:'cms-news',title:'联系我们',router:{name:'news.list'}},
      ]
    }
  },
  created () {
    this.$axios.get('getlunbo').then(res=>{
      this.imgs=res.data.message;
      console.log(res.data.message)
    }).catch(err=>{
      console.log('轮播图获取异常',err )
    })
  }
}
</script>

<style scoped>
  /*添加scoped css变为局部*/
.mint-swipe {
  height: 200px;
}
  img {
    width: 100%;
  }
  /*相当于在全局*/
  /*div {*/
/*background-color: red;*/
  /*}*/
  span {
    display: block;
  }
  .cms-news {
    height: 62px;
    background-image: url("../../assets/img/1.png");
    background-repeat: no-repeat ;
    background-position: center;
  }
</style>
