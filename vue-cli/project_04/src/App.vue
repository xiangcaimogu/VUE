<template>
  <div id="app">
    <div class="nav-top">
      <div class="nav-box">
        <img class="logo" src="" alt="">
        <ul class="nav-items">
          <li>
            <el-button type="text" @click="dialogPlayVisible = true">玩法介绍</el-button>
            <el-dialog class="custom-play" title="玩法介绍" center :visible.sync="dialogPlayVisible">
              <p>1. 准备好你的EOS 帐号，如果还未有EOS帐号，可根据 <a href=""> <strong>教程</strong></a>创建</p>
              <p>2. 您需要透过Scatter 在网页上操作帐号，如果还未有安装Scatter，请 <a href=""> <strong>安装Scatter</strong></a></p>
              <p>3, 按下登入按钮，透过Scatter 进行登入</p>
              <p>4, 选择需要投注货币，您可使用EOS 或 DICE 投注</p>
              <p>5, 设置需要投注量</p>
              <p>6, 调整滑条投注骰子号码上限，改变胜出机率</p>
              <p>7, 按下"掷骰子"按钮进行投注，如果 摇到骰子号码小于投注骰子号码上限，立即中奖</p>
              <p>** 由于游戏都在EOS 的智能合约上执，因此游戏保证公平，并不能作弊。我们透过独有的加密技术，保证赛果不会被更改，请您放心下注。</p>
              <p><a href=""> <strong>认证</strong></a></p>
            </el-dialog>
          </li>
          <li>
            <el-button type="text" @click="dialogInviteVisible = true">邀请好友</el-button>
            <el-dialog class="custom-invite" title="邀请好友领取奖励" width="30%" center :visible.sync="dialogInviteVisible">
              <el-row>
                <el-col :span="16"><el-input v-model="http" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :offset="1" :span="6"><el-button @click.prevent="">复制</el-button>
                </el-col>
              </el-row>
              <p>当好友透过您专属的连结进入游戏投注后，你可获得我们10% 利润分成，所有代币适用！* 请于「分紅 -> 我的余额」领取奖励。</p>
              <p>*不适用于退回的投注</p>
            </el-dialog>
          </li>
          <li>
            <el-button type="text" @click="dialogDividendVisible = true">分红</el-button>
            <el-dialog class="custom-dividend" title="" width="30%" :visible.sync="dialogDividendVisible">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="分红池" name="first">
                  <div class="divide-pool">
                    <div class="divide-pool-header">
                      <h2>当前分红池累积</h2>
                      <div class="count-down">
                        <span>下次分红</span>
                        <span>倒计时</span>
                      </div>
                    </div>
                    <ul class="income">
                      <li>
                        <el-row>
                          <el-col :span="12">
                            <div>
                              <p>预估收益</p>
                              <p><span>0.000000126</span>EOS</p>
                            </div>
                            <div>
                              <p>每万 DICE 预期收益</p>
                              <p><span>0.000000126</span>EOS</p>
                            </div>
                          </el-col>
                          <el-col :span="12">
                            <div class="together">
                              <img src="../src/assets/img/eos_icon_big_new.png" alt="">
                              <p><span>20.156</span>EOS</p>
                            </div>
                          </el-col>
                        </el-row>
                      </li>
                    </ul>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="质押" name="second">
                  <div class="pledge">
                    <div class="pledge-header">
                      <h2>质押您的DIC</h2>
                      <el-button size="small" @click="open" class="el-icon-question"></el-button>
                    </div>
                    <el-card>
                      <P>DIC质押重量</P>
                      <div class="pledge-body">
                      <img src="../src/assets/img/dice_icon_big.png" class="image">
                        <p><span>4358224155.0215</span>DIC</p>
                        <P>90.84%</P>
                      </div>
                      <p>*解除质押需要24小时</p>
                    </el-card>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="分红纪录" name="third">
                  <div class="record">
                    <div class="record-header">
                      <h2>分红记录</h2>
                      <div class="custom-button-record">
                        <el-button size="mini" circle icon="el-icon-arrow-left"></el-button>
                        <span>2018-10-12</span>
                        <el-button size="mini" circle icon="el-icon-arrow-right"></el-button>
                      </div>
                    </div>
                    <el-table
                      :data="tableData3"
                      style="width: 100% ;background-color:#1c233f "
                      height="250"
                      :cell-class-name="recordCellClass"
                      :row-class-name="recordRowClassName"
                      >
                      <el-table-column
                        prop="date"
                        label="日期"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="eos"
                        label="EOS"
                        width="150">
                      </el-table-column>
                      <el-table-column
                        prop="dic"
                        label="DIC"
                        width="150">
                      </el-table-column>
                    </el-table>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="钱包" name="fourth">定时任务补偿</el-tab-pane>
              </el-tabs>
            </el-dialog>
          </li>
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
      dialogPlayVisible: false,
      dialogInviteVisible: false,
      dialogDividendVisible: false,
      activeName: 'first',
      http:'http://',
      options: [{
        value: '1',
        label: '简体中文'
      }, {
        value: '2',
        label: '英文'
      }],
      value: '1',
      tableData3: [{
        date: '2016-05-03',
        eos: '11.663325',
        dic: 200333
      }, {
        date: '2016-05-02',
        eos: '11.663325',
        dic: 200333
      }, {
        date: '2016-05-04',
        eos: '11.663325',
        dic: 200333
      }, {
        date: '2016-05-01',
        eos: '11.663325',
        dic: 200333
      }]
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    open() {
      this.$alert('您可以随时质押，系统将会依您所质押的量进行利润分配。质押后将会被锁定，无法交易和使用，你可以随时解押，需要24小时去完成解押，期间不能获得利润分配。', '质押DICE', {
        confirmButtonText: '确定',
        showConfirmButton:false,
        callback: action => {
        }
      });
    },
    recordCellClass(row, rowIndex){
      return 'custom-record-cell'
    },
    recordRowClassName(){
      return 'custom-record-row'
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
}
.nav-items>li {
  float: left;
  padding: 0 25px;
}
.nav-items li>.el-select{
  width: 130px;
  line-height: 60px;
  font-size: 14px;
}
.nav-items li>.el-button {
  color: #ffffff;
  line-height: 36px;
  font-size: 14px;
}
.nav-items li .el-button:hover {
  text-shadow: 0px 0px 8px #ffffff;
}
.content-box {
  background-color: #161933;
  min-height: 860px;
  padding-bottom: 50px;
  position: relative;
}
.custom-play p {
  margin: 0;
  line-height: 30px;
  font-size: 15px;
  color: #ffffff;
}
.custom-invite p {
  margin: 0;
  line-height: 30px;
  font-size: 15px;
  color: #ffffff;
}
.custom-dividend p{
  margin: 0;
  color: #ffffff;
}
.custom-dividend .divide-pool .divide-pool-header span {
  line-height: 27px;
}
.custom-dividend .divide-pool {
  color: #ffffff;
  text-align: center;
  position: relative;
}
.custom-dividend .divide-pool .count-down {
  position: absolute;
  left: 0px;
  top: 0px;
}
.custom-dividend .divide-pool .income{
  padding: 10px 0;
  text-align: left;
}
.custom-dividend .divide-pool .income li{
  background-color: rgba(255,255,255,0.1);
  padding: 12px 20px;
}
.custom-dividend .divide-pool .income p {
  font-size: 14px;
  color: #dbdbdb;
  line-height: 25px;
}
.custom-dividend .divide-pool .income p span{
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  line-height: 25px;
}
.custom-dividend .divide-pool .income .together {
  text-align: center;
}
.custom-dividend .divide-pool .income .together img{
  margin-top: 10px;
  width: 42px;
}
.custom-dividend .divide-pool .income .together span {
  font-size: 26px;
}
.custom-dividend .pledge-header {
  position: relative;
  color: #ffffff;
  text-align: center;
}
.custom-dividend .pledge-header .el-button{
  position: absolute;
  left: 62%;
  top: -3px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: #fff;
}
.custom-dividend .pledge img{
  width: 60px;
}
.custom-dividend .pledge p{
  font-size: 14px;
  color: #cbcbcb;
}
.custom-dividend .pledge-body span {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}
.custom-dividend .pledge-body {
  text-align: center;
}
.custom-dividend .pledge-body p {
  color: #ffffff;
  font-size: 16px;
}
.custom-dividend .el-card {
  border: none;
  background-color: rgba(255,255,255,0.1);
}
.custom-dividend .record .record-header {
  color: #ffffff;
  text-align: center;
}
.custom-button-record {
  position: absolute;
  left: 65%;
  top: 25px;
}
.custom-button-record .el-button {
  background-color: transparent;
  color: #fff;
}

</style>
