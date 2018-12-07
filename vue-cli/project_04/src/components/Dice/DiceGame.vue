<template>
  <div>
    <currency-group></currency-group>
    <div class="center-view">
      <el-row :gutter="10">
        <el-form ref="form" :model="form">
          <el-col class="ctrl-board" :xs="24" :sm="13">
          <el-row>
            <el-col :span="15">
              <el-form-item>
                <div class="grid-content">投注金额</div>
                <el-row class="touzhu">
                  <el-col class="jine" :span="14">
                      <el-input size="small" v-model="input" placeholder="请输入内容">
                        <template slot="append">DICE</template>
                      </el-input>
                  </el-col>
                  <el-col :span="10">
                    <el-button-group>
                      <el-button size="small" >1/2</el-button>
                      <el-button size="small" >2X</el-button>
                      <el-button size="small" >MAX</el-button>
                    </el-button-group>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-col>
              <el-col :offset="1" :span="8">
              <div class="grid-content text-line">赢取奖金</div>
              <div class="touzhu">
                <el-input size="small" v-model="input" disabled>
                  <template slot="append">DICE</template>
                </el-input>
              </div>
            </el-col>
          </el-row>
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
                <el-button size="small"><i class="el-icon-question"></i></el-button>
              </el-tooltip>
            </el-form-item>
          </div>
          <div class="custom-signon">
            <el-button type="primary" round>
              登录
            </el-button>
          </div>
          <div class="custom-card-prompt">
            <el-card shadow='never'>
              <el-row>
                <el-col :span="16">
                  <ul>
                    <li>
                      <span>下注可获得<span>3.125</span>DICE</span>
                    </li>
                    <li class="custom-prompt-fontcolor">
                      <span>现在投注可获得投注货币<span>3.125</span>DICE</span>
                    </li>
                  </ul>
                </el-col>
                <el-col class="custom-question" :span="6">
                  <notice v-bind="todo"></notice>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-col>
        </el-form>
        <el-col :xs="24" :sm="11">
          <div class="custom-ranking-box">
            <div class="custom-ranking-top">
              <img src="" alt="">
              <span>每小时排行榜</span>
                <el-button type="primary" circle icon="el-icon-arrow-left"></el-button>
                <el-button type="primary" circle icon="el-icon-arrow-right"></el-button>
            </div>
            <el-table
              :data="tableData3"
              height="500"
              style="width: 100%">
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
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="所有投注" name="first">
            <el-table
              :data="tableData2"
              style="width: 100%"
              height="500"
              :row-class-name="tableRowClassName">
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
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
  padding: 28px 0 50px;
  color: #ffffff;
}
.grid-content {
  font-size: 13px;
  color: #898a8c;
  padding: 7px 0 4px;
  padding-left: 33px;
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
  padding-left: 40px;
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
.custom-signon {
  text-align: center;
}
.custom-card-prompt {
  margin-top: 20px;
}
.custom-card-prompt span {
  line-height: 26px;
}
.custom-card-prompt .el-card {
  padding: 0px;
  color: #ffffff;
  background-color: #1c233f;
  border: none;
}
.custom-question {
  margin-top: 10px
}
.custom-prompt-fontcolor {
  color: #ff8831;
}
.custom-ranking-top {
  text-align: center;
  color: #fff;
  font-size: 19px;
  padding: 19px 0;
  margin: 0;
}
.custom-ranking-box {
  margin-top: 50px;
  background-color: #1c233f
}
</style>
