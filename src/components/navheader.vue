<template>
  <el-row class="navheader" >
    <el-col :span="8" class="logo" v-show="logoIsShow">
      <el-col :span="2"><img src="../assets/hui.png" alt=""></el-col>
      <el-col :span="22"><p>区域定位管控系统</p></el-col>
    </el-col>
    <el-col :span="8" class="logo logo-hui" v-show="!logoIsShow">
      <el-col :span="2"><img src="../assets/hu.png" alt=""></el-col>
      <el-col :span="22"><p>区域定位管控系统</p></el-col>
    </el-col>
    <el-col :span="8" class="logo"></el-col>
    <el-col :span="8" class="navoption">
      <el-col :span="22">
        <p>
          <span @click="$emit('getPosition')" class="nowposition">当前位置：{{ message }}</span>
          <span>{{localTime}}</span>
          <span>{{localWeek}}</span>
          <span>{{localYear}}</span>
        </p>
        <p>
          <span class="nav-plan">正在计划点名中</span><span class="nav-plan-time">计划清点：16:35-16:45</span>
        </p>
      </el-col>
      <el-col :span="2">
        <a href="" class="nav-mobile"><img src="../assets/mobile.png" alt=""></a>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
  import axios from 'axios'
  import { shanlei } from '../config'
  export default {

    name: 'navheader',
    props:{
      message:String
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
          var Months = new Date().getMonth()
          var Days = new Date().getDay()
          var getDay = new Date().getDay()
          var Hours = new Date().getHours()
          var Minutes = new Date().getMinutes()
          var Seconds = new Date().getSeconds()
          var getTime = Hours + ':' + Minutes + ':' + Seconds
          var getYear = Year + '-' + Months + '-' + Days
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
