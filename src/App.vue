<template>
  <div id="app">
    <navheader
      @getPosition="onClickPosition()"
      :message="prisonSelectText"
      :plan="plan"
      :planStartTime="planStartTime"
      :planEndTime="planEndTime"
      :NextTime="NextTime"
      :onlinestatus="onlinestatus"
    ></navheader>

    <router-view
      @clearCardInfo="clearCardInfo"
      @bindCardSelect="bindCardSelect"
      @CardBindPageInit="CardBindPageInit"
      @openLogin="loginOpen"
      @hasCheaked="onHasCheaked"
      @hasCheakedTool="onHasCheakedTool"
      @canRouterChange="canRouterChange"
      @delCardPerson="delCardPerson"
      :criminalList="criminalList"
      :toolList="toolList"
      :FlnkIDList1="FlnkIDList_11"
      :FlnkIDList2="FlnkIDList_22"
      :FlnkIDList3="FlnkIDList_33"
      :FlnkIDList4="FlnkIDList_44"
      :SocketAllData="SocketAllData"
      :chartsDatas="chartsDatas"
      :chartsDatasName="chartsDatasName"
      :crimalCount_outCrimalCount="crimalCount_outCrimalCount"
      :policeList="policeList"
      :receiveDataMsgType25="receiveDataMsgType25"
      :receiveDataMsgType30="receiveDataMsgType30"
      :receiveDataMsgType32="receiveDataMsgType32"
      :receiveDataMsgType31="receiveDataMsgType31"
      :receiveDataMsgType20="receiveDataMsgType20"
      :receiveDataMsgType22="receiveDataMsgType22"
      :receiveDataMsgType26="receiveDataMsgType26"
      :receiveDataMsgType23="receiveDataMsgType23"
      :receiveDataMsgType8="receiveDataMsgType8"
      :receiveDataMsgType27="receiveDataMsgType27"
      :cardPerson="cardPerson"
      :receiveDataMsgType33="receiveDataMsgType33"
      :canRouter="canRouter"
      :mapList="mapList"
      :chest_card="chest_card"
      :wristband="wristband"

    ></router-view>

    <menufooter
      @openLogin="loginOpen"
      :canRouter="canRouter">
    </menufooter>


    <!--监区选择 star-->
    <div class="alertTip alertJQXZ" v-show="alertJQXZ">
      <div class="alertBody " style="margin: -204px -316px;width: 632px;height: 270px;">
        <div class="bodyHead"><div class="title">监区选择</div><div @click="close('alertJQXZ')" class="close">X</div></div>
        <div class="bodyCon">
          <el-row>
            <el-col :span="6" v-for="(item,index) in prisonSelect" :key="1">
              <div style="width:10px;"></div>
              <div class="areas" @click="selectArea(index)" :class="{ 'jqxz_active': alertJQXZactive === index}">{{item.AreaName}}</div>
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
          <div class="details" >
            <el-row style="    height: 265px;">
              <el-col :span="4" style="height:1px;">
              </el-col>
              <el-col :span="14" v-for="(alarm,index) in alarmList.slice(alarmA-1,alarmB)" :key="1">
                <div class="tipName">{{alarm.Description}}</div>
                <div v-show="isGrup">
                  <el-row>
                    <el-col :span="4" v-for="group in groupTeam" >
                      <div ><img width="100%"  :src="group.Photo" alt=""></div>
                      <span>{{group.CriminalName}} <br> {{group.CriminalID}} </span>
                    </el-col>
                  </el-row>
                </div>
                <div v-show="false" id="alarmRecordID">{{alarm.AlarmRecordID}}</div>
                <div  v-show="isPerson">
                  <div style="height:18px;"></div>
                  <el-row>
                    <el-col :span="10" >
                      <div>
                        <img :src="alarm.Photo" width="136" height="183" alt="">
                      </div>
                    </el-col>
                    <el-col :span="14" >
                      <p>姓名：{{alarm.ObjectName}}</p>
                      <p>罪犯编号：{{alarm.criminalID}}</p>
                      <p>报警区域：{{alarm.AreaName}}</p>
                      <p>报警时间：{{alarm.EventTime}}</p>
                    </el-col>
                  </el-row>
                </div>

              </el-col>
              <el-col :span="4" style="height:1px;" >
              </el-col>
            </el-row>
            <el-row >
              <el-col :span="8" style="height: 10px"></el-col>
              <el-col :span="8" >
                <div class="pages">
                  <span class="pageControl"><img src="./assets/q1.png" v-on:click="alarmBack()" alt=""/></span>
                  <span class="pagesText">{{alarmNowPage}}/{{alarmPages}}</span>
                  <span class="pageControl"><img src="./assets/q2.png" v-on:click="alarmGo()" alt=""/></span>
                </div>
              </el-col>
              <el-col :span="8" style="height: 10px"></el-col>
            </el-row>
          </div>

        </div>
        <div class="partsFoot">
          <div class="alertText">{{alertText}}</div>
          <div style="margin: 20px 2px;float: right">
            <div class="sure" v-on:click="alarmHandle()">处理</div>
          </div>
        </div>
      </div>
    </div>
    <!--报警信息 end-->

    <!--实时流动 star-->
    <div class="alertTip alertSSLD" v-show="alertSSLD">
      <div class="alertBody " style=" margin: -290px -440px;width: 880px;height: 600px;">
        <div class="bodyHead"><div class="title">实时流动</div><div v-on:click="close('alertSSLD')" class="close">X</div></div>
        <div class="bodyCon" style="height: 490px;">
          <el-row>
            <el-col :span="12" >
              <el-col :span="7" v-for="item in nowfloatPerson.slice(1,10)" :key="1">
                <div class="moveCrimal">
                  <div><img src="./assets/crimal_1_03.jpg" width="70%" height="100" alt=""></div>
                  <span>{{item.ObjectName}} <br> {{item.EventTime}}<br>{{item.EventName}}</span>
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
                  <span style="font-size: 20px;font-weight: 800">{{nowfloatPersonFirst.ObjectName}} <br> {{nowfloatPersonFirst.EventTime}}<br>{{nowfloatPersonFirst.EventName}} </span>
                </div>
              </el-col>
              <el-col :span="7" style="height: 10px" >
              </el-col>
            </el-col>
          </el-row>
        </div>
        <div class="partsFoot" style="height: 70px">
          <div style="margin: 20px 2px;float: right">
            <div class="sure">{{ nowfloatTime }}秒后关闭</div>
          </div>
        </div>
      </div>
    </div>
    <!--实时流动 end-->

    <!--已点名单 罪犯 star-->
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

    <!--已点工具 star-->
    <div class="alertTip alertYDGJ" v-show="alertYDGJ">
      <div class="alertBody " style="margin: -330px -550px;width: 1100px;height: 660px;">
        <div class="bodyHead"><div class="title">已点工具</div><div v-on:click="close('alertYDGJ')" class="close">X</div></div>
        <div class="bodyCon" style="height: 514px;" >
          <table  border="1" width="100%">
            <tr>
              <th>工具类别</th>
              <th>工具名称</th>
              <th>监区名称</th>
              <th>清点时间</th>
              <th>清点状态</th>
            </tr>
            <tr v-for="toolCalled in GetToolCalledList" :key="1">
              <td>{{toolCalled.ToolTypeName}}</td>
              <td>{{toolCalled.ToolName}}</td>
              <td>{{toolCalled.OrgName}}</td>
              <td>{{(toolCalled.ToolTypeName==""||toolCalled.CountTime==null)?"":toolCalled.CountTime.replace("T"," ")}}</td>
              <td>{{toolCalled.StatusName}}</td>
            </tr>
          </table>
        </div>
        <el-row >
          <el-col :span="8" style="height: 10px"></el-col>
          <el-col :span="8" >
            <div class="pages">
              <span class="pageControl"><img src="./assets/q1.png" v-on:click="getToolback()" alt=""/></span>
              <span class="pagesText" style="font-size: 28px">{{toolPage+1}}/{{Math.ceil(toolCount/18)==0?1:Math.ceil(toolCount/18)}}</span>
              <span class="pageControl"><img src="./assets/q2.png" v-on:click="getToolGo()" alt=""/></span>
            </div>
          </el-col>
          <el-col :span="8" style="height: 10px"></el-col>
        </el-row>
      </div>
    </div>
    <!--已点工具 end-->

    <!--报警弹框 star-->
    <div class="alertAlarm" v-show="alertBJTK"  v-on:click="alertAlarm()">
      <div class="alarmImg">
        <img class="alarmIco" src='./assets/a1.png' alt="">

      </div>
      <div class="alarmNum" >{{alarmList.length>999?"999+":alarmList.length}}</div>
      <div class="alarmText" >{{alarmText}}</div>

    </div>
    <!--报警弹框 end-->

    <!--用户登录 star-->
    <div class="alertTip alertYHDL" v-show="alertYHDL">
      <div class="alertBody " style="margin: -204px -316px;width: 632px;height: 408px;">
        <div class="bodyHead"><div class="title">用户登录</div><div  v-on:click="loginclose('alertYHDL')" class="close">X</div></div>
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
              <input type="text" placeholder="请输入" v-model="policeLogin.account">
              <input type="password" placeholder="请输入" v-model="policeLogin.password">
            </el-col>
            <el-col :span="6" style="height: 10px"></el-col>
          </el-row>
        </div>
        <div class="partsFoot">
          <div class="alertText">{{alertText}}</div>
          <div style="margin: 20px 2px;float: right">
            <div class="sure" @click="logonSbumit">确定</div>
          </div>
        </div>
      </div>
    </div>
    <!--用户登录 end-->

  </div>
