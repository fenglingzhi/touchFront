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
                        <img :src="criminalsituationLsit[0].MapUrl" alt="" ref="abc">
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
                      <el-col :span="8" v-for="(item,index) in criminalsituationLsit" :key="1">
                        <div class="criminal" v-on:click="select(index)" :class="['criminal',{criminal_active:item.status}]">
                          <img :src="item.Photo" width="100%" height="130px" alt=""/>
                          <span class="criminalName">{{item.PSName}}</span>
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
  import { SHANLEI,IMG,ajaxUrl,MapUrl } from '../../config'

  export default {
    name: 'navheader',
    props:[
      'mapList',
      'criminalList'
    ],

    data () {
      return {
        criminalLists:[
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
        criminalGroupIDs:'9C4CE802-D8AB-4172-AC11-15578F19B0FC',
        criminalsituationLsit:[]
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
      pointS:function () {
        let vm = this
        let criminalGroup  = {
          Header: {
            MsgID:"201501260000000035",
            MsgType:36
          },
          Body: JSON.stringify({
            CriminalGroupID:vm.criminalGroupIDs
          })
        }
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
//          dataType: "jsonp",
          dataType:'json',
//          jsonp: "callback",
          async: false,
//          url: ajaxUrl,
          url:'http://rapapi.org/mockjsdata/23163/maps',
          data:JSON.stringify(criminalGroup),
          success: function (result) {
            console.log('地图定位信息',result.data)
//            var criminalFlinkID = []//互监组人员id列表
//            for(let i = 0; i<result.data.length; i++){
//              criminalFlinkID.push(result.data[i].CriminalID)
//            }
            console.log('11111111111',vm.mapList[0])
            var MapIdList = []//地图id列表]
            var MapUrls=''
            for(let i = 0; i<result.data.length; i++){
              MapIdList.push(result.data[i].MapID)
//              MapUrls=vm.mapList[0]['c1313a92-6387-4d1a-bfbd-618441657968'].MapUrl
              /* 互监组成员信息 */
              vm.criminalsituationLsit.push({
                PSName:result.data[i].PSName,
                CriminalID:result.data[i].CriminalID,
                CriminalX:result.data[i].X,
                CriminalY:result.data[i].Y,
//                CriminalPhoto:vm.criminalList[0][result.data[i].CriminalID]
                MapUrl:MapUrl+'/Maps/20170608104303监舍2F.svg'
              })
            }
            console.log('eeeeeeeeeeeee',vm.criminalsituationLsit)
            for(let i = 0; i< result.data.length; i++){
              var html ='<div class="point" style="top:'+result.data[i].X+'px; left: '+result.data[i].Y+'px"></div>'
              $('.map').append(html)
            }
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });


      },

    },
    mounted () {
      let vm = this
      /* Coding By YanM */
      if(vm.criminalList!==null || vm.mapList!==null){

      }
      vm.pointS()

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
