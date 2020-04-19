<template>
  <div class="tmpl">
    <div class="photo-bottom">
      <ul>
        <li class="photo-comment">
          <div>
            <span>提交评价</span>
            <span> <a href="">返回</a></span>
          </div>
        </li>
        <li class="txt-commment">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </li>
        <li>
          <mt-button type="default" @click="sendMsg">发表评论</mt-button>
        </li>
        <li class="photo-comment">
          <div>
            <span>评论列表</span>
            <span>44条评论</span>
          </div>
        </li>
      </ul>
      <ul class="comment-list">
        <li v-for="(msg,index) in msgs" :key="index">{{msg.user_name}}:{{msg.content}}{{msg.add_time}}
        </li>
      </ul>
      <mt-button type="danger" size="large" @click="loadMore">加载更多</mt-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "comment",
    data() {
      return {
        msgs: [],
        page: 1,
        newComment:''
      }
    },
    props: ['cid'],
    created() {
      this.page = this.$route.query.page || '1'
      this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
        .then(res => {
          this.msgs = this.msgs.concat(res.data.message)
        })
      this.page++
    },
    methods: {
        loadMore() {
          this.$axios.get(`getcomments/${this.cid}?pageindex=${this.page}`)
            .then(res => {
              this.msgs = this.msgs.concat(res.data.message)
            })
          this.page++
        },
        sendMsg(){
          //发表之前判断评论是否为空
          if(this.newComment.trim()===''){
            return this.$toast('评论不能为空')
          }
          this.$axios.post('postcomment/'+this.cid,"content="+this.newComment).then(res=>{
            this.newComment=''//评论结束清空
            this.page=1
            this.loadMore()
          })
        }
      }
  }
</script>

<style scoped>

</style>
