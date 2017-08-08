<template>
  <!--<div class="navheader">人员清点</div>-->

  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li2_parts">
        <!--<div class="tabHead">-->
        <!--<div class="tab"  v-on:click="toggle()">人员清点</div>-->
        <!--<div class="tab tabing"  v-on:click="toggle()">清点记录</div>-->
        <!--</div>-->
        <div class="tabHead">
          <div  :class="['tab', { tabing: isB1}]"  v-on:click="toggle1()">工具清点</div>
          <div  :class="['tab', { tabing: isB2}]"  v-on:click="toggle2()">清点记录({{recordCount}})</div>
        </div>
        <div class="tab1" v-show="isShow1">
          <div class="partsBody" style="height:392px;">
            <div class="bodyHead">
              <div class="title">柜内工具</div>
              <div class="titleDescribe">（柜内工具总数：200个，<span style="color: #1443cd">已点工具{{toolCalledCount}}个</span>）</div>
            </div>
            <div class="bodyCon">
              <el-col :span="2" v-for="criminal in inCriminals" :key="1">
                <div class="criminal" >
                  <img :src="criminal.headimg" width="98%" height="85" alt=""/>
                  <span class="criminalName">{{ criminal.name }}</span>
                </div>
              </el-col>

            </div>
            <el-row >
              <el-col :span="8" style="height: 10px"></el-col>
              <el-col :span="8" >
                <div class="pages">
                  <span class="pageControl"><img src="../../assets/q1.png" alt=""/></span>
                  <span class="pagesText">11/30</span>
                  <span class="pageControl"><img src="../../assets/q2.png" alt=""/></span>
                </div>
              </el-col>
              <el-col :span="8" style="height: 10px"></el-col>
            </el-row>
          </div>
          <div class="partsBody" style="height:260px;">
            <div class="bodyHead">
              <div class="title">柜外工具</div>
            </div>
            <div class="bodyCon" style="height: 135px;">
              <el-col :span="2" v-for="criminal in outCriminals" :key="1">
                <div class="criminal" >
                  <img :src="criminal.headimg" width="98%" height="85" alt=""/>
                  <span class="criminalName">{{ criminal.name }}</span>
                </div>
              </el-col>

            </div>
            <el-row >
              <el-col :span="8" style="height: 10px"></el-col>
              <el-col :span="8" >
                <div class="pages">
                  <span class="pageControl"><img src="../../assets/q1.png" alt=""/></span>
                  <span class="pagesText">11/30</span>
                  <span class="pageControl"><img src="../../assets/q2.png" alt=""/></span>
                </div>
              </el-col>
              <el-col :span="8" style="height: 10px"></el-col>
            </el-row>
          </div>
          <div class="partsFoot">
            <div style="margin: 13px 2px;float: right">
              <div class="sure">手动确定</div>
              <div class="sure">手动结束</div>
            </div>
          </div>
        </div>
        <div class="tab2" v-show="isShow2">
          <div class="partsBody" style="height:697px;">

            <div class="bodyCon">

              <table  border="1" width="100%">
                <tr>
                  <th>清点类型</th>
                  <th>清点时间</th>
                  <th>应点总数</th>
                  <th>实点总数</th>
                  <th>柜内已点</th>
                  <th>柜外已点</th>
                  <th>未点总数</th>
                  <th>清点人姓名</th>
                  <th>清点状态</th>
                </tr>
                <tr v-for="record in records" :key="1">
                  <td>{{record.CountTypeName}}</td>
                  <td>{{(record.CountTime==""||record.CountTime==null)?"":record.CountTime.replace("T"," ")}}</td>
                  <td>{{record.ShouldCount}}</td>
                  <td>{{record.RealCount}}</td>
                  <td>{{record.InnerCount}}</td>
                  <td>{{record.OutterCount}}</td>
                  <td>{{record.UnCount}}</td>
                  <td>{{record.PoliceName}}</td>
                  <td>{{record.StatusName}}</td>
                </tr>
              </table>

            </div>
            <el-row >
              <el-col :span="8" style="height: 10px"></el-col>
              <el-col :span="8" >
                <div class="pages">
                  <span class="pageControl"><img src="../../assets/q1.png" v-on:click="getRecordback()" alt=""/></span>
                  <span class="pagesText">{{recordPage+1}}/{{Math.ceil(recordCount/20)==0?1:Math.ceil(recordCount/20)}}</span>
                  <span class="pageControl"><img src="../../assets/q2.png" v-on:click="getRecordGo()" alt=""/></span>
                </div>
              </el-col>
              <el-col :span="8" style="height: 10px"></el-col>
            </el-row>
          </div>
        </div>

      </div>
    </el-col>
    <el-col :span="1"  style="height:10px"></el-col>
  </el-row>

