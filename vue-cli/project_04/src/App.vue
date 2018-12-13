<template>
  <div id="app">
    <div class="nav-top">
      <div class="nav-box">
        <img class="logo" src="" alt="">
        <ul class="nav-items">
          <li><a href="">玩法介绍</a></li>
          <li><a href="">邀请好友</a></li>
          <li><a href="">分红</a></li>
          <li>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
              </el-option>
            </el-select>
          </li>
        </ul>
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
      options: [{
        value: '1',
        label: '简体中文'
      }, {
        value: '2',
        label: '英文'
      }],
      value: '1'
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
  height: 60px;
  margin: 0 auto;
}
.nav-top {
  width: 100%;
  background-color: #1C233F;
}
.nav-items {
  float: right;
  width: 600px;
  line-height: 60px;
  font-size: 14px;
}
.nav-items li {
  float: left;
  padding: 0 25px;
}
.nav-items li .el-select{
  width: 130px;
}
.nav-items li a {
  color: #ffffff;
}
.nav-items li a:hover {
  text-shadow: 0px 0px 8px #ffffff;
}
.content-box {
  background-color: #161933;
  min-height: 860px;
  padding-bottom: 50px;
  position: relative;
}
</style>
