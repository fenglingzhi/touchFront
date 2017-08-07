<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navheader
      @getPosition="onClickPosition()"
      :message="prisonSelectText"></navheader>
    <router-view  @hasCheaked="onHasCheaked"   :criminalList="criminalList"></router-view>
    <menufooter></menufooter>
    <!--用户登录 star-->
    <div class="alertTip alertYHDL" v-show="alertYHDL">
      <div class="alertBody " style="margin: -204px -316px;width: 632px;height: 408px;">
        <div class="bodyHead"><div class="title">用户登录</div><div  v-on:click="close('alertYHDL')" class="close">X</div></div>
        <div class="bodyCon">
          <el-row class="menu_title_wrap">
            <el-col :span="6" >
              <div style="height: 57px"></div>
              <p>登录名：</p>
              <div style="height:12px"></div>
              <p>密码：</p>
            </el-col>
            <el-col :span="12">
              <span class="tipHead">请民警登录或刷卡确认</span>
              <input type="text">
              <input type="password">
            </el-col>
            <el-col :span="6" style="height: 10px"></el-col>
          </el-row>
        </div>
        <div class="partsFoot">
          <div style="margin: 20px 2px;float: right">
            <div class="sure">确定</div>
          </div>
        </div>
      </div>
    </div>
    <!--用户登录 end-->

    <!--监区选择 star-->
    <div class="alertTip alertJQXZ" v-show="alertJQXZ">
      <div class="alertBody " style="margin: -204px -316px;width: 632px;height: 270px;">
        <div class="bodyHead"><div class="title">监区选择</div><div @click="close('alertJQXZ')" class="close">X</div></div>
        <div class="bodyCon">
          <el-row>
            <el-col :span="5" v-for="(item,index) in prisonSelect" :key="1">
              <div style="width:10px;"></div>
              <div class="areas" @click="selectArea(index)" :class="{ 'jqxz_active': alertJQXZactive === index}">{{item.text}}</div>
            </el-col>
          </el-row>
        </div>
        <div class="partsFoot">
          <div style="margin: 20px 2px;float: right">
            <div class="sure" @click="prisonAreaSbumit()">确定</div>
          </div>
        </div>
      </div>
    </div>
    <!--监区选择 end-->

    <!--报警信息 star-->
    <div class="alertTip alertBJXX" v-show="alertBJXX">
      <div class="alertBody " style="margin: -222px -400px;width: 800px;height: 444px;">
        <div class="bodyHead"><div class="title">报警信息</div><div v-on:click="close('alertBJXX')" class="close">X</div></div>
        <div class="bodyCon" style="height: 312px;">
          <div class="lists" v-show="true">
            <el-row>

              <div class="tipName">报警事件名称</div>
              <el-row>
                <el-col :span="4"  >
                  <div ><img width="100%"  src="./assets/crimal_1_03.jpg" alt=""></div>
                  <span>张学友 <br> 123456</span>
                </el-col>
              </el-row>

            </el-row>
            <el-row >
              <el-col :span="8" style="height: 10px"></el-col>
              <el-col :span="8" >
                <div class="pages">
                  <span class="pageControl"><img src="./assets/q1.png" alt=""/></span>
                  <span class="pagesText">11/30</span>
                  <span class="pageControl"><img src="./assets/q2.png" alt=""/></span>
                </div>
              </el-col>
              <el-col :span="8" style="height: 10px"></el-col>
            </el-row>
          </div>
          <div class="details" v-show="false" >
            <el-row>
              <el-col :span="6" style="height:1px;">
              </el-col>
              <el-col :span="12" >
                <div class="tipName">报警事件名称</div>
                <div style="height:18px;"></div>
                <el-row>
                  <el-col :span="10" >
                    <div>
                      <img src="/static/img/crimal_1_03.5a235b3.jpg" alt="">
                    </div>
                  </el-col>
                  <el-col :span="14" >
                    <p>姓名：李栓怪</p>
                    <p>罪犯编号：123456</p>
                    <p>报警区域：厕所</p>
                    <p>报警时间：2017-12-11</p>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="6" style="height:1px;" >
              </el-col>
            </el-row>
            <el-row >
              <el-col :span="8" style="height: 10px"></el-col>
              <el-col :span="8" >
                <div class="pages">
                  <span class="pageControl"><img src="./assets/q1.png" alt=""/></span>
                  <span class="pagesText">11/30</span>
                  <span class="pageControl"><img src="./assets/q2.png" alt=""/></span>
                </div>
              </el-col>
              <el-col :span="8" style="height: 10px"></el-col>
            </el-row>
          </div>
        </div>
        <div class="partsFoot">
          <div style="margin: 20px 2px;float: right">
            <div class="sure">处理</div>
          </div>
        </div>
      </div>
    </div>
    <!--报警信息 end-->

    <!--实时流动 star-->
    <div class="alertTip alertSSLD" v-show="alertSSLD">
      <div class="alertBody " style=" margin: -290px -440px;width: 880px;height: 580px;">
        <div class="bodyHead"><div class="title">实时流动</div><div v-on:click="close('alertSSLD')" class="close">X</div></div>
        <div class="bodyCon" style="height: 466px;">
          <el-row>
            <el-col :span="12" >

                <el-col :span="7" >
                  <div class="moveCrimal">
                    <div><img src="./assets/crimal_1_03.jpg" width="70%" height="100" alt=""></div>
                    <span>张家辉 <br> 13:23出门</span>
                  </div>
                </el-col>

            </el-col>
            <el-col :span="12">
              <el-col :span="7" style="height: 10px">

              </el-col>
              <el-col :span="10" >
                <div class="moveCrimal">
                  <div style="height:50px;"></div>
                  <div><img src="./assets/crimal_1_03.jpg" width="100%" height="250" alt=""></div>
                  <span style="font-size: 20px;font-weight: 800">张家辉 <br> 13:23出门 <br> 11人次</span>
                </div>
              </el-col>
              <el-col :span="7" style="height: 10px" >

              </el-col>
            </el-col>

          </el-row>
        </div>
        <div class="partsFoot" style="height: 70px">
          <div style="margin: 20px 2px;float: right">
            <div class="sure">确定</div>
          </div>
        </div>
      </div>
    </div>
    <!--实时流动 end-->

    <!--已点名单 star-->
    <div class="alertTip alertYDMD" v-show="alertYDMD">
      <div class="alertBody " style="margin: -330px -550px;width: 1100px;height: 660px;">
        <div class="bodyHead"><div class="title">已点名单</div><div v-on:click="close('alertYDMD')" class="close">X</div></div>
        <div class="bodyCon" style="height: 514px;" >



          <table  border="1" width="100%">
            <tr>
              <th>罪犯姓名</th>
              <th>清点时间</th>
              <th>监区名称</th>
              <th>区域名称</th>
              <th>点名状态</th>

            </tr>
            <tr v-for="GetCriminal in GetCriminalCalledList" :key="1">
              <td>{{GetCriminal.CriminalName}}</td>
              <td>{{(GetCriminal.CountTime==""||GetCriminal.CountTime==null)?"":GetCriminal.CountTime.replace("T"," ")}}</td>
              <td>{{GetCriminal.OrgName}}</td>
              <td>{{GetCriminal.AreaName}}</td>
              <td>{{GetCriminal.StatusName}}</td>
            </tr>
          </table>


        </div>
        <el-row >
          <el-col :span="8" style="height: 10px"></el-col>
          <el-col :span="8" >
            <div class="pages">
              <span class="pageControl"><img src="./assets/q1.png" v-on:click="getCriminalback()" alt=""/></span>
              <span class="pagesText">{{criminalPage+1}}/{{Math.ceil(criminalCount/18)==0?1:Math.ceil(criminalCount/18)}}</span>
              <span class="pageControl"><img src="./assets/q2.png" v-on:click="getCriminalGo()" alt=""/></span>
            </div>
          </el-col>
          <el-col :span="8" style="height: 10px"></el-col>
        </el-row>
      </div>
    </div>
    <!--已点名单 end-->


    <!--报警弹框 star-->
    <div class="alertAlarm" v-show="alertBJTK"  v-on:click="alertAlarm()">
      <div class="alarmImg">
        <img class="alarmIco" src='./assets/a1.png' alt="">
      </div>
      <div class="alarmNum" v-on:click="makePageDataBack()">999</div>
      <div class="alarmText" v-on:click="makePageDataGo()">第一监狱 越狱报警</div>

    </div>
    <!--报警弹框 end-->
  </div>
