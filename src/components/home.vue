<template>
  <div class="home">
    <div class="body">
      <el-col :span="6">
        <div class="prison_situation">
          <h4 class="home_title">监区概况</h4>
          <div class="content">
            <el-col :span="3" style="height: 10px;"></el-col>
            <el-col :span="21">
              <p>监区人数：{{crimalCount_outCrimalCount.Total}}人</p>
              <p>在监人数：{{FlnkIDList4.length}}人</p>
              <p>外出人数（监内）：{{FlnkIDList1.length}}人</p>
              <p>外出人数（监外）：{{crimalCount_outCrimalCount.OutCount}}人</p>
              <p>非法流动人数：{{FlnkIDList2.length}}人</p>
            </el-col>
          </div>
        </div>
        <div class="member_distribute">
          <h4 class="home_title">人员分布</h4>
          <div class="cycle_chart">
            <div id="myChart"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="floating_personnel">
          <h4 class="home_title">流动人员
            <span class="float">（非法流动{{FlnkIDList2.length}}人，</span>
            <span class="out">本监外出{{FlnkIDList1.length}}人）</span>
          </h4>
          <el-row class="float_person_wrap">
            <el-col :span="8" v-for="(item,index) in FlnkIDList2.slice(float_personnelA-1,float_personnelB)" :key='1' :class="">
              <div class="float_person_card illegal" :class="item.prisonstatus">
                <el-col :span="10" class="photo">
                  <img :src="item.Photo" alt="" width="100%" height="100%">
                </el-col>
                <el-col :span="12" class="crimal_content">
                  <p>姓名：{{item.CriminalName}}</p>
                  <p>罪犯编号：{{item.CriminalID}}</p>
                  <!--<p>当前区域：{{item.area}}</p>-->
                  <!--<p>外出地点：{{item.destination}}</p>-->
                  <!--<p>陪同民警：{{item.withplace}}</p>-->
                  <p>外出时间：{{item.UpdateTime}}</p>
                  <!--<p>外出事由：{{item.outreasons}}</p>-->
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="8" style="height: 10px"></el-col>
            <el-col :span="8" >
              <div class="pages">
                <span class="pageControl" @click="floating_personnelBack"><img src="../assets/q1.png" alt=""/></span>
                <span class="pagesText">{{float_personnelNowPage}}/{{float_personnelAllPages}}</span>
                <span class="pageControl" @click="floating_personnelGo"><img src="../assets/q2.png" alt=""/></span>
              </div>
            </el-col>
            <el-col :span="8" style="height: 10px"></el-col>
          </el-row>
        </div>
        <div class="outside_persion_personnel">
          <h4 class="home_title">外监进入人员
            <span class="float">（外监进入{{FlnkIDList3.length}}人）</span>
          </h4>
          <el-row class="outside_person_wrap">
              <el-col :span="6" v-for="(item,index) in FlnkIDList3.slice(outside_persion_personnelsA-1,outside_persion_personnelsB)" :key="2">
              <div class="outside_person_card outperson" :class="item.prisonstatus">
                <el-col :span="6" class="photo">
                  <img alt="" width="100%" height="100%" :src="item.Photo">
                </el-col>
                <el-col :span="16" class="crimal_content">
                  <p>姓名：{{item.CriminalName}}</p>
                  <p>罪犯编号：{{item.CriminalID}}</p>
                  <!--<p>所属监区：{{item.area}}</p>-->
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="8" style="height: 10px"></el-col>
            <el-col :span="8" >
              <div class="pages">
                <span class="pageControl" @click="outside_persion_personnelsBack"><img src="../assets/q1.png" alt=""/></span>
                <span class="pagesText">{{outside_persion_personnelsNowPage}}/{{outside_persion_personnelsAllPages}}</span>
                <span class="pageControl" @click="outside_persion_personnelsGo"><img src="../assets/q2.png" alt=""/></span>
              </div>
            </el-col>
            <el-col :span="8" style="height: 10px"></el-col>
          </el-row>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
