<template>
  <el-row class="navheader" >
    <el-col :span="8" class="logo" v-if="onlinestatus == true">
      <el-col :span="2"><img src="../assets/hui.png" alt=""></el-col>
      <el-col :span="22"><p style="width: 500px">区域定位管控系统</p></el-col>
    </el-col>
    <el-col :span="8" class="logo logo-hui" v-else>
      <el-col :span="2"><img src="../assets/hu.png" alt=""></el-col>
      <el-col :span="22"><p  style="width: 500px">区域定位管控系统</p></el-col>
    </el-col>
    <!--<el-col :span="8" class="logo"></el-col>-->
    <el-col :span="10" class="navoption">
      <el-col :span="22">
        <p>
          <span @click="$emit('getPosition')" class="nowposition">当前位置：{{ message }}</span>
          <span style="float: right">{{localYear}}</span>
          <span style="float: right">{{localWeek}}</span>
          <span style="float: right">{{localTime}}</span>
        </p>
        <p v-if="plan">
          <span class="nav-plan">{{ plan }}</span><span class="nav-plan-time">计划清点：{{ planStartTime }} - {{planEndTime}}</span>
        </p>
        <p v-if="NextTime">
          <span class="nav-plan">下次{{ plan }}</span><span class="nav-plan-time">计划清点：{{ NextTime }}</span>
        </p>
      </el-col>
      <el-col :span="2">
        <a @click="$emit('aaa')" class="nav-mobile"><img src="../assets/mobile.png" alt=""></a>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  import axios from 'axios'
  import { BasicUrl } from '../config'
  export default {

    name: 'navheader',
    props:{
      message:String,
      plan:'',
      planStartTime:'',
      planEndTime:'',
      onlinestatus:true,
      NextTime:''
    },
    data () {
      return {
        logoIsShow: true,
        localTime: '',
        localWeek: '',
        localYear: '',
      }
    },
    beforeCreate () {

    },
    methods: {
      /* 导航时间计时器 */
      TimerFormat: function () {
        var vm = this;


        setInterval(function () {
          var Year = new Date().getFullYear()
          var Months = new Date().getMonth()+1
          var Days = new Date().getDate()
          var getDay = new Date().getDay()
          var Hours = new Date().getHours()>9?new Date().getHours():"0"+new Date().getHours()
          var Minutes = new Date().getMinutes()>9?new Date().getMinutes():"0"+new Date().getMinutes()
          var Seconds = new Date().getSeconds()>9? new Date().getSeconds():"0"+ new Date().getSeconds()
          var getTime = Hours + ':' + Minutes + ':' + Seconds
          var getYear = Year + '年' + Months + '月' + Days + '日'
          /*收工语言提示*/
          var overTime=localStorage.getItem("overTime")
//          var overTime="15:23:00"
          if(overTime!=null&&overTime!=""){
            var timeList=overTime.split(":")
            if(Hours==timeList[0]&&Minutes==timeList[1]&&Seconds==timeList[2]){
                alert("收工时间到啦")
              vm.$emit("workOut","workOut")
            }
          }

          var week
          if (getDay === '0') {
            week = '星期日'
          } else if (getDay == '1') {
            week = '星期一'
          } else if (getDay == '2') {
            week = '星期二'
          } else if (getDay == '3') {
            week = '星期三'
          } else if (getDay == '4') {
            week = '星期四'
          } else if (getDay == '5') {
            week = '星期五'
          } else if (getDay == '6') {
            week = '星期六'
          }
          vm.localTime = getTime
          vm.localWeek = week
          vm.localYear = getYear
        }, 1000)

      }
    },
    mounted(){
      this.TimerFormat()

    }
  }
</script>
<style lang="scss">
.navheader{
  p{
    margin: 0;
  }
  height: 122px;
  color: #fff;
  font-size: 20px;
  .logo{
    padding: 30px;
    p{
      margin: 0;
      text-align: left;
      line-height: 54px;
      margin-left: 40px;
      font-size: 36px;
    }
  }
  .logo-hui{
    p{
      color: #bbb;
    }
  }
  .navoption{
    padding: 30px 30px 0 0;
    float: right;
    p{
      text-align: left;
      font-size: 14px;
      font-weight: bold;
      line-height:28px;
      span{
        margin: 0 5px;
      }
    }
    .nowposition{
      cursor: pointer;
    }
    .nav-plan{
      color: #28ff00;
    }
    .nav-plan-time{
      color: #ffd800;
      float: right;
    }
  }
}
</style>
