<template>
  <div id="app">
    <div class="nav-top">
      <div class="nav-box">
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 background-color="#1C233F"
                 text-color="#fff"
                 >
          <el-menu-item index="1">玩法介绍</el-menu-item>
          <el-submenu index="2">
            <template slot="title">语言</template>
            <el-menu-item v-for="(i, index) in translation" :key="index" index="i.dex">{{i.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">分红</el-menu-item>
          <el-menu-item index="4"><a href="">VIP</a></el-menu-item>
        </el-menu>
        <div class="line"></div>
      </div>
    </div>
    <div class="content-box">
      <tabs></tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      translation:[{name:'简体中文',dex:'2-1'},{name:'英文',dex:'2-2'}]
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#app {

}
.nav-box {
  width: 1180px;
  margin: 0 auto;
}
.nav-top {
  width: 100%;
  background-color: #1C233F;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
    color: #ffffff;
  }
.content-box {
  background-color: #161933;
  min-height: 860px;
  padding-bottom: 50px;
  position: relative;
}
</style>
