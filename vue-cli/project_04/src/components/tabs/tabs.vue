<template>
  <div class="menu-big-box">
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

  @media (min-width: 768px) {
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
  }
  @media (max-width: 767px) {
    .menu-big-box {
      position: relative;
      height: 105px;
    }
    .tabs-fix {
      top: 20px;
      position: absolute;
      left: 50%;
      margin-left: -200px;
    }
    li {
      float: left;
      height: 85px;
      margin-bottom: 10px;
      /*padding-top: 10px;*/
      background-color: rgba(255, 255, 255, .2);
      opacity: 0.9
    }
  }
</style>