</template>

<script>
  import navheader from './components/navheader.vue'                  // 引入组件头部导航
  import menufooter from './components/menufooter.vue'                // 引入组件底部菜单
  import { SHANLEI,IMG,ajaxUrl} from './config'
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
        prisonSelect: [],                 //监区列表
        prisonSelectText:'',              //监区标题
        alertJQXZactive:false,            //监区选择标记位
        OrgID:'',                         //监区ID
        flowPerson_outPrison:{},          //流动人员 && 外监进入人员
        personnel_distribution:{},        //人员分布
        FlnkIDList_1 : [],                //外出人数（监内）ID
        FlnkIDList_11: [],
        FlnkIDList_2 : [],                //非法流动ID
        FlnkIDList_22: [],
        FlnkIDList_3 : [],                //外监进入人员ID
        FlnkIDList_33: [],
        FlnkIDList_4 : [],                //在监人数（非在线）ID
        FlnkIDList_44: ['123123123'],
        chartsDatas:[],                   //人员分布图表渲染数据
        chartsDatasName:[],               //人员分布图表-表名
        crimalCount_outCrimalCount:{},    //监区人数 && 外出人数（监外）
        policeList:[],                    //警员基础信息集合
        policeLogin:{                     //警员登陆信息
          account:'',
          password:''
        },
        plan:'',                          //计划任务
        planStartTime:'',                 //计划任务开始时间
        planEndTime:'',                   //计划任务结束时间
        NextTime:'',                      //下次计划人数时间
        nowfloatTime:0,                   //实时流动倒计时
        nowfloatPerson:[],                //实时流动人员
        nowfloatPersonFirst:[],           //实时流动人员大头像
        nowfloatPersonA:1,                //实时流动人员分页
        nowfloatPersonB:9,                //实时流动人员分页
        onlinestatus:true,
        mapList:[],                       //地图基础数据
        chest_card:[],                    //胸卡信息
        wristband:[],                     //腕带信息
        /* Coding By YanM */
        /* mj B*/
        receiveDataMsgType25:{},//进出ws工数据
        receiveDataMsgType30:{},//工具清点提交后返回数
        receiveDataMsgType32:{},//工具清点数据
        receiveDataMsgType31:{},//人员点点数据
        receiveDataMsgType20:{},//外出登记初次发送
        receiveDataMsgType22:{},//外出罪犯信息
        receiveDataMsgType23:{},//外出登记提交
        receiveDataMsgType26:{},//外出登记取消
        receiveDataMsgType8:{},//互监组管理刷卡
        receiveDataMsgType33:{},//手动结束清点
        receiveDataMsgType27:{},//外出登记民警





        cardPerson:[],//互监组刷卡区域成员
        toolList:[],// 工具基础信息集合
        GetCriminalCalledList:[],//已点罪犯
        criminalCalledIsLastPage:false,//已点罪犯是否是最后一页
        criminalCount:0,//已点罪犯总页码
        criminalPage:0,//已点罪犯当前页
        GetToolCalledList:[],//已点罪犯
        toolCalledIsLastPage:false,//已点工具是否是最后一页
        toolCount:0,//已点工具总页码
        toolPage:0,//已点工具当前页
        alarmList:[],//报警集合
        alarmListSearch:[],//用于报警集合的匹配
        alarmText:"",//报警描述
        alarmPages:1,//留监总页数
        alarmNowPage:1,//留监当前页
        alarmListAll:0,//留监总数
        AlarmRecordID:"",
        alarmA:1,
        alarmB:1,
        groupTeam:[],//互监组成员
        SocketAllData:{},
        alertText:"",//登录页面提示
        /* mj e*/
        alertYHDL: false,                 //用户登录
        alertJQXZ: false,                 //监区选择
        alertBJXX: false,                 //报警信息
        alertSSLD: false,                 //实时流动
        alertYDMD: false,                 //已点名单
        alertBJTK: false,                 //报警弹框
        alertYDGJ:false,                  //已点工具
        isPerson:true,                     //报警类别：人
        isGrup:false,                      //报警类别：互监组
        canRouter:1,                      //流动路由判
        criminalList:[]                   //罪犯基础信息集合
      }
    },
    methods: {
      /* Coding By YanM */

      /* 选择监区 */
      selectArea: function (index) {
        this.alertJQXZactive = index
        this.setLocalStorage('prisonSelectText',this.prisonSelect[index].AreaName)
        this.setLocalStorage('OrgID',this.prisonSelect[index].OrgID)
        this.setLocalStorage('AreaID',this.prisonSelect[index].AreaID)
        this.setLocalStorage('AreaType',this.prisonSelect[index].AreaType)
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
          url: SHANLEI + 'HomeIndex/GetBindJQ',
          success: function (result) {
            vm.prisonSelect=result
            vm.prisonSelectText = vm.prisonSelect[0].AreaName
            vm.setLocalStorage('OrgID',vm.prisonSelect[0].OrgID)
            vm.setLocalStorage('DoorID',vm.prisonSelect[0].Door)
            vm.setLocalStorage('AreaID',vm.prisonSelect[0].AreaID)
            vm.setLocalStorage('AreaType',vm.prisonSelect[0].AreaType)
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
      },

      /* 首页渲染数据 */
      homeData:function () {
        let vm = this
        /* 外出人数（监内）-1 筛选后数据用于VUE渲染 */
        vm.FlnkIDList_11=vm.FlnkIDList_1

        /* 非法流动 -2 筛选后数据用于VUE渲染 */
        var vueDataPersonlist_2=[];
        for(let j=0;j<vm.FlnkIDList_2.length;j++){
          vueDataPersonlist_2[j]={
            CriminalID:vm.criminalList[0][vm.FlnkIDList_2[j]].CriminalID,
            CriminalName:vm.criminalList[0][vm.FlnkIDList_2[j]].CriminalName,
            Photo:vm.criminalList[0][vm.FlnkIDList_2[j]].Photo,
            UpdateTime:vm.criminalList[0][vm.FlnkIDList_2[j]].UpdateTime,
          }
        }
        vm.FlnkIDList_22=vueDataPersonlist_2

        /* 外监进入人员 -3 筛选后数据用于VUE渲染 */
        var vueDataPersonlist_3=[];
        for(let j=0;j<vm.FlnkIDList_3.length;j++){
          if(vm.criminalList[0][vm.FlnkIDList_3[j]]){
            vueDataPersonlist_3[j] = {
              CriminalID:vm.criminalList[0][vm.FlnkIDList_3[j]].CriminalID,
              CriminalName:vm.criminalList[0][vm.FlnkIDList_3[j]].CriminalName,
              Photo:vm.criminalList[0][vm.FlnkIDList_3[j]].Photo,
            }
          }
        }
        vm.FlnkIDList_33 = vueDataPersonlist_3

        /* 在监人数（非在线）-4 筛选后数据用于VUE渲染 */
        vm.FlnkIDList_44=vm.FlnkIDList_4
      },

      /* 登录信息提交 */
      logonSbumit: function () {
        var vm = this
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data:{
            UserID:vm.policeLogin.account,
            UserPwd:vm.policeLogin.password
          },
          url: SHANLEI + 'HomeIndex/CheckUser',
          success: function (result) {

            if(result != null){
              vm.alertYHDL = false
              localStorage.setItem('placemanID',result[0].FlnkID)
              vm.canRouter=0
              vm.policeLogin.password=""
              vm.policeLogin.account=""
            }else{
              vm.policeLogin.password=""
              vm.policeLogin.account=""
              vm.alertText='用户或密码错误'
              setTimeout(function () {
                vm.alertText=''
              },2000)
            }
          }
        })
      },

      /* 登录弹窗显示 */
      loginOpen:function (msg) {
        this.alertYHDL = msg
      },

      /* 实时流动倒计时 */
      nowFloating:function () {
        let vm = this
        vm.alertSSLD = true
        vm.nowfloatTime = 9;
        let interval = window.setInterval(function() {
          if ((vm.nowfloatTime--) <= 0) {
            vm.alertSSLD = false;
            window.clearInterval(interval);
          }
        },1000);
      },

      /* 登录关闭按钮 */
      loginclose:function () {
        this.$router.push({ path: '/' })
        this.alertYHDL=false
        this.policeLogin.account=''
        this.policeLogin.password=''
      },

      closeWeb:function () {
        let vm = this
        vm.ws.close()
      },

      /* 卡绑定页面初始化 */
      CardBindPageInit:function () {
        this.chest_card = []
      },

      /* 卡解绑页面初始化 */
      clearCardInfo:function () {
        this.wristband = []
      },

      /* 卡绑定选人 */
      bindCardSelect:function (index) {
        let vm = this
        if(vm.chest_card.length!==0){
          for(let i = 0; i<vm.chest_card.length; i++){
            vm.chest_card[i].status = false
          }
          vm.chest_card[index].status = true
        }
      },

      /* Coding By YanM */

      /* Coding By Qianjf */

     /* 零时互监组取消操作，清空刷卡内容*/
      delCardPerson:function () {
        this.cardPerson=[]
      },
      /* 登录弹窗显示 */
      canRouterChange:function () {
        this.canRouter = 1
      },

      /*自适应各种屏幕*/
      changeSize:function () {
        var oldWidth = 1584;
        var oldHeight =  1024;
        var nowWidth = document.body.clientWidth;
        var nowHeight =$(window).height();
        var scaleWidth = oldWidth / nowWidth;
        var scaleHeight = oldHeight / nowHeight;
        $("#app").css("transform", "scale(" + (1 / scaleWidth) + "," + (1 / scaleHeight) + ")");
        $("#app").css("-ms-transform-origin", "0 0");
        $("#app").css("transform-origin", "0 0");
        $("#app").css("-webkit-transform-origin", "0 0");
        $("#app").css("-moz-transform-origin", "0 0");
        $("#app").css("-o-transform-origin", "0 0");
      },

      /*报警处理*/
      alarmHandle:function () {
        var vm = this
        var alarmRecordID = $("#alarmRecordID").html()
        var alarmHandS = setInterval(function () {
          if(localStorage.getItem("placemanID")==0){
             vm.alertYHDL=true
            clearInterval(alarmHandS)
          }else {
            var placemanID = localStorage.getItem("placemanID")
            $.ajax({
              type:"get",
              contentType:"application/json; charset=utf-8",
              dataType:"jsonp",
              jsonp:"callback",
              async:false,
              data:{
                "EventID":alarmRecordID,
                "PoliceID":placemanID,
                "PoliceName":vm.policeList[0][placemanID]["PoliceName"],
                "PoliceRole":vm.policeList[0][placemanID]["role"]
              },
              url: SHANLEI+'Event/AlarmHandle' + "?callback=?",
              success: function (result) {
                clearInterval(alarmHandS)
                if(result==0){
                  vm.alertText="处理失败"
                  setTimeout(function () {
                    vm.alertText=""
                  },2000)
                }else {
                  /*页面删除效果*/

                  for(var j=0;j<vm.alarmList.length;j++){
                    if(vm.alarmList[j]["AlarmRecordID"]==alarmRecordID){
                      vm.alarmList.splice(j,1);
                      vm.alarmPages=vm.alarmList.length
                      if( vm.alarmPages> vm.alarmNowPage||vm.alarmPages==vm.alarmNowPage){
                      }else {
                        if(vm.alarmPages==0){
                          vm.alarmPages=1
                          vm.alertBJTK=false
                        }
//                            vm.alarmNowPage=vm.alarmPages
                        vm.alarmBack()

                      }
                    }
                  }
                  vm.alarmText =  vm.alarmList[0].Description

                  vm.alertText="处理成功"
                  setTimeout(function () {
                    vm.alertText=""
                  },2000)

                }

              },
              error: function (err) {
                clearInterval(alarmHandS)
//                vm.alertText="请求异常"
              },
              complete: function (XHR, TS) {
                clearInterval(alarmHandS)
                XHR = null;  //回收资源
              }
            });
          }
        },500)


      },

      /*报警翻页*/
      alarmGo:function () {
          var vm = this
        if(this.alarmNowPage<this.alarmPages){
          this.alarmNowPage=this.alarmNowPage+1
          this.alarmA=this.alarmA+1
          this.alarmB=this.alarmB+1
          if(this.alarmList[this.alarmA-1]["EventCode"]==1003){
            this.isGrup=true;
            this.isPerson=false
           var AlarmRecordID = this.alarmList[this.alarmA-1]["AlarmRecordID"]
            var ObjectID  = this.alarmList[this.alarmA-1]["ObjectID "]
            $.ajax({
              type: "get",
              contentType: "application/json; charset=utf-8",
              dataType: "jsonp",
              jsonp: "callback",
              async: false,
              data:{"GroupID":ObjectID},
              url:  SHANLEI+'Group/GetCriminalListByGroup' + "?callback=?",
              success: function (result) {
                vm.groupTeam = result
              },
              error: function (err) {
//          alert("请求异常")
              },
              complete: function (XHR, TS) {
                XHR = null;  //回收资源
              }
            });
          }else {
            vm.isGrup=false;
            vm.isPerson=true
          }

        }else {
//          alert("已经最后一页了")
        }

      },

      /*报警翻页*/
      alarmBack:function () {
        if(this.alarmNowPage==1){
//          alert("已经是第一页了")
        }else {
          this.alarmNowPage=this.alarmNowPage-1
          this.alarmA=this.alarmA-1
          this.alarmB=this.alarmB-1
          if(this.alarmList[this.alarmA-1]["EventCode"]==1003){
            this.isGrup=true;
            this.isPerson=false
            var AlarmRecordID = this.alarmList[this.alarmA-1]["AlarmRecordID"]
            var ObjectID  = this.alarmList[this.alarmA-1]["ObjectID "]
            $.ajax({
              type: "get",
              contentType: "application/json; charset=utf-8",
              dataType: "jsonp",
              jsonp: "callback",
              async: false,
              data:{"GroupID":ObjectID},
              url:  SHANLEI+'Group/GetCriminalListByGroup' + "?callback=?",
              success: function (result) {
                vm.groupTeam = result
              },
              error: function (err) {
//          alert("请求异常")
              },
              complete: function (XHR, TS) {
                XHR = null;  //回收资源
              }
            });
          }else {
            this.isGrup=false
            this.isPerson=true
        }

       }
      },

      /* 已点人员名单翻页 */
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
            url:  SHANLEI+'CriminalCnt/GetCriminalCntRecord' + "?callback=?",
            success: function (result) {
              if(result.length!=18){
                vm.criminalCalledIsLastPage=true
              }else {
                vm.criminalCalledIsLastPage=false
              }
              vm.GetCriminalCalledList=result
            },
            error: function (err) {
//              alert("请求异常")
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
            url:  SHANLEI+'CriminalCnt/GetCriminalCalledCount' + "?callback=?",
            success: function (result) {
              vm.criminalCount=result
            },
            error: function (err) {
//              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }else {
//          alert("已经到了最后一页了")
        }


      },

      /* 已点人员名单翻页 */
      getCriminalback:function () {
        var vm = this
        if(vm.criminalPage==0){
//          alert("已经是第一页了")
        }else {
          vm.criminalPage=vm.criminalPage-1
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.criminalPage,"PageSize":18},
            url:  SHANLEI+'CriminalCnt/GetCriminalCntRecord' + "?callback=?",
            success: function (result) {
              if(result.length!=18){
                vm.criminalCalledIsLastPage=true
              }else {
                vm.criminalCalledIsLastPage=false
              }
              vm.GetCriminalCalledList=result
            },
            error: function (err) {
//              alert("请求异常")
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
            url:  SHANLEI+'CriminalCnt/GetCriminalCalledCount' + "?callback=?",
            success: function (result) {
              vm.criminalCount=result
            },
            error: function (err) {
//              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }
      },

      /* 已点工具名单翻页 */
      getToolback:function () {
        var vm = this
        if(vm.toolPage==0){
//          alert("已经是第一页了")
        }else {
          vm.toolPage=vm.toolPage-1
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.toolPage,"PageSize":18},
            url:  SHANLEI+'ToolCnt/GetToolCalledList' + "?callback=?",
            success: function (result) {
              if(result.length!=18){
                vm.toolCalledIsLastPage=true
              }else {
                vm.toolCalledIsLastPage=false
              }
              vm.GetToolCalledList=result
            },
            error: function (err) {
//              alert("请求异常")
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
            url:  SHANLEI+'ToolCnt/GetToolCalledCount' + "?callback=?",
            success: function (result) {
              vm.toolCount=result
            },
            error: function (err) {
//              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }
      },

      /* 已点工具名单翻页 */
      getToolGo:function () {
        var vm = this
        if(!vm.toolCalledIsLastPage){
          vm.toolPage=vm.toolPage+1
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            data:{"OrgID":localStorage.getItem("OrgID"),"PageIndex":vm.toolPage,"PageSize":18},
            url: SHANLEI+'ToolCnt/GetToolCalledList' + "?callback=?",
            success: function (result) {
              if(result.length!=18){
                vm.toolCalledIsLastPage=true
              }else {
                vm.toolCalledIsLastPage=false
              }
              vm.GetToolCalledList=result
            },
            error: function (err) {
//              alert("请求异常")
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
            url: SHANLEI+'CriminalCnt/GetCriminalCalledCount' + "?callback=?",
            success: function (result) {
              vm.criminalCount=result
            },
            error: function (err) {
//              alert("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          });
        }else {
//          alert("已经到了最后一页了")
        }


      },

      /* 已点工具展示及其数据加载 */
      onHasCheakedTool: function () {
        this.alertYDGJ=true
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
          url:  SHANLEI+'ToolCnt/GetToolCalledList' + "?callback=?",
          success: function (result) {
            if(result.length!=18){
              vm.toolCalledIsLastPage=true
            }else {
              vm.toolCalledIsLastPage=false
            }
            vm.GetToolCalledList=result
          },
          error: function (err) {
//            alert("请求异常")
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
          url:  SHANLEI+'ToolCnt/GetToolCalledCount' + "?callback=?",
          success: function (result) {
            vm.toolCount=result
          },
          error: function (err) {
//            alert("请求异常")
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });
      },

      /* Coding By Qianjf */

      /* 弹窗关闭 */
      close: function (chose) {
        if(chose=="alertYHDL"){
          this.alertYHDL=false
        }else  if (chose=="alertJQXZ"){
          this.alertJQXZ=false
        }else  if (chose=="alertBJXX"){
          localStorage.setItem("placemanID","0")
          this.alertBJXX=false
        }else  if (chose=="alertSSLD"){
          this.alertSSLD=false
        }else  if (chose=="alertYDMD"){
          this.alertYDMD=false
          this.criminalPage=0
        }else if(chose=="alertYDGJ"){
            this.alertYDGJ=false
        }
      },

      /* 选择监区弹窗打开 */
      onClickPosition: function () {
        this.alertJQXZ=true
      },

      /* 已点罪犯展示及其数据加载 */
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
          url:  SHANLEI+'CriminalCnt/GetCriminalCalledList' + "?callback=?",
          success: function (result) {

            if(result.length!=18){
              vm.criminalCalledIsLastPage=true
            }else {
              vm.criminalCalledIsLastPage=false
            }
            vm.GetCriminalCalledList=result
          },
          error: function (err) {
//            alert("请求异常")
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
          url:  SHANLEI+'CriminalCnt/GetCriminalCalledCount' + "?callback=?",
          success: function (result) {
            vm.criminalCount=result
          },
          error: function (err) {
//            alert("请求异常")
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });
      },

      /*报警详情弹框*/
      alertAlarm:function () {
        this.alertBJXX=true
        localStorage.setItem("placemanID","0")
      },

      /* 所有基础全量数据 */
      allDataInit:function () {
        var vm = this
        /* 罪犯基础数据 */
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: SHANLEI +'CriminalCnt/GetCriminalList' + "?callback=?",
          success: function (result) {
            //所有罪犯信息缓存(哈希，便于快速查找缓存中的罪犯详细信息)
            var personlist_hash = [];
            // 重构罪犯信息哈希数据
            for(let i=0;i<result.length;i++){
              personlist_hash[result[i].FlnkID] = {
                FlnkID:result[i].FlnkID,
                CriminalID:result[i].CriminalID,
                CriminalName:result[i].CriminalName,
                Sex:result[i].Sex,
                MZ:result[i].MZ,
                SFZ:result[i].SFZ,
                ZM:result[i].ZM,
                XQ:result[i].XQ,
                ZFLB:result[i].ZFLB,
                Photo:IMG + result[i].Photo,
                ThumbUrl:result[i].ThumbUrl,
                OrgID:result[i].OrgID,
                RoomID:result[i].RoomID,
                BedID:result[i].BedID,
                InterimOrgID:result[i].InterimOrgID,
                ManageLevel:result[i].ManageLevel,
                IsZDRY:result[i].IsZDRY,
                Pinyin:result[i].Pinyin,
                DBID:result[i].DBID,
                Status:result[i].Status,
                HostID:result[i].HostID,
                IsDelete:result[i].IsDelete,
                UpdateTime:result[i].UpdateTime
              };
            }
            //所有罪犯信息缓存(传进vue的数据用于渲染页面)
            vm.criminalList.push(personlist_hash);
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });

        /* 监区人数 && 外出人数（监外） */
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data: {OrgID: localStorage.getItem('OrgID')},
          url: SHANLEI + 'CriminalCnt/GetCurOrgCriminalCount',
          success: function (result) {
            vm.crimalCount_outCrimalCount = result[0]
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });

        /* 工具基础信息 */
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data: {OrgID: localStorage.getItem('OrgID')},
          url:  SHANLEI+'ToolCnt/GetToolList' + "?callback=?",
          success: function (result) {

            //所有罪犯信息缓存(哈希，便于快速查找缓存中的罪犯详细信息)
            var toolList_hash = new Array();
            // 重构工具信息哈希数据
            for(var i=0;i<result.length;i++){
              toolList_hash[result[i].FlnkID] = {
                FlnkID:result[i].FlnkID,
                ToolID:result[i].ToolID,
                ToolType:result[i].ToolType,
                ToolName:result[i].ToolName,
                IsInsideTool:result[i].IsInsideTool,
                Photo:IMG + result[i].Photo
              };
            }
            vm.toolList.push(toolList_hash)
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        });

        /* 全部警员信息 */
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          data: {OrgID: localStorage.getItem('OrgID')},
          url: SHANLEI + 'HomeIndex/GetPoliceList',
          success: function (result) {
            //所有警员信息缓存(哈希，便于快速查找缓存中的罪犯详细信息)
            var police_hash = new Array();
            // 重构警员信息哈希数据
            for(var i=0;i<result.length;i++){
              police_hash[result[i].FlnkID] = {
                FlnkID:result[i].FlnkID,
                PoliceNum:result[i].PoliceNum,
                PoliceName:result[i].PoliceName,
                Sex:result[i].Sex,
                OrgID:result[i].OrgID,
                Post:result[i].Post,
                Telephone:result[i].Telephone,
                IntercomNum:result[i].IntercomNum,
                PoliceMobile:result[i].PoliceMobile,
                Photo:IMG + result[i].Photo,
                Pinyin:result[i].Pinyin,
                OrderIndex:result[i].OrderIndex,
                DBID:result[i].DBID,
                PoliceTag:result[i].PoliceTag,
                Status:result[i].Status,
                IsDelete:result[i].IsDelete,
                HostID:result[i].HostID,
                UpdateTime:result[i].UpdateTime,
                role:result[i].role,
                RFID:result[i].RFID,
                IC:result[i].IC
              };
            }
            vm.policeList.push(police_hash)
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });

        /* 全部地图数据 */
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: SHANLEI + 'HomeIndex/GetMapList',
          success: function (result) {
            //所有警员信息缓存(哈希，便于快速查找缓存中的罪犯详细信息)
            var map_hash = new Array();
            // 重构警员信息哈希数据
            for(var i=0;i<result.length;i++){
              map_hash[result[i].FlnkID] = {
                FlnkID:result[i].FlnkID,
                MapCode:result[i].MapCode,
                MapName:result[i].MapName,
                MapUrl:result[i].MapUrl,
                MapType:result[i].MapType,
                Width:result[i].Width,
                Height:result[i].Height,
                Scale:result[i].Scale,
                ParentID:result[i].ParentID,
                OrderIndex:result[i].OrderIndex,
                Pinyin:result[i].Pinyin,
                IsDelete:result[i].IsDelete,
                HostID:result[i].HostID,
                UpdateTime:result[i].UpdateTime,
              };
            }
            vm.mapList.push(map_hash)
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });
      }

    },
    mounted () {
      let vm = this
      vm.changeSize()
      window.aaa = this
      /* Coding By YanM */
      this.initPrison()
      /* 人员分布-14 */
      var flowPerson_outPrison = {
        Header: {
          MsgID:"201501260000000001",
          MsgType:14,
        },
        Body: JSON.stringify({
          OrgID : vm.getLocalStorage('OrgID'),
          PSType:0
        })
      }
      /* 流动人员 && 外监进入人员-24 */
      var personnel_distribution = {
        Header: {
          MsgID:"201501260000000001",
          MsgType:24
        },
        Body: JSON.stringify({
          OrgID : vm.getLocalStorage('OrgID'),
        })
      }
      /* 保持心跳 */
      var keep_heart = {
        Header: {
          MsgID:"201501260000000001",
          MsgType:1
        },
        Body: JSON.stringify({
          OrgID : vm.getLocalStorage('OrgID'),
        })
      }

      /* 打开websocket */
      vm.ws.onopen = function(){
        vm.onlinestatus = true
        setInterval(function () {
          /* 保持心跳-参数-01 */
          vm.ws.send(JSON.stringify(keep_heart))
          /* 人员分布-参数-14 */
          vm.ws.send(JSON.stringify(flowPerson_outPrison))
          /* 流动人员 && 外监进入人员-参数-24 */
          vm.ws.send(JSON.stringify(personnel_distribution))
        },5000)
      };

      vm.allDataInit()

      /* websocket接收信息 */
      vm.ws.onmessage=function(event) {
        vm.SocketAllData = event.data
        /*过滤进出工数据*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 25){
          var  receiveDataMsgType25 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType25=receiveDataMsgType25
        }

        /*工具清点提交返回结果*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 30) {
          var receiveDataMsgType30 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType30=receiveDataMsgType30
        }

        /*工具清点*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 32) {
          var receiveDataMsgType32 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType32=receiveDataMsgType32
        }

        /*人员清点*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 31) {
          var receiveDataMsgType31 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType31=receiveDataMsgType31
        }

        /*外出登记初次发送*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 20) {
          var receiveDataMsgType20 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType20=receiveDataMsgType20
        }

        /*外出罪犯信息*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 22) {
          var receiveDataMsgType22 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType22=receiveDataMsgType22
        }

        /*陪同民警信息*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 27) {
          var receiveDataMsgType27 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType27=receiveDataMsgType27
        }

        /*外出登记提交*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 23) {
          var receiveDataMsgType23 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType23=receiveDataMsgType23
        }

        /*外出登记取消*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 26) {
          var receiveDataMsgType26 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType26=receiveDataMsgType26
        }

        /*互监组管理刷卡*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 8) {
          var receiveDataMsgType8 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType8=receiveDataMsgType8
          var receiveData=receiveDataMsgType8

          if(receiveData!=""||receiveData!=null){
            if(receiveData["Type"]==2002){
              receiveData["ischoose"]=false
              receiveData["CriminalName"]=vm.criminalList[0][receiveData["PersonID"]]["CriminalName"]
              receiveData["Photo"]=vm.criminalList[0][receiveData["PersonID"]]["Photo"]
              for( var i=0;i< vm.cardPerson.length;i++){
                if(vm.cardPerson[i]["PersonID"]==receiveData["PersonID"]){
                  vm.cardPerson.splice(i,1)
                }
              }
              vm.cardPerson.push(receiveData)
            }
          }
        }

        /*手动结束人员、工具清点*/
        if(JSON.parse(vm.SocketAllData).Header.MsgType === 33) {
          var receiveDataMsgType33 = JSON.parse(JSON.parse(vm.SocketAllData).Body)
          vm.receiveDataMsgType33=receiveDataMsgType33
        }

        /* 报警信息 */
        if (JSON.parse(event.data).Header.MsgType === 2) {
          var alarmNews = JSON.parse(JSON.parse(event.data).Body)
            /* 区域过滤测试后解开 */
          if (alarmNews.OrgID.toUpperCase() == localStorage.getItem("OrgID")) {
          var criminalData = alarmNews
            criminalData.criminalID = vm.criminalList[0][alarmNews.ObjectID].CriminalID
            criminalData.Photo = vm.criminalList[0][alarmNews.ObjectID].Photo
            vm.alarmList.unshift(criminalData)
          /*限制报警条数不超过99*/
            vm.alarmList.splice(99,99999999999)
            vm.alarmText =  vm.alarmList[0].Description
            vm.alarmPages = vm.alarmList.length
            if (vm.alarmList.length != 0) {
              vm.alertBJTK = true
            } else {
              vm.alertBJTK = false
            }
          }
        }

        /* 人员分布返回数据-14 */
        if(JSON.parse(event.data).Header.MsgType === 14){
          var personnel_distribution_rec = JSON.parse(JSON.parse(event.data).Body)
          var chartsParms = []
          vm.chartsDatasName.length = 0
          for(let i=0; i<personnel_distribution_rec.length; i++){
            chartsParms[i] = {
              name:personnel_distribution_rec[i].AreaName,
              value:personnel_distribution_rec[i].CriminalCnt.GeneralManagement + personnel_distribution_rec[i].CriminalCnt.Investigate + personnel_distribution_rec[i].CriminalCnt.LooseManagement + personnel_distribution_rec[i].CriminalCnt.StrictManagement
            }
            if(vm.chartsDatasName.length !== personnel_distribution_rec.length){
              vm.chartsDatasName.push(personnel_distribution_rec[i].AreaName)
            }
          }
          vm.chartsDatas = chartsParms
        }

        /* 流动人员 && 外监进入人员-返回数据-24 */
        if(JSON.parse(event.data).Header.MsgType === 24){
          var  flowPerson_outPrison_rec = JSON.parse(JSON.parse(event.data).Body)

          // 1、外出人数（监内）
          vm.FlnkIDList_1.length = 0
          for (let i = 0; i<flowPerson_outPrison_rec[0].People.length; i++){
            vm.FlnkIDList_1.push(flowPerson_outPrison_rec[0].People[i].CriminalID)
          }

          // 2、非法流动
          vm.FlnkIDList_2.length = 0
          for (let i = 0; i<flowPerson_outPrison_rec[1].People.length; i++){
            if(vm.FlnkIDList_2.length !== flowPerson_outPrison_rec[1].People.length){
              vm.FlnkIDList_2.push(flowPerson_outPrison_rec[1].People[i].CriminalID)
            }
          }

          // 3、外监进入人员
          vm.FlnkIDList_3.length = 0
          for (let i = 0; i<flowPerson_outPrison_rec[2].People.length; i++){
            if(vm.FlnkIDList_3.length !== flowPerson_outPrison_rec[2].People.length){
              vm.FlnkIDList_3.push(flowPerson_outPrison_rec[2].People[i].CriminalID)
            }
          }

          // 4、在监人数（非在线）
          vm.FlnkIDList_4.length = 0
          for (let i = 0; i<flowPerson_outPrison_rec[3].People.length; i++){
            vm.FlnkIDList_4.push(flowPerson_outPrison_rec[3].People[i].CriminalID)
          }
        }

        /* 计划任务-返回数据-4 */
        if(JSON.parse(event.data).Header.MsgType === 4){
          var  plan_task = JSON.parse(JSON.parse(event.data).Body)
          console.log('ssssssssssssssssss',plan_task)
          if(plan_task.PlanTypeName !== '巡更计划'){
            vm.plan = plan_task.PlanTypeName
            vm.planStartTime = plan_task.StartTime
            vm.planEndTime = plan_task.EndTime
            vm.NextTime = plan_task.NextTime
            if(vm.plan == '工具清点计划'){
              if(vm.canRouter == 1){
                vm.$router.push({ path: '/toolcheck' })
              } else {
                alert('工具清点已经开始，请结束本次操作后开始工具清点')
              }
            } else if(vm.plan == '人员清点计划'){
              if(vm.canRouter === 1){
                vm.$router.push({ path: '/crimalcheck' })
              } else {
                alert('人员清点已经开始，请结束本次操作后开始人员清点')
              }
            }
          } else {
              alert(1)
          }
        }

        /* 实时流动-返回数据-3 */
        if(JSON.parse(event.data).Header.MsgType === 3){
          var  now_floating = JSON.parse(JSON.parse(event.data).Body)
          if(vm.alertSSLD === true){
            vm.nowFloating()
            vm.nowfloatPerson.unshift(now_floating)
            vm.nowfloatPersonFirst = vm.nowfloatPerson[0]
          }
        }

        /* 警员刷卡-返回数据-6 */
        if(JSON.parse(event.data).Header.MsgType === 6){
          var  placeman_card = JSON.parse(JSON.parse(event.data).Body).PoliceID
          vm.alertYHDL = false
          localStorage.setItem('placemanID',placeman_card)
        }

        /* 绑定卡-刷卡数据-51 */
        if(JSON.parse(event.data).Header.MsgType === 51){
          var  chest_card = JSON.parse(JSON.parse(event.data).Body)
          var  wristband = JSON.parse(JSON.parse(event.data).Body)
          //判断是胸卡
          if(chest_card.CardType === 0){
            if(vm.chest_card.length ===0){
              vm.chest_card.push({
                CardID:chest_card.CardID,
                CardType:chest_card.CardType,
                CriminalID:chest_card.CriminalID,
                status:false,
                CriminalName:vm.criminalList[0][chest_card.CriminalID].CriminalName,
                Photo:vm.criminalList[0][chest_card.CriminalID].Photo,
                wristband:''
              })
            //刷卡去重
            }else{
              for(let i = 0; i<=vm.chest_card.length; i++){
                if(vm.chest_card[i].CardID !== chest_card.CardID){
                  vm.chest_card.push({
                    CardID:chest_card.CardID,
                    CardType:chest_card.CardType,
                    CriminalID:chest_card.CriminalID,
                    CriminalName:vm.criminalList[0][chest_card.CriminalID].CriminalName,
                    Photo:vm.criminalList[0][chest_card.CriminalID].Photo,
                    status:false,
                    wristband:''
                  })
                } else {
//                  alert('重复输入')
                }
              }
            }
          //判断为腕带
          } else {
            if(wristband.CriminalID === "00000000-0000-0000-0000-000000000000"){
//                alert(1)
              //判断胸牌是否为空
              if(vm.chest_card.length!==0){
                for(let i = 0; i<vm.chest_card.length; i++){
                  if(vm.chest_card[i].status === true){
                    //提交绑定数据
                    vm.chest_card[i].wristband=wristband.CardID
                  }
                }
              }
            } else {
              if(vm.wristband.length === 0){
                vm.wristband.push({
                  CrimalName:vm.criminalList[0][wristband.CriminalID].CriminalName,
                  CardID:wristband.CardID,
                  CriminalID:wristband.CriminalID,
                  Photo:vm.criminalList[0][wristband.CriminalID].Photo,
                })
              } else {
                for(let i = 0; i<vm.wristband.length; i++){
                  if(vm.wristband[i].CardID !== wristband.CardID){
                    vm.wristband.push({
                      CrimalName:vm.criminalList[0][wristband.CriminalID].CriminalName,
                      CardID: wristband.CardID,
                      CriminalID: wristband.CriminalID,
                      Photo:vm.criminalList[0][wristband.CriminalID].Photo,
                    })
                  }
                }
              }
            }
          }
        }

        /* 调用ajax全量数据 */
        vm.homeData()
      }

      /* 关闭状态 */
      vm.ws.onclose = function(){
        vm.onlinestatus = false
        if(vm.onlinestatus === false){
          setInterval(function () {
            window.location.reload()
          },5000)
        }
      };

      /* 错误信息 */
      vm.ws.onerror = function(evt) {
          console.log("WebSocketError!",evt)
      }

      /* Coding By YanM */

      /* Coding By Qianjf */
      localStorage.setItem("moveTypes","0")//1为进出工，2为临时外出登记
      /* Coding By Qianjf */

    }
  }
</script>

<style>
  .home{
    height: 780px !important;
  }
  body{
    margin: 0;
    padding: 0;
  }
  html { overflow-x: hidden; overflow-y: hidden; }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*width: 100%;*/
    background: url('./assets/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 1584px;
    height: 1024px;
    overflow: hidden;

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
    font-size: 14px;
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
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
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
    font-size: 12px;
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
    width: 230px;
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
    height: 47px;
    color: black;
    text-align: left;
    font-size: 16px;
    line-height: 23px;
    overflow: hidden;
    padding: 10px;
  }
  .alarmNum{
    width: 30px;
    position: absolute;
    color: white;
    margin: 5px 50px;
    font-size: 18px;
  }
  .alertText{
    float: left;
    position: absolute;
    margin: 15px 16px;
    font-size: 22px;
    color: red;
    font-weight: 800;
  }
</style>