</template>

<script>
  import navheader from './components/navheader.vue'                  // 引入组件头部导航
  import menufooter from './components/menufooter.vue'                // 引入组件底部菜单
  import { shanlei } from '../config'
  import global from './plugins/vue.global.js'

  export default {
    name: 'app',
    components: {
      navheader: navheader,         // 引入组件头部导航
      menufooter: menufooter        // 引入组件底部菜单
    },
    data () {
      return {
        /* Coding By YanM */
        prisonSelect: [],
        prisonSelectText:'',
        alertJQXZactive:false,
        /* Coding By YanM */
        /* mj B*/
        GetCriminalCalledList:[],//已点罪犯
        criminalCalledIsLastPage:false,//已点罪犯是否是最后一页
        criminalCount:0,//已点罪犯总页码
        criminalPage:0,//已点罪犯当前页
        /* mj e*/
        alertYHDL: false,
        alertJQXZ: false,
        alertBJXX: false,
        alertSSLD: false,
        alertYDMD: false,
        alertBJTK: true,
        criminalList:{}
      }
    },
    beforeCreate () {
      /* Coding By YanM */

      /* Coding By YanM */
      /* mj B*/
      localStorage.setItem("OrgID","43368189-CE77-4721-BAA7-1545BB3E5A42")

      /* mj e*/


    },
    methods: {
    /* Coding By YanM */

      /* 选择监区 */
      selectArea: function (index) {
        this.alertJQXZactive = index
        this.setLocalStorage('prisonSelectText',this.prisonSelect[index].text)
        this.setLocalStorage('prisonSelectId',this.prisonSelect[index].id)
      },

      /* 默认初始化监区 */
      initPrison: function () {
        var vm = this
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: 'http://10.58.1.145:88/api/HomeIndex/GetBindJQ',
          success: function (result) {
            vm.prisonSelect=result
            vm.prisonSelectText = vm.prisonSelect[0].text
          },
          error: function (err) {
            console.log(err)
          }
        })
      },

      /* 提交选择监区 */
      prisonAreaSbumit: function () {
        this.alertJQXZ=false
        this.prisonSelectText = this.getLocalStorage('prisonSelectText')

        console.log(this.prisonSelectText)
      },

    /* Coding By YanM */

    /* Coding By Qianjf */
        makePageDataGo:function () {
          var data=[{"name":"1"},{"name":"2"},{"name":"3"},{"name":"4"},{"name":"5"},{"name":"6"},{"name":"7"},{"name":"8"},{"name":"9"}]
          var lastData=[];
          var baginPage=0;

          for (var i=3;i<7;i++){
              var dataNew=data[i]
            dataNew["ischoose"]="0"
            lastData.push(dataNew)
          }
          console.log(lastData)
        },
