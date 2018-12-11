<template>
  <div class="tabs-fix">
    <el-menu
      default-active="dice"
      class="el-menu-vertical-demo"
      background-color="rgba(255, 255, 255, .2)"
      text-color="#fff"
      active-text-color="#fff"
      @select="handleSelect"
      router
    >
      <el-menu-item index="dice">
        <img src="../../assets/img/game_dice_icon.png" alt="">
          <span>Dice</span>
      </el-menu-item>
      <el-menu-item index="baccarat">
        <img src="../../assets/img/game_baccarat_icon.png" alt="">
        <span slot="title">Baccarat</span>
      </el-menu-item>
      <el-menu-item index="sicbo">
        <img src="../../assets/img/game_dice_icon.png" alt="">
        <span slot="title">Sicbo</span>
      </el-menu-item>
      <el-menu-item index="lottery">
        <img src="../../assets/img/game_dice_icon.png" alt="">
        <span slot="title">Lottery</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "tabs",
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .tabs-fix {
    width: 110px;
    position: fixed;
    left: 0;
    top: 100px;
    z-index: 9;
  }
  li {
    height: 85px;
    margin-bottom: 10px;
    /*padding-top: 10px;*/
    background-color: rgba(255, 255, 255, .2);
    opacity: 0.9
  }
   ul {
    background-color: transparent!important;
  }
  span {
    display: block;
    text-align: center;
    line-height: 18px!important;
  }
  img {
    width: 60px;
  }
  .is-active {
    background-color: #ED9326!important;
  }
  .el-menu {
    border-right:none;
  }
</style>
