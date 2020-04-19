<template>
    <div>
      <nav-bar title="图文列表"></nav-bar>
      <div class="photo-header">
        <ul>
          <li v-for="i in categorys" :key="i.id"><a href="" @click="loadImageByCategoryId(i.id)"></a>{{i.title}}</li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="img in imgs" :key="img.id">
            <router-link :to="{name:'photo.detail',query:{id:img.id} }">
              <a href="">
                <img :src="img.img_url" alt="">
                <p>
                  <span>{{img.title}}</span><br>
                  <span>{{img.zhaiyao}}</span>
                </p>
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "PhotoList",
  data (){
    return{
      imgs:[],
      categorys:[]
    }
  },
  //组件获取之后执行的函数，但是改变当前路由参数是不能重新加载组件的，所以此函数不会重新触发
  created() {
    //获取路由参数
    //通过URL拼接参数发起请求
    //获取数据
    let categoryId=this.$route.params.categoryId;
    this.loadImageByCategoryId(categoryId)
    // console.log(categoryId)
    // this.$axios.get('getimages/'+categoryId)
    //   .then(res=>{
    //     this.imgs=res.data.messages
    //   })

    //获取分类信息
    this.$axios.get('getimgcategory').then(res=>{
      this.categorys=res.data.message;
      //像数组的第一个里面添加一个查看全部
      this.categorys.unshift({id:0,title:'全部'})
    }).catch(err=>{console.log('失败')})
  },
  methods:{
    loadImageByCategoryId(categoryId){
      // let categoryId=this.$route.params.categoryId;
      console.log(categoryId)
      this.$axios.get('getimages/'+categoryId)
        .then(res=>{
          this.imgs=res.data.message
        }).catch(err=>{
          this.$toast({
            message: 'Upload Complete',
            position: 'bottom',
            duration: 5000
          });
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to)
    this.loadImageByCategoryId(to.params.categoryId);
    next()
  }
}
</script>

<style scoped>
.photo-list li {
  list-style:none;
  position: relative;
}
.photo-list li img {
  width: 100%;
  height: 230px;
  vertical-align: top;
}
.photo-list ul {
  padding-left: 0px;
  margin: 0;
}
.photo-list p {
  position: absolute;
  bottom: 0px;
  color: white;
  background-color: rgba(0,0,0,0.3);
  margin-bottom: 0px;
}
.photo-list p span:nth-child(1) {
  font-weight: bold;
  font-size: 16px;
}
</style>