//      已点人员名单翻页
      getCriminalGo:function () {
        var vm = this
        if(!vm.criminalCalledIsLastPage){
          vm.criminalPage=vm.criminalPage+1
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.criminalPage,"PageSize":18},
            url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalCntRecord' + "?callback=?",
            success: function (result) {
              if(result.length!=18){
                vm.criminalCalledIsLastPage=true
              }else {
                vm.criminalCalledIsLastPage=false
              }
              vm.GetCriminalCalledList=result
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
            url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalCalledCount' + "?callback=?",
            success: function (result) {
              vm.criminalCount=result
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


      },
      getCriminalback:function () {
        var vm = this
        if(vm.criminalPage==0){
          alert("已经是第一页了")
        }else {
          vm.criminalPage=vm.criminalPage-1
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.criminalPage,"PageSize":18},
            url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalCntRecord' + "?callback=?",
            success: function (result) {
              if(result.length!=18){
                vm.criminalCalledIsLastPage=true
              }else {
                vm.criminalCalledIsLastPage=false
              }
              vm.GetCriminalCalledList=result
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
            url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalCalledCount' + "?callback=?",
            success: function (result) {
              vm.criminalCount=result
            },
            error: function (err) {
              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }
      },
    /* Coding By Qianjf */

      close: function (chose) {
        if(chose=="alertYHDL"){
          this.alertYHDL=false
        }else  if (chose=="alertJQXZ"){
          this.alertJQXZ=false
        }else  if (chose=="alertBJXX"){
          this.alertBJXX=false
        }else  if (chose=="alertSSLD"){
          this.alertSSLD=false
        }else  if (chose=="alertYDMD"){
          this.alertYDMD=false
          this.criminalPage=0
        }
      },
      onClickPosition: function () {
        this.alertJQXZ=true
      },

      onHasCheaked: function () {
        this.alertYDMD=true
//      罪犯清点，已点名单
        var vm = this
//      获取第一页记录数据
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":0,"PageSize":18},
          url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalCalledList' + "?callback=?",
          success: function (result) {

            if(result.length!=18){
              vm.criminalCalledIsLastPage=true
            }else {
              vm.criminalCalledIsLastPage=false
            }
            vm.GetCriminalCalledList=result
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
          url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalCalledCount' + "?callback=?",
          success: function (result) {
            vm.criminalCount=result
          },
          error: function (err) {
            alert("请求异常")
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });
      },
      alertAlarm:function () {
        this.alertBJXX=true
      },
    },
    mounted () {
      /* Coding By YanM */

      /* Coding By YanM */
      /* Coding By Qianjf */
      var personlists;
      var vm=this
//      var personlists=[{"FlnkID":"9c2e3994-54d4-43ea-bfd3-b87dd95cc761",
//        "CriminalName":"科比.波密斯",
//        "Photo":"\/Document\/Photos\/Criminals\/2017072510103420170624084751李丽超.jpg"
//      },
//        {"FlnkID":"dfd825d1-c4d3-43ce-a55b-242cc622a2c1","CriminalName":"8b96罪犯未绑卡",
//          "Photo":"\/Document\/Photos\/Criminals\/2017073119045020170624090400张博.jpg"}];
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalList' + "?callback=?",
        success: function (result) {
          personlists=result
          //所有罪犯信息缓存(哈希，便于快速查找缓存中的罪犯详细信息)
          var personlist_hash = new Array();
          // 重构罪犯信息哈希数据
          for(var i=0;i<personlists.length;i++){
            personlist_hash[personlists[i].FlnkID] = {"CriminalName":'"'+personlists[i].CriminalName+'"',"Photo":'"'+personlists[i].Photo+'"'};
          }
          //所有罪犯信息缓存(传进vue的数据用于渲染页面)
          vm.criminalList=personlist_hash

          // 模拟数据（网关推送过来的罪犯FlnkID）
          var FlnkIDList=['dfd825d1-c4d3-43ce-a55b-242cc622a2c1','9c2e3994-54d4-43ea-bfd3-b87dd95cc761']
          /* 筛选后数据用于VUE渲染 */
          var vueDataPersonlist=new Array();
          for(var j=0;j<FlnkIDList.length;j++){
            vueDataPersonlist[j]={"FlnkID":'"'+FlnkIDList[j]+'"',"CriminalName":'"'+personlist_hash[FlnkIDList[j]].CriminalName+'"',"Photo":'"'+personlist_hash[FlnkIDList[j]].Photo+'"'}
          }
        },

        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });
//      console.log("mmakm",this.criminalList)
      /* Coding By Qianjf */
      this.initPrison()
//      this.ws.onopen = function(){
//        alert('开启');
//      };
//
//      this.ws.onmessage=function(event){
//        alert('接收数据')
//        console.log('message',event.data)
//      }
//
//      this.ws.onclose = function(){
//        // 关闭 websocket
//        alert("连接已关闭...");
//      };
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
    background: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .alertTip {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9999;
    top: 0;
    background: rgba(0, 0, 0, 0.78);
  }
  .alertTip .title {
    font-size: 25px;
    font-weight: 800;
    color: #1d68e8;
    text-shadow: 2px 2px 2px #fff;
    line-height: 45px;
    text-indent: 15px;
    float: left;
  }
  .alertTip .bodyHead {
    width: 100%;
    height: 46px;
    background: #c5cfdb;
  }
  .alertTip .bodyCon {
    height: 240px;
    padding: 20px;
  }
  .alertTip .partsFoot {
    width: 100%;
    height: 84px;
    /* margin-top: -48px; */
    background: #c5cfdb;
  }
  .alertTip .sure {
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
    cursor: pointer;
  }
  .alertTip .alertBody{
    position: absolute;
    top: 50%;
    left: 50%;
    background: white;
  }
  .alertTip  .close{
    float: right;
    font-weight: 900;
    font-size: 30px;
    margin: 0px 16px;
    color: #1d68e8;
    cursor: pointer;
  }
  /*用户登录*/
  .alertYHDL input{
    width: 100%;
    margin: 20px 0px;
    font-size: 25px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.38);
    text-indent: 10px;
  }
  .alertYHDL .tipHead{
    display: inline-block;
    height: 60px;
    font-size: 20px;
    line-height: 70px;
  }
  .alertYHDL p{
    font-size: 23px;
    text-align: right;
  }
  /*监区选择*/
  .jqxz_active{
    background: blue;
    color: #fff !important;
  }
  .alertJQXZ .areas{
    width:100%;
    height: 50px;
    color: blue;
    border: 1px solid;
    font-size: 21px;
    text-align: center;
    line-height: 51px;
    cursor: pointer;
  }
  .alertJQXZ .el-col-5 {
    padding: 10px;
  }
  .alertJQXZ .bodyCon{
    height: 99px;
    padding: 20px
  }
  /*报警信息*/
  .alertBJXX p{
    text-align: left;
    font-size: 19px;
    color: red;
    font-weight: 800;
    height:15px;
  }
  .alertBJXX .tipName{
    display: inline-block;
    height: 39px;
    font-size: 22px;
    color: rgba(0, 0, 255, 0.72);
    font-weight: 800;
  }
  .alertBJXX .pages{
    width: 273px;
    height: 50px;
    margin: 18px auto;
  }
  .alertBJXX .pageControl{
  }
  .alertBJXX .pagesText {
    font-size: 24px;
    display: inline-block;
    width: 155px;
    text-align: center;
  }
  .lists span{
    font-weight: 800;
    font-size: 20px;
  }
  .alertBJXX .el-col-4 {
    width: 16.66667%;
    margin: 0px 12px;
  }
  /*实时流动 */
  .alertSSLD .moveCrimal{
    margin:6px 0px;
  }
  .alertSSLD span{
    color: black;
  }
  /*已点名单*/
  .alertYDMD .pages{
    width: 273px;
    height: 50px;
    margin: 18px auto;
  }
  .alertYDMD .pageControl{
  }
  .alertYDMD .pagesText {
    font-size: 24px;
    display: inline-block;
    width: 155px;
    text-align: center;
  }
  .alertYDMD .tab{
    width: 100%;
    border: 1px solid rgb(0, 0, 0);
    height: 33px;
    font-size: 18px;
    font-weight: 800;
    line-height: 33px;
  }
  /*报警弹框*/
  .alertAlarm{
    width: 200px;
    height: 80px;
    position: fixed;
    bottom: 80px;
    right: 34px;
    background: rgb(255, 51, 51);
  }
  .alarmImg{
    float: left;
    padding: 1px;
    margin: 12px 0px;
  }
  .alarmImg img{
    width: 64px;
  }
  .alarmText{
    background: white;
    float: right;
    margin: 6px 6px;
    width: 120px;
    height: 64px;
    color: black;
    text-align: left;
    font-size: 15px;
    padding: 1px;
    line-height: 23px;
    overflow: hidden;
  }
  .alarmNum{
    width: 30px;
    position: absolute;
    color: white;
    margin: 5px 36px;
    font-size: 16px;
  }
</style>
