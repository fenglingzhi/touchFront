<template>
  <div class="home">
    <div class="body">
      <el-col :span="6">
        <div class="prison_situation">
          <h4 class="home_title">监区概况</h4>
          <div class="content">
            <el-col :span="3" style="height: 10px;"></el-col>
            <el-col :span="21">
              <p>监区人数：{{prison_situations[0].prison_num}}人</p>
              <p>在监人数：{{prison_situations[0].in_prison_num}}人</p>
              <p>外出人数（监内）：{{prison_situations[0].out_prison_num_in}}人</p>
              <p>外出人数（监外）：{{prison_situations[0].out_prison_num_out}}人</p>
              <p>非法流动人数：{{prison_situations[0].float_num}}人</p>
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
            <span class="float">（非法流动{{float_personnel[0].float}}人，</span>
            <span class="out">本监外出{{float_personnel[0].out}}人）</span>
          </h4>
          <el-row class="float_person_wrap">
            <el-col :span="8" v-for="item in float_person_cards" :key='1'>
              <div class="float_person_card" :class="item.prisonstatus">
                <el-col :span="10" class="photo">
                  <img :src="item.imgurl" alt="" width="100%" height="100%">
                </el-col>
                <el-col :span="12" class="crimal_content">
                  <p>姓名：{{item.name}}</p>
                  <p>罪犯编号：{{item.crimalNum}}</p>
                  <p>当前区域：{{item.area}}</p>
                  <p>外出地点：{{item.destination}}</p>
                  <p>陪同民警：{{item.withplace}}</p>
                  <p>外出时间：{{item.outtime}}</p>
                  <p>外出事由：{{item.outreasons}}</p>
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="8" style="height: 10px"></el-col>
            <el-col :span="8" >
              <div class="pages">
                <span class="pageControl"><img src="../assets/q1.png" alt=""/></span>
                <span class="pagesText">11/30</span>
                <span class="pageControl"><img src="../assets/q2.png" alt=""/></span>
              </div>
            </el-col>
            <el-col :span="8" style="height: 10px"></el-col>
          </el-row>
        </div>
        <div class="outside_persion_personnel">
          <h4 class="home_title">外监进入人员</h4>
          <el-row class="outside_person_wrap">
            <el-col :span="6" v-for="item in FlnkIDList2" :key="2">
              <div class="outside_person_card" :class="item.prisonstatus">
                <el-col :span="6" class="photo">
                  <img :src="item.Photo" alt="" width="100%" height="100%">
                </el-col>
                <el-col :span="16" class="crimal_content">
                  <p>姓名：{{item.CriminalName}}</p>
                  <p>罪犯编号：{{item.CriminalName}}</p>
                  <p>所属监区：{{item.CriminalName}}</p>
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row >
            <el-col :span="8" style="height: 10px"></el-col>
            <el-col :span="8" >
              <div class="pages">
                <span class="pageControl"><img src="../assets/q1.png" alt=""/></span>
                <span class="pagesText">11/30</span>
                <span class="pageControl"><img src="../assets/q2.png" alt=""/></span>
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
  props:{
    FlnkIDList2:[]
  },
  data () {
    return {
      // 监区概况
      prison_situations: [
        {prison_num: 200, in_prison_num: 100, out_prison_num_in: 123, out_prison_num_out: 234, float_num: 345}
      ],
      float_personnel: [
        {float: 12, out: 13}
      ],
      float_person_cards: [
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'illegal'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'illegal'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'illegal'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'outperson'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'outperson'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'outperson'
        }
      ],
      outside_persion_personnels: [
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'illegal'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'illegal'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'illegal'
        },
        {
          imgurl: '/static/img/crimal_1_03.5a235b3.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无',
          prisonstatus: 'outperson'
        }
      ],
      chartsData:[
        {
          value: 3661,
          name: '条目一'
        }, {
          value: 5713,
          name: '条目二'
        }, {
          value: 9938,
          name: '条目三'
        }, {
          value: 17623,
          name: '条目四'
        }
      ]
    }
  },
  methods:{
    /* 人员分布图表 */
    charts:function () {
      let myCharts = echarts.init(document.getElementById('myChart'))
      let chartsDataName = []
      for(let i=0; i<this.chartsData.length; i++){
          chartsDataName.push(this.chartsData[i].name)
      }
      let option = {
        backgroundColor: 'transparent',
        legend: {
          orient: 'horizontal',
          top: '0%',
          data: chartsDataName
        },
        series: [{
          type: 'pie',
          selectedMode: 'single',
          radius: ['45%', '78%'],
          hoverAnimation :false,
          color: ['#98c93c', '#22b9d6', '#f9a61a', '#cf445b'],
          label: {
            normal: {
              position: 'inner',
              formatter: '{d}%',
              textStyle: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 14
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          data: this.chartsData
        }]
      };
      myCharts.setOption(option)
    }

  },
  mounted(){
    this.charts()
    console.log('home',this.FlnkIDList2)
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
      height:520px;
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
      height: 310px;
      margin-left: 20px;
      .outside_person_wrap{
        padding: 20px 10px;
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
