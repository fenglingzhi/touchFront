<template>
  <!--<div class="navheader">人员清点</div>-->
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li4_parts">
        <div class="tab1">
          <div class="partsBody">
            <div class="bodyHead">
              <div class="title">互监组详情</div>
            </div>
            <div class="bodyCon">
              <el-row >
                <el-col :span="16">
                  <div style="height:0px;"></div>
                  <el-row >
                    <el-row >
                      <div class="map">
                        <img src="../../../static/cimg.jpg" alt="" ref="abc">
                        <!--<div class="point" v-for="(item,index) in criminalList" :style="{'top':item.top,'left':item.left}"></div>-->
                        <!--<div class="point" v-for="(item,index) in criminalList"></div>-->
                      </div>
                    </el-row>
                  </el-row>
                </el-col>
                <el-col :span="2" style="height:10px;">
                  <!--中间空隙-->
                </el-col>
                <el-col :span="6">
                  <el-row >
                    <div class="deailBody">
                      <el-col :span="8" v-for="(item,index) in criminalList.slice(0,9)" :key="1">
                        <div class="criminal" v-on:click="select(index)" :class="['criminal',{criminal_active:item.status}]">
                          <img :src="item.Photo" width="100%" height="130px" alt=""/>
                          <span class="criminalName">{{item.CriminalName}}</span>
                        </div>
                      </el-col>
                    </div>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="partsFoot">
            <div style="margin: 20px 2px;float: right">
              <div class="sure" v-on:click="submit()">关闭</div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="1"  style="height:10px"></el-col>
  </el-row>

</template>

<script>
  import { SHANLEI,IMG } from '../../config'

  export default {
    name: 'navheader',
    props:[
      'mapList'
    ],

    data () {
      return {
        criminalList:[
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:123,
            top:123
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:70,
            top:70
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:180,
            top:180
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:44,
            top:44
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:66,
            top:66
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:140,
            top:140
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:160,
            top:160
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:20,
            top:20
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:11,
            top:11
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:30,
            top:30
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:100,
            top:100
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            Photo:'../../static/crimal_1_03.jpg',
            status:false,
            left:120,
            top:120
          },
        ],
      }
    },
    methods: {
      /* 选择互监组成员 */
      select:function (index) {
        let vm = this
        for(let i = 0; i<vm.criminalList.length; i++){
          vm.criminalList[i].status = false
        }
        vm.criminalList[index].status = true
      },
      /* 地图定位 */
      point:function () {
        let vm = this
        for(let i = 0; i< vm.criminalList.length; i++){
          var html ='<div class="point" style="top:'+vm.criminalList[i].top+'px; left: '+vm.criminalList[i].left+'px"></div>'
          $('.map').append(html)
        }

      },
    },
    mounted () {
      let vm = this
      /* Coding By YanM */
      this.point()
      console.log('jjjjjjjjjjjj',vm.mapList)
      /* Coding By YanM */
    }
  }
</script>

<style lang="scss">
  .li4_parts {
    height: 740px;
    margin: 0px auto;
  }
  .li4_parts .deailBody{
    background: #d9e3fe;
    height: 550px;
    padding: 20px;
  }
  .li4_parts .partsBody{
    width: 100%;
    height: 695px;
    background: white;
  }
  .li4_parts .partsBody {
    width: 100%;
    height: 675px;
    background: white;
  }
  .li4_parts .partsFoot{
    width: 100%;
    height: 84px;
    background: #c5cfdb;
  }
  .li4_parts .bodyCon{
    height: 592px;
    padding: 20px;
  }
  .li4_parts .sure{
    width: 126px;
    height: 40px;
    background: #004bdc;
    text-align: center;
    color: white;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 2px;
    float: right;
    margin: 0px 35px;
  }
  .li4_parts .criminal{
    height: 150px;
    background: #0048d9;
    margin:10px 5px;
    padding: 5px;
  }
  .li4_parts .criminalName {
    font-size: 12px;
    color: white;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 99%;
  }
  .li4_parts .bodyHead{
    width: 100%;
    height: 46px;
    background: #c5cfdb;
  }
  .li4_parts .title{
    font-size: 25px;
    font-weight: 800;
    color: #1d68e8;
    text-shadow: 2px 2px 2px #fff;
    line-height: 45px;
    text-indent: 15px;
    float: left;
  }
  .criminal_active{
    background: #ce8900 !important;
  }
  .map{
    position: relative;
    display: inline-block;
    img{
      display: block;
    }
  }
  .point{
    width: 10px;
    height:10px;
    background: red;
    position: absolute;
  }

</style>