</template>

<script>

  export default {
    name: 'navheader',
    beforeCreate () {
      /* Coding By YanM */

      /* Coding By YanM */
      /*Coding By Qianjf */


      /*Coding By Qianjf */

    },
    data () {
      return {
        // 柜内工具
        inCriminals: [
          {name: '12321', headimg: '/static/img/tol.png'},
          {name: '123', headimg: '/static/img/tol.png'},
          {name: '44', headimg: '/static/img/tol.png'},
          {name: '6', headimg: '/static/img/tol.png'},
          {name: '7532', headimg: '/static/img/tol.png'},
          {name: '24556', headimg: '/static/img/tol.png'},
          {name: '66676', headimg: '/static/img/tol.png'},
          {name: '7788', headimg: '/static/img/tol.png'},
          {name: '9999', headimg: '/static/img/tol.png'},
          {name: '23445', headimg: '/static/img/tol.png'},
          {name: '123344', headimg: '/static/img/tol.png'},
          {name: '123344', headimg: '/static/img/tol.png'},
          {name: '123344', headimg: '/static/img/tol.png'},
          {name: '123344', headimg: '/static/img/tol.png'},
          {name: '123344', headimg: '/static/img/tol.png'},
          {name: '5555666', headimg: '/static/img/tol.png'}
        ],
        // 柜外工具

        outCriminals: [
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'}

        ],
        isShow1: true,
        isShow2: false,
        isB1: true,
        isB2: false,
        records:[],
        recordPage:0,
        recordIsLastPage:false,
        recordCount:0,
        toolCalledCount:0//已点工具总数
      }
    },
    methods: {
      toggle1: function () {
        this.isShow1 = true
        this.isShow2 =false
        this.isB1 =  true
        this.isB2 = false
        this.recordPage=0
      },
      toggle2: function () {
        this.isShow1 = false
        this.isShow2 = true
        this.isB1 = false
        this.isB2 = true
      },
      getRecordGo:function () {
        var vm = this
        if(!vm.recordIsLastPage){
          localStorage.setItem("OrgID","43368189-CE77-4721-BAA7-1545BB3E5A42")
          vm.recordPage=vm.recordPage+1
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.recordPage,"PageSize":20},
            url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCntRecord' + "?callback=?",
            success: function (result) {
                if(result.length!=20){
                    vm.recordIsLastPage=true
                }else {
                  vm.recordIsLastPage=false
                }
              vm.records=result
            },
            error: function (err) {
              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }else {
            alert("已经到了最后一页了")
        }
//      获取总条数
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data:{"OrgID":localStorage.getItem("OrgID")},
          url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCntRecordsCount' + "?callback=?",
          success: function (result) {
            vm.recordCount=result
          },
          error: function (err) {
            alert("请求异常")
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });

      },
      getRecordback:function () {
        var vm = this
        console.log(vm.recordPage)
        if(vm.recordPage==0){
            alert("已经是第一页了")
        }else {
          vm.recordPage=vm.recordPage-1
          localStorage.setItem("OrgID","43368189-CE77-4721-BAA7-1545BB3E5A42")
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.recordPage,"PageSize":20},
            url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCntRecord' + "?callback=?",
            success: function (result) {
              if(result.length!=20){
                vm.recordIsLastPage=true
              }else {
                vm.recordIsLastPage=false
              }
              vm.records=result
            },
            error: function (err) {
              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
          //      获取总条数
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID")},
            url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCntRecordsCount' + "?callback=?",
            success: function (result) {
              vm.recordCount=result
            },
            error: function (err) {
              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }


      }
    },
    mounted () {
      /* Coding By YanM */

      /* Coding By YanM */
      /* Coding By Qianjf */
      var vm = this
      localStorage.setItem("OrgID","43368189-CE77-4721-BAA7-1545BB3E5A42")
//      获取第一页记录数据
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":0,"PageSize":20},
        url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCntRecord' + "?callback=?",
        success: function (result) {
          if(result.length!=20){
            vm.recordIsLastPage=true
          }else {
            vm.recordIsLastPage=false

          }
          vm.records=result
        },
        error: function (err) {
          alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });
//      获取总记录条数
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID")},
        url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCntRecordsCount' + "?callback=?",
        success: function (result) {
          vm.recordCount=result
        },
        error: function (err) {
          alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });
