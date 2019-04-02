// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入UI-element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入自己的css
import './assets/css/global.css'
// 引用 font-awesome
import 'font-awesome/css/font-awesome.min.css'

// 引入自己的组件
import Tabs from '@/components/tabs/tabs'
// 注册全局组件
Vue.component(Tabs.name,Tabs)

// 配置axios
import Axios from 'axios'
Vue.prototype.$axios=Axios;

// 安装UI
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
