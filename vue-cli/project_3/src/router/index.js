import Vue from 'vue'
import Router from 'vue-router'

// 不在全局作用域，各个单独模块
import HelloWorld from '@/components/HelloWorld'

import Home from '@/components/home/home'
import Member from '@/components/member/member'
import Search from '@/components/search/search'
import Shopcart from '@/components/shopcart/shopcart'

import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsList from '@/components/Goods/GoodsList'
Vue.use(Router)

// 注册全局组件,给vue注册全局组件和属性
// router-view  router-link
// 挂载Vue.prototype.$router||$route
// 未来所有的组件中的this对象，就具备该属性，所有的this其实就是vue的子类对象

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'home'}
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      name:'news.list',
      path:'/news/list',
      component:NewsList
    },
    {
      name:'news.detail',
      path:'/news/detail',
      component:NewsDetail
    },
    {
      name:'photo.list',
      path:'/photo/list/:categoryId',//更换路由参数，但是调用的组件没有改变，create函数不会触发，但是能触发路由组件内守卫beforerouteupdata（）{}
      component:PhotoList
    },
    {
      name:'photo.detail',
      path:'/photo/detail',
      component:PhotoDetail
    },
    {
      name:'goods.list',
      path:'/goods/list',
      component:GoodsList
    }
  ]
})
