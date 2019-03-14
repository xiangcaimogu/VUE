// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置Mint-UI
import MintUI from 'mint-ui'
// 引入css，不用对象直接引用
import 'mint-ui/lib/style.css'

//图片插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
Vue.component(vue-preview,VuePreview)
// 引入自己的CSS
import "./assets/css/global.css"
// 引入自己的ul和li组件
import Myul from '@/components/common/myul'
import Myli from '@/components/common/myli'
import NavBar from '@/components/common/NavBar'
import Comment from '@/components/common/comment'

// 注册全局组件
Vue.component(Myul.name,Myul)
Vue.component(Myli.name,Myli)
Vue.component(NavBar.name,NavBar)
Vue.component(Comment.name,Comment)

// 定义mement全局日期过滤器
import Moment from 'moment'
Vue.filter('converTime',function (data,formatStr) {
  return Moment(data).format(formatStr)
})
// 配置axios
import Axios from 'axios'
// 配置公共URL
Axios.defaults.baseURL = 'http://www.sinya.online/api/'
Vue.prototype.$axios = Axios

//配置请求拦截器
Axios.interceptors.request.use(function (config) {
  MintUI.Indicator.open({
    text: '玩命加载...'
  })
  return config
})
//配置相应拦截器
Axios.interceptors.response.use(function (res) {
  MintUI.Indicator.close();
  return res
})
// 安装UI插件，注册全局组件及挂载组件
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
