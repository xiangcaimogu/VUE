<template>
  <div>
    <!--<currency-group></currency-group>-->
    <div class="center-view">
      <el-row :gutter="10">
        <el-col :xs="{span:22,offset:1}" :sm="{span:22,offset:1}" :md="{span:11,offset:0}">
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
              style="width: 100%;background-color: #313A41"
              :row-class-name="handleMyClass"
              :cell-class-name="handleCellClass"
              :header-row-class-name="handleHeaderRowClassName"
              :header-cell-class-name="handleMyheaderClass"
            >
              <el-table-column
                prop="rank"
                label="排名"
                min-width="50">
              </el-table-column>
              <el-table-column
                prop="name"
                label="投注者"
                min-width="90"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="date"
                label="总投注额(EOS)"
                min-width="90"
                show-overflow-tooltip>
              </el-table-column>
              <el-table-column
                prop="address"
                label="奖励(EOS)"
                min-width="60"
                show-overflow-tooltip
              >
              </el-table-column>
            </el-table>
          </div>
        </el-col>
        <el-col class="ctrl-board" :xs="{span:22,offset:1}" :sm="{span:22,offset:1}" :md="{span:13,offset:0}">
          <el-form ref="form" :model="form">
            <el-row>
              <el-col :span="8">
                <el-card class="card-message" shadow='never'>
                  <span>小于改数获胜</span>
                  <span class="board-data">48</span>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="card-message" shadow='never'>
                  <span>赔率</span>
                  <span class="board-data">2.005X</span>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="card-message" shadow='never'>
                  <span>中奖概率</span>
                  <span class="board-data">48%</span>
                </el-card>
              </el-col>
            </el-row>
            <div class="custom-slider">
              <div class="low">
                <el-form-item>
                  <el-button type="warning" v-bind:class="{ select: isSelectLow }" @click="selectLow" plain autofocus>猜小
                  </el-button>
                </el-form-item>
              </div>
              <div class="slider">
                <el-form-item>
                  <div class="block">
                    <el-slider v-model="value2"></el-slider>
                  </div>
                </el-form-item>
              </div>
              <div class="high">
                <el-form-item>
                  <el-button type="warning" v-bind:class="{ select: isSelectHigh }" @click="selectHigh" plain>猜大
                  </el-button>
                </el-form-item>
              </div>
            </div>
            <el-row>
              <el-col :xs="{span:24}" :sm="{span:4,offset:0}">
                <el-form-item>
                  <div class="grid-content chip-img">Chip</div>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right;"><img style="margin-top: 3px; width: 16px;"
                        v-bind:src="item.imgsrc" alt=""></span>
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :xs="{span:24}" :sm="{span:12,offset:1}">
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
              <el-col :xs="{span:24}" :sm="{span:6,offset:1}">
                <div class="grid-content text-line money-img ">赢取奖金</div>
                <div class="touzhu">
                  <el-input size="small" v-model="input" disabled>
                    <template slot="append">DICE</template>
                  </el-input>
                </div>
              </el-col>
            </el-row>
            <div class="custom-signon">
              <el-button type="yellow" style="width: 160px;">
                登录
              </el-button>
              <div class="custom-switch">
                <el-form-item>
                  <el-switch
                    style="zoom:1.2"
                    v-model="value3"
                    active-color="#F7A623"
                    active-text="自动投注"
                    inactive-text="关闭">
                  </el-switch>
                  <el-tooltip effect="dark" placement="top-end">
                    <div slot="content">开启自动投注后，将会按当前投注<br/>设定自动投注直至取消,取消会有一<br/>两秒延迟，敬请留意！</div>
                    <el-button size="small" class="el-icon-question"></el-button>
                  </el-tooltip>
                </el-form-item>
              </div>
            </div>
            <div class="data-message">
              <span class="stats">玩局统计</span>
              <span class="reset"><a href="">reset</a></span>
              <el-row>
                <el-col :xs="{span:12}" :md="{span:6}">
                  <img src="../../assets/img/happly.png" alt="">
                  <div class="win">
                    <p>WON</p>
                    <span>2</span>
                  </div>
                </el-col>
                <el-col :xs="{span:12}" :md="{span:6}">
                  <img src="../../assets/img/low.png" alt="">
                  <div class="win">
                    <p>LOST</p>
                    <span>2</span>
                  </div>
                </el-col>
                <el-col :xs="{span:12}" :md="{span:6}">
                  <img src="../../assets/img/PriceTag.png" alt="">
                  <div class="win">
                    <p>WAGERED</p>
                    <span>2</span>
                  </div>
                </el-col>
                <el-col :xs="{span:12}" :md="{span:6}">
                  <img src="../../assets/img/Moneys.png" alt="">
                  <div class="win win-last">
                    <p>PROFIT</p>
                    <span>2</span>
                  </div>
                </el-col>
              </el-row>
            </div>
            <div class="custom-card-reward">
                <div class="custom-reward-textcolor">
                  <span>现在投注可获得投注货币<span>3.125</span>DICE</span>
                </div>
                <el-button
                  size="small"
                  plain
                  @click="open2"
                  class="el-icon-question">
                </el-button>
            </div>
          </el-form>
        </el-col>
      </el-row>
      <div class="custom-all-bets">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="所有投注" name="first">
            <el-table
              :data="tableData2"
              style="width: 100% ;background-color:#313A41 "
              height="500"
              :row-class-name="handleBetRowMyClass"
              :cell-class-name="handleBetCellClass"
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
                label="游戏">
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
          <el-tab-pane label="我的投注" name="second">
            <el-table
              :data="tableData4"
              style="width: 100% ;background-color:#313A41 "
              height="500"
              :row-class-name="handleMyClass"
              :cell-class-name="handleBetCellClass"
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
                label="游戏">
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
        </el-tabs>
      </div>
    </div>
    <div class="cpu-box">
      <ul class="cpu-message">
        <li>
          <p>CPU</p>
          <el-progress type="circle" :percentage="60" :width="50" :stroke-width="3" color="#c53c73"></el-progress>
        </li>
        <li><p style="border-top: 1px solid #4B545B; width: 55px;margin-left: 15px;"></p></li>
        <li>
          <p>NET</p>
          <el-progress type="circle" :percentage="80" :width="50" :stroke-width="3" color="#F7A623"></el-progress>
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
        isSelectHigh:false,
        isSelectLow:true,
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
          date: '1250',
          address: '20.00125'
        },{
          rank: '',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },{
          rank: '5',
          name: '王小虎',
          date: '1250',
          address: '20.00125'
        },],
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
          money: '',
        },{
          date: '2016-05-02',
          name: '王小虎',
          minnum:'226',
          num:'26',
          address: '28.215EOS',
          money: '16.21TGC',
        }],
        tableData4: [{
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
          label: 'EOS',
          imgsrc:'/static/Eos_icon.png'
        }, {
          value: '2',
          label: 'DICE',
          imgsrc:'../../assets/img/Eos_icon.png'
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
      document.getElementsByTagName('svg')[0].children[0].attributes.stroke.nodeValue='#4B545B';
      document.getElementsByTagName('svg')[1].children[0].attributes.stroke.nodeValue='#4B545B';
    })
  },
  methods: {
    selectHigh (){
      this.isSelectHigh=true
      this.isSelectLow=false
    },
    selectLow (){
      this.isSelectHigh=false
      this.isSelectLow=true
    },
    open2() {
      this.$notify({
        title: 'asd',
        message: 'message',
        duration: 0});
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleMyClass({row, rowIndex}){
      console.log(row,rowIndex)
      return 'custom-rank-row'
    },
    handleCellClass({row, column, rowIndex, columnIndex}){
      console.log(column)
      if (columnIndex == 3){
        return 'custom-ranking-cell'
      }else if (columnIndex == 2){
        return 'custom-ranks-cell'
      }else {
        return 'custom-rank-cell'
      }
    },
    handleMyheaderClass ({row, rowIndex}){
      return 'custom-rank-header-row'
    },
    handleHeaderRowClassName (){
      return 'custom-rank-header-cell'
    },
    handleBetCellClass ({row, column, rowIndex, columnIndex}){
      return 'custom-bets-cell'
    },
    handleBetRowMyClass ({row, rowIndex}){
      console.log(row)
      if(row.money==''){
        return 'custom-betslost-row'
      }else {
        return 'custom-betswin-row'
      }
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
.grid-content {
  font-size: 13px;
  font-family: "PingFang SC";
  color: #898a8c;
  padding: 7px 0px 4px 0px;
  background-repeat: no-repeat;
  background-size: 23px auto;
  background-position:left ;
}
/*.rank-img {*/
  /*background-image: url("../../assets/img/rank.png");*/
/*}*/
/*.money-img {*/
  /*background-image: url("../../assets/img/money.png");*/
/*}*/
/*.chip-img {*/
  /*background-image: url("../../assets/img/chip.png");*/
/*}*/
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.touzhu {
  background-color: #3A434C;
  font-size: 14px;
  border-radius: 3px;
  height: 42px;
}
.jine {
  padding-left: 0px;
}
.center-view .touzhu .el-button {
  background-color: #3A434C;
  color: #ffffff;
  border: none;
}
.center-view .touzhu .el-button:hover {
  background-color: #303942;
  color: #ffffff;
  border: none;
}
.text-line {
  line-height: 40px;
}
.card-message {
  border-radius: 0;
  text-align: center;
  background-color: #3A434C;
  color: #fff;
  border:none;
  font-family: "PingFang SC";
  font-weight: 300;
}
.el-slider__runway {
  background-color: #F38F00;
}
.custom-slider {
  padding-top: 30px;
  text-align: center;
}
.low {
  display: inline-block;
  float: left;
}
.slider {
  display: inline-block;
  width: 66%;
}
.high {
  display: inline-block;
  float: right;
}
.custom-subscript {
  margin-top: -10px;
  color: #898a8c;
}
.custom-switch {
  position: absolute;
  top: 0;
  right: 0;
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
  margin-top: 60px;
  position: relative;
  text-align: center;
}
.custom-card-reward {
  padding-left: 50px;
  background-image: url("../../assets/img/Alert.png");
  background-repeat: no-repeat;
  background-position: 12px center;
  margin-top: 20px;
  background-color: #3A434C;
  position: relative;
}
.custom-reward-textcolor {
  color: #ffffff;
  font-family: "PingFang SC";
  line-height: 40px;
  font-size: 14px;
}
.custom-ranking-top {
  font-family: "PingFang SC";
  font-weight: normal;
  text-align: center;
  color: #fff;
  font-size: 19px;
  padding: 19px 0;
  margin: 0;
  position: relative;
}
.cpu-box {
  background-color: #3A434C;
  position: fixed;
  right: 0;
  top: 220px;
  padding-bottom: 20px;
}
.cpu-message {
  font-family: "PingFang SC";
  color: #ffffff;
  text-align: center;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  width: 85px;
}
.data-message {
  margin-top:32px;
  width: 100%;
}
.data-message .stats {
  font-family: "PingFang SC";
  color: #ffffff;
  font-size: 14px;
  line-height: 30px;
}
.data-message .reset {
  font-family: "PingFang SC";
  font-size: 12px;
  line-height: 30px;
  float: right;
}
.data-message .reset a {
  color: #F7A623;
}
.win {
  background-color: #3A434C;
  /*margin-left: 10px;*/
  padding: 10px 0px 10px 55px;
  /*background-image: url("../../assets/img/happly.png");*/
  /*background-repeat: no-repeat;*/
  /*background-position: left;*/
  line-height: 22px;
  font-family: "PingFang SC";
  font-size: 12px;
  border-right: 1px solid rgba(255,255,255,0.1);
}
.win-last {
  border: none;
}
.data-message .el-col {
  position: relative;
}
.data-message img {
  position: absolute;
  top: 50%;
  left: 12px;
  margin-top: -15px;
}
.win p {
  margin: 0;
  color: #e7e7e7;
}
.select {
  background: #F7A623;
  border-color: #F7A623;
  color: #fff;
}
@media (min-width: 768px) {
  .ctrl-board {
    padding: 50px 0;
    color: #ffffff;
  }
  .board-data {
    display: block;
    font-size: 35px;
    font-weight: bold;
    line-height: 60px;
  }
  .custom-card-reward .el-button {
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -19px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: #fff;
    line-height: 20px;
  }
  .custom-ranking-box {
    margin-top: 50px;
    padding-left: 16px;
    background-color: #313A41
  }
  .custom-button-ranking {
    position: absolute;
    right: 60px;
    top: 17px;
  }
  .custom-button-ranking .el-button {
    background-color: transparent;
    color: #fff;
    border: none;
  }
  .center-view .el-form-item {
    margin-bottom: 0px
  }
}
@media (max-width: 767px) {
  .ctrl-board {
    padding: 20px 0;
    color: #ffffff;
  }
  .cpu-box {
    display: none;
  }
  .board-data {
    font-size: 14px;
    font-weight: bold;
  }
  .el-form-item {
    margin-bottom: 0px
  }
  .custom-card-reward .el-button {
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: #fff;
    line-height: 20px;
  }
  .custom-ranking-box {
    margin-top: 10px;
    padding-left: 5px;
    background-color: #313A41
  }
  .custom-button-ranking {
    position: absolute;
    right: 8px;
    top: 17px;
  }
  .custom-button-ranking .el-button {
    background-color: transparent;
    color: #fff;
    border: none;
  }
  .custom-all-bets {
    margin-top: 10px;
    padding: 0 14px;
  }
}
</style>