//      获取已点工具总数,本监区工具总数
      setInterval(function () {
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data:{"OrgID":localStorage.getItem("OrgID")},
          url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCalledCount' + "?callback=?",
          success: function (result) {
            vm.toolCalledCount=result
          },
          error: function (err) {
            alert("请求异常")
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data:{"OrgID":localStorage.getItem("OrgID")},
          url: 'http://10.58.1.145:88/api/ToolCnt/GetToolCalledCount' + "?callback=?",
          success: function (result) {
            vm.orgCriminalCount=result
          },
          error: function (err) {
            alert("请求异常")
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });
      },1000)

      /* Coding By Qianjf */

    }

  }
</script>

<style>
  .home{
    height: 836px;
  }
  .li2_parts {
    height: 740px;
    margin: 0px auto;
  }
  .li2_parts .tabHead{
    width: 100%;
    height: 40px;
  }
  .li2_parts .tab{
    width: 155px;
    height: 40px;
    background: #004bdc;
    font-size: 18px;
    text-align: center;
    float: left;
    color:white;
    line-height: 38px;
  }
  .li2_parts .tabing{
    background: white;
    font-size: 18px;
    color: #004bdc;
    text-align: center;
  }
  .li2_parts .partsBody{
    width: 100%;
    height: 421px;
    background: white;

  }
  .li2_parts .partsFoot{
    width: 100%;
    height: 84px;
    /*margin-top: -48px;*/
    background: #c5cfdb;

  }
  .li2_parts .bodyCon{
    height: 256px;
    padding: 20px;

  }
  .li2_parts .pages{
    width: 273px;
    height: 50px;
    margin: 0px auto;
  }
  .li2_parts .pageControl{

  }
  .li2_parts .pagesText {
    font-size: 24px;
    display: inline-block;
    width: 155px;
    text-align: center;
  }
  .li2_parts .sure{
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



  .li2_parts .criminal{
    width: 84%;
    height: 110px;
    float: left;
    background: #0048d9;
    margin: 6px 6px;
    text-align: center;
    padding: 2px;
  }
  .li2_parts .criminal img{
    border: 1px solid white;
  }
  .li2_parts .criminalName {
    font-size: 12px;
    color: white;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 99%;
  }
  .li2_parts .bodyHead{
    width: 100%;
    height: 46px;
    background: #c5cfdb;
  }
  .li2_parts .title{
    font-size: 25px;
    font-weight: 800;
    color: #1d68e8;
    text-shadow: 2px 2px 2px #fff;
    line-height: 45px;
    text-indent: 15px;
    float: left;

  }
  .li2_parts .titleDescribe{
    line-height: 45px;
    font-size: 20px;
    width: 856px;
    text-align: left;
  }
  .tab2 .bodyCon{
    height: 600px;
  }


  .navheader{
    height: 122px;
    color: #fff;
    font-size: 20px;
  }
</style>