export default {
  name: 'home',
  props:[
    'FlnkIDList1',
    'FlnkIDList2',
    'FlnkIDList3',
    'FlnkIDList4',
    'chartsDatas',
    'chartsDatasName',
    'crimalCount_outCrimalCount'
  ],
  data () {
    return {
      float_personnelAllPages:'1',//非法流动总页数
      float_personnelNowPage:1,//非法流动当前页
      float_personnelListAll:0,//非法流动总数
      float_personnelA:1,
      float_personnelB:6,

      outside_persion_personnelsAllPages:'1',//外监来犯总页数
      outside_persion_personnelsNowPage:1,//外监来犯当前页
      outside_persion_personnelsListAll:0,//外监来犯总数
      outside_persion_personnelsA:1,
      outside_persion_personnelsB:4,

      chartsChange:[],
    }
  },
  methods:{
    /* 人员分布图表 */
    charts:function () {
      let vm = this
      let myCharts = echarts.init(document.getElementById('myChart'))
      vm.chartsChange = vm.chartsDatas;
      let option = {
        backgroundColor: 'transparent',
        legend: {
          orient: 'horizontal',
          top: '0%',
          data: vm.chartsDatasName
        },
        tooltip : {
          trigger: 'item',
          formatter: "{b} : {c}人 ({d}%)"
        },
        series: [{
          type: 'pie',
          selectedMode: 'single',
          radius: ['45%', '78%'],
          hoverAnimation :false,
          color: ['#98c93c', '#22b9d6', '#f9a61a', '#cf445b','#AF89D6','#59ADF3'],
          label: {
            normal: {
              position: 'outer',
              formatter: '{d}%',
              textStyle: {
                color: '#333',
                fontWeight: 'bold',
                fontSize: 14
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#333'
              },
              smooth: 0.0,
              length: 8,
              length2: 16
            }
          },
          data: vm.chartsDatas
        }]
      };
      myCharts.setOption(option)
    },
    floating_personnelGo:function () {
      if(this.float_personnelNowPage<this.float_personnelAllPages){
        this.float_personnelNowPage=this.float_personnelNowPage+1
        this.float_personnelA=this.float_personnelA+6
        this.float_personnelB=this.float_personnelB+6
      }else {
//        alert("已经最后一页了")
      }
    },
    floating_personnelBack:function () {
      if(this.float_personnelNowPage === 1){
//        alert("已经是第一页了")
      }else {
        this.float_personnelNowPage=this.float_personnelNowPage-1
        this.float_personnelA=this.float_personnelA-6
        this.float_personnelB=this.float_personnelB-6
      }

    },
    outside_persion_personnelsGo:function () {
      if(this.outside_persion_personnelsNowPage<this.outside_persion_personnelsAllPages){
        this.outside_persion_personnelsNowPage=this.outside_persion_personnelsNowPage+1
        this.outside_persion_personnelsA=this.outside_persion_personnelsA+4
        this.outside_persion_personnelsB=this.outside_persion_personnelsB+4
      }else {
//        alert("已经最后一页了")
      }
    },
    outside_persion_personnelsBack:function () {
      if(this.outside_persion_personnelsNowPage === 1){
//        alert("已经是第一页了")
      }else {
        this.outside_persion_personnelsNowPage=this.outside_persion_personnelsNowPage-1
        this.outside_persion_personnelsA=this.outside_persion_personnelsA-4
        this.outside_persion_personnelsB=this.outside_persion_personnelsB-4
      }

    }

  },
  mounted(){
    var vm = this
    setInterval(function () {
      if(vm.chartsChange !== vm.chartsDatas){
        vm.charts()
      }
      vm.float_personnelListAll=vm.FlnkIDList2.length
      vm.float_personnelAllPages=Math.ceil(vm.FlnkIDList2.length/6)===0?1:Math.ceil(vm.FlnkIDList2.length/6)
      vm.outside_persion_personnelsListAll=vm.FlnkIDList3.length
      vm.outside_persion_personnelsAllPages=Math.ceil(vm.FlnkIDList3.length/4)===0?1:Math.ceil(vm.FlnkIDList3.length/4)
    },400)


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .home{
    height: 780px !important;
  }
  #myChart{
    height:480px;
  }
  .body{
    height: 100%;
    color:#000;
    padding: 25px;
    overflow: hidden;
    padding-top: 0;
    .home_title{
      color: #2553ff;
      text-shadow: -1px 1px 0px #fff;
      margin: 10px 20px;
      font-size: 20px;
      font-weight:bold;
      text-align: left;
    }
    .pages{
      width: 273px;
      height: 50px;
      margin: 0px auto;
      margin-top: 20px;
    }
    .pagesText {
      font-size: 24px;
      display: inline-block;
      width: 155px;
      text-align: center;
    }
    .prison_situation{
      height: 300px;
      background: rgba(255,255,255,.8);
      text-align: left;
      overflow: auto;
      margin-bottom: 20px;
      .content{
        p{
          font-size: 16px;
          line-height: 48px;
          font-weight: bold;
          margin: 0;
        }
      }
    }
    .member_distribute{
      height:470px;
      background: rgba(255,255,255,.8);
      overflow: hidden;
      text-align: left;
    }
    .floating_personnel{
      background: rgba(255,255,255,.8);
      overflow: hidden;
      height: 510px;
      margin-bottom: 20px;
      margin-left: 20px;
      .float{
        color: #8a2648;
        text-shadow: none;
        font-size: 16px;
      }
      .out{
        color: #0061ff;
        text-shadow: none;
        font-size: 16px;
      }
      .float_person_wrap{
        padding: 0 40px;
        height: 380px;
        .float_person_card{
          padding: 10px;
          height: 150px;
          margin: 10px 10px;
          .photo{
            height:100%;
          }
        }
        .outperson{
          background: #196fff;
        }
        .illegal{
          background: #93374e;
        }
        .crimal_content{
          color: #fff;
          font-size: 12px;
          text-align: left;
          margin-left: 10px;
          overflow: hidden;
          p{
            margin: 0;
            line-height: 22px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .outside_persion_personnel{
      background: rgba(255,255,255,.8);
      overflow: hidden;
      height: 260px;
      margin-left: 20px;
      .outside_person_wrap{
        padding: 20px 10px;
        height:140px;
        .outside_person_card{
          padding: 10px;
          height: 100px;
          margin: 5px 10px;
          background: #481fac;
          .photo{
            height:100%;
          }
        }
        .crimal_content{
          color: #fff;
          font-size: 12px;
          text-align: left;
          margin-left: 10px;
          overflow: hidden;
          p{
            margin: 0;
            line-height: 28px;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }


</style>
