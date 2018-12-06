<template>
  <div>
    <currency-group></currency-group>
    <div class="center-view">
      <div class="ctrl-board">
        <el-row>
          <el-col :span="14">
            <div class="grid-content bg-purple">投注金额</div>
            <el-input v-model="input" placeholder="请输入内容">
              <template slot="append">DICE</template>
            </el-input>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple-light">赢取奖金</div>
            <el-input v-model="input" placeholder="请输入内容">
              <template slot="append">DICE</template>
            </el-input>
          </el-col>
        </el-row>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "dice-game"
}
</script>

<style scoped>
.center-view {
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
}
.ctrl-board {
  max-width: 650px;
  padding: 28px 0 50px;
  color: #ffffff;
  position: relative;
  user-select: none;
}
.grid-content {
  font-size: 13px;
  color: #898a8c;
  padding: 7px 0 4px;
  padding-left: 33px;
}
</style>
