<template>
  <div>
    <!--<currency-group></currency-group>-->
    <div class="center-view">
      <el-row :gutter="10">
        <el-col class="ctrl-board" :xs="24" :sm="13">
          <el-form ref="form" :model="form">
            <el-row>
              <el-col :span="8">
                <el-card class="card-message" shadow='never'>
                  <span>小于改数获胜</span>
                  <h1>48</h1>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="card-message" shadow='never'>
                  <span>赔率</span>
                  <h1>2.005X</h1>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="card-message" shadow='never'>
                  <span>中奖概率</span>
                  <h1>48%</h1>
                </el-card>
              </el-col>
            </el-row>
            <el-row>
            <el-col :span="4">
              <el-form-item>
                <div class="grid-content chip-img">Chip</div>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :offset="1" :span="12">
              <el-form-item>
                <div class="grid-content rank-img">投注金额</div>
                <el-row class="touzhu">
                  <el-col class="jine" :span="13">
                      <el-input size="small" v-model="input" placeholder="请输入内容">
                        <template slot="append">DICE</template>
                      </el-input>
                  </el-col>
                  <el-col :span="11">
                    <el-button-group>
                      <el-button size="small" >1/2</el-button>
                      <el-button size="small" >2X</el-button>
                      <el-button size="small" >MAX</el-button>
                    </el-button-group>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
            <el-col :offset="1" :span="6">
              <div class="grid-content text-line money-img ">赢取奖金</div>
              <div class="touzhu">
                <el-input size="small" v-model="input" disabled>
                  <template slot="append">DICE</template>
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-form-item>
          <div class="block custom-slider">
            <el-slider v-model="value2"></el-slider>
            <el-row class="custom-subscript">
              <el-col :span="6">1</el-col>
              <el-col :span="6">25</el-col>
              <el-col :span="6">50</el-col>
              <el-col :span="5">75</el-col>
              <el-col :span="1">100</el-col>
            </el-row>
          </div>
          </el-form-item>
          <div class="custom-switch">
            <el-form-item>
              <el-switch
                style="zoom:1.2"
                v-model="value3"
                active-color="#4CE8DE"
                active-text="自动投注"
                inactive-text="关闭">
              </el-switch>
              <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
                <el-button size="small" class="el-icon-question"></el-button>
              </el-tooltip>
            </el-form-item>
          </div>
          <div class="custom-signon">
            <el-button type="primary" style="width: 160px;">
              登录
            </el-button>
          </div>
          <div class="custom-card-reward">
            <el-card shadow='never'>
              <span>下注可获得<span>3.125</span>DICE</span>
              <div class="custom-reward-textcolor">
                <span>现在投注可获得投注货币<span>3.125</span>DICE</span>
              </div>
              <el-button
                size="small"
                plain
                @click="open2"
                class="el-icon-question">
              </el-button>
            </el-card>
          </div>
        </el-form>
        </el-col>
        <el-col :xs="24" :sm="11">
          <div class="custom-ranking-box">
            <div class="custom-ranking-top">
              <i class="fa fa-bar-chart" aria-hidden="true"></i>
              <span>每小时排行榜</span>
              <div class="custom-button-ranking">
                <el-button size="mini" circle icon="el-icon-arrow-left"></el-button>
                <el-button size="mini" circle icon="el-icon-arrow-right"></el-button>
              </div>
            </div>
            <el-table
              :data="tableData3"
              height="516"
              style="width: 100%;background-color:#1c233f "
              :row-class-name="handleMyClass"
              :cell-class-name="handleCellClass"
              :header-row-class-name="handleHeaderRowClassName"
              :header-cell-class-name="handleMyheaderClass"
              >
              <el-table-column
                prop="rank"
                label="排名"
                width="90">
              </el-table-column>
              <el-table-column
                prop="name"
                label="投注者"
                width="120">
              </el-table-column>
              <el-table-column
                prop="date"
                label="总投注额"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="奖励">
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
      <div class="custom-all-bets">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="所有投注" name="first">
            <el-table
              :data="tableData2"
              style="width: 100% ;background-color:#1c233f "
              height="500"
              :row-class-name="handleMyClass"
              :cell-class-name="handleCellClass"
              :header-row-class-name="handleHeaderRowClassName"
              :header-cell-class-name="handleMyheaderClass"
            >
              <el-table-column
                prop="date"
                label="时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="投注者"
                width="180">
              </el-table-column>
              <el-table-column
                prop="minnum"
                label="小于改号码获胜">
              </el-table-column>
              <el-table-column
                prop="address"
                label="投注">
              </el-table-column>
              <el-table-column
                prop="num"
                label="开奖号码">
              </el-table-column>
              <el-table-column
                prop="money"
                label="奖金">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="我的投注" name="second">我的投注</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="cpu-box">
      <ul class="cpu-message">
        <li>
          <p>CPU</p>
          <el-progress type="circle" :percentage="60" :width="50" :stroke-width="3" color="#b377fe"></el-progress>
        </li>
        <li><p style="border-top: 1px solid #3C4771; width: 55px;margin-left: 15px;"></p></li>
        <li>
          <p>NET</p>
          <el-progress type="circle" :percentage="80" :width="50" :stroke-width="3" color="#96fea7"></el-progress>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dice-game",
  data () {
      return {
        input:'',
        value2:20,
        value3:true,
        todo: {
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        },
        tableData3: [{
          rank: '',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        },{
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        },{
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        },{
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        },{
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }, {
          rank: '1',
          name: '王小虎',
          date: '1250EOS',
          address: '2EOS'
        }],
        activeName: 'first',
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          minnum:'226',
          num:'26',
          address: '28.215EOS',
          money: '16.21TGC',
        },{
          date: '2016-05-02',
          name: '王小虎',
          minnum:'226',
          num:'26',
          address: '28.215EOS',
          money: '16.21TGC',
        },{
          date: '2016-05-02',
          name: '王小虎',
          minnum:'226',
          num:'26',
          address: '28.215EOS',
          money: '16.21TGC',
        }],
        options: [{
          value: '1',
          label: 'EOS'
        }, {
          value: '2',
          label: 'DICE'
        }],
        value: '1',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
  },
  mounted (){
    this.$nextTick(function () {
      document.getElementsByTagName('svg')[0].children[0].attributes.stroke.nodeValue='#3b435c';
      document.getElementsByTagName('svg')[1].children[0].attributes.stroke.nodeValue='#3b435c';
    })
  },
  methods: {
    open2() {
      this.$notify({
        title: 'asd',
        message: 'message',
        duration: 0});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleMyClass(row, rowIndex){
      console.log(row,rowIndex)
      return 'custom-rank-row'
    },
    handleCellClass(row, rowIndex){
      return 'custom-rank-cell'
    },

    handleMyheaderClass (row, rowIndex){
      return 'custom-rank-header-row'
    },
    handleHeaderRowClassName (){
      return 'custom-rank-header-cell'
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.center-view {
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
}
.ctrl-board {
  padding: 50px 0;
  color: #ffffff;
}
.grid-content {
  font-size: 13px;
  color: #898a8c;
  padding: 7px 0px 4px 30px;
  background-repeat: no-repeat;
  background-size: 23px auto;
  background-position:left ;
}
.rank-img {
  background-image: url("../../assets/img/rank.png");
}
.money-img {
  background-image: url("../../assets/img/money.png");
}
.chip-img {
  background-image: url("../../assets/img/chip.png");
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.touzhu {
  background-color: #1c233f;
  font-size: 14px;
  border-radius: 3px;
  height: 42px;
}
.jine {
  padding-left: 0px;
}
.center-view .touzhu .el-button {
  background-color: #3b435c;
  color: #ffffff;
  border: none;
}
.center-view .touzhu .el-button:hover {
  background-color: #2e3650;
  color: #ffffff;
  border: none;
}
.text-line {
  line-height: 40px;
}
.card-message {
  border-radius: 0;
  text-align: center;
  background-color: #1c233f;
  color: #fff;
  border:none;
}
.el-slider__runway {
  background-color: #F38F00;
}
.custom-slider {
  padding-top: 30px;
}
.custom-subscript {
  margin-top: -10px;
  color: #898a8c;
}
.custom-switch {
  text-align: center;
}
.custom-switch .el-button {
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: #fff;
  line-height: 20px;
}
.custom-card-reward .el-button {
  position: absolute;
  left: 78%;
  top: 30%;
  font-size: 22px;
  background-color: transparent;
  border: none;
  color: #fff;
  line-height: 20px;
}
.custom-signon {
  text-align: center;
}
.custom-card-reward {
  margin-top: 20px;
  background-color: #1c233f;
}
.custom-card-reward span {
  line-height: 26px;
}
.custom-card-reward .el-card {
  position: relative;
  width: 60%;
  margin: 0 auto;
  padding-left: 80px;
  color: #ffffff;
  border: none;
  background-color: transparent;
}
.custom-reward-textcolor {
  color: #ff8831;
}
.custom-ranking-top {
  text-align: center;
  color: #fff;
  font-size: 19px;
  padding: 19px 0;
  margin: 0;
  position: relative;
}
.custom-ranking-box {
  margin-top: 50px;
  padding-left: 16px;
  background-color: #1c233f
}
.custom-button-ranking {
  position: absolute;
  right: 60px;
  top: 17px;
}
.custom-button-ranking .el-button {
  background-color: transparent;
  color: #fff;
}
.cpu-box {
  position: fixed;
  right: 100px;
  top: 100px;
}
.cpu-message {
  color: #ffffff;
  text-align: center;
  border: 1px solid #2d4471;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  width: 85px;
  height: 260px;
  background-color: #283045;
}
</style>
