<template>
  <!--<div class="navheader">人员清点</div>-->
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li4_parts">

        <div class="tab1">
          <div class="partsBody">
            <div class="bodyHead">
              <div class="title">互监组</div>
            </div>
            <div class="bodyCon">
              <el-row >
                <el-col :span="15">
                  <el-row >
                    <div class="deailHead">
                      普通互监组
                    </div>
                    <div class="deailBody" style="height:269px;">
                      <el-col :span="4" v-for="(generalGroup,index) in generalGroupList.slice(generalGroupA-1,generalGroupB)" :key="1">
                        <div  :class="['choose', {choosed: generalGroup.ischoose}]" v-on:click="chooseGeneralGroup(index)">
                          {{generalGroup.GroupNum}}
                        </div>
                      </el-col>

                    </div>
                  </el-row>
                  <el-row >
                    <el-col :span="3" style="height: 10px"></el-col>
                    <el-col :span="18" >
                      <div class="pages">
                        <span class="pageControl"><img src="../../assets/q1.png" v-on:click="generalGroupBack()" alt=""/></span>
                        <span class="pagesText">{{generalGroupNowPage}}/{{generalGroupPages}}</span>
                        <span class="pageControl"><img src="../../assets/q2.png" v-on:click="generalGroupGo()" alt=""/></span>
                      </div>
                    </el-col>
                    <el-col :span="3" style="height: 10px"></el-col>
                  </el-row>

                  <div style="height:0px;"></div>

                  <el-row >
                    <el-row >
                      <div class="deailHead">
                        临时互监组
                      </div>
                      <div class="deailBody" style="height:110px;">
                        <el-col :span="4" v-for="(provisionalGroup,index) in provisionalGroupList.slice(provisionalGroupA-1,provisionalGroupB)" :key="1">
                          <div  :class="['choose', {choosed: provisionalGroup.ischoose}]" v-on:click="chooseProvisionalGroup(index)">
                            {{provisionalGroup.GroupNum}}
                          </div>
                        </el-col>
                      </div>
                    </el-row>
                    <el-row >
                      <el-col :span="3" style="height: 10px"></el-col>
                      <el-col :span="18" >
                        <div class="pages" style="    margin: 23px auto;">
                          <span class="pageControl"><img src="../../assets/q1.png" v-on:click="provisionalGroupBack()" alt=""/></span>
                          <span class="pagesText">{{provisionalGroupNowPage}}/{{provisionalGroupPages}}</span>
                          <span class="pageControl"><img src="../../assets/q2.png" v-on:click="provisionalGroupGo()" alt=""/></span>
                        </div>
                      </el-col>
                      <el-col :span="3" style="height: 10px"></el-col>
                    </el-row>

                  </el-row>
                </el-col>
                <el-col :span="1" style="height:10px;">
                  <!--中间空隙-->
                </el-col>
                <el-col :span="8">
                  <el-row >
                    <div class="deailHead">
                      刷卡区域({{cardPerson.length}}人)
                    </div>
                    <div class="deailBody" style="height:269px;">
                      <el-col :span="8" v-for="(person,index) in cardPerson.slice(0,1112)" :key="1">
                        <div class="criminal" v-on:click="cancle(index)" >
                          <img :src="person.Photo" width="98%" height="100" alt=""/>
                          <span class="criminalName">{{person.CriminalName}}</span>
                        </div>
                      </el-col>
                    </div>
                  </el-row>
                </el-col>
              </el-row>

            </div>

          </div>
          <div class="partsFoot">
            <div class="alertText">{{alertText}}</div>

            <div style="margin: 13px 2px;float: right">
              <div class="sure" v-on:click="submit()">提交</div>
              <div class="sure" v-on:click="cancelSubmit()">取消</div>
            </div>
          </div>
        </div>

      </div>
    </el-col>
    <el-col :span="1"  style="height:10px"></el-col>
  </el-row>

</template>

<script>
  import { BasicUrl,IMG,ajaxUrl} from '../../config'

  export default {
    name: 'navheader',
    props:[
      'SocketAllData','criminalList','receiveDataMsgType8','receiveDataMsgType35','receiveDataMsgType20','cardPerson'
    ],

    data () {
      return {
        generalGroupList:[],//普通互监组
        generalGroupPages:1,//外出地点总页数
        generalGroupNowPage:1,//外出地点当前页
        generalGroupListAll:0,//普通互监组总数
        generalGroupA:1,
        generalGroupB:30,
        provisionalGroupList:[],// 临时互监组
        provisionalGroupNowPage:1,// 临时互监组当前页码
        provisionalGroupPages:1,// 临时互监组总页码
        provisionalGroupListAll:0,
        provisionalGroupA:1,
        provisionalGroupB:12,
        isSuccess:0,
        alertText:"",
//        cardPerson:[]//刷卡罪犯集合

      }
    },
    methods: {

      chooseGeneralGroup:function (dom) {
        for(var i=0;i< this.generalGroupList.length;i++){
          this.generalGroupList[i].ischoose=false
        }
        localStorage.setItem("criminalGroupIDs",this.generalGroupList[dom+this.generalGroupA-1].FlnkID)
        this.generalGroupList[dom+this.generalGroupA-1].ischoose=!this.generalGroupList[dom+this.generalGroupA-1].ischoose
        this.$router.push({ path: '/position' })
      },
      chooseProvisionalGroup:function (dom) {
        for(var i=0;i< this.provisionalGroupList.length;i++){
          this.provisionalGroupList[i].ischoose=false
        }
        localStorage.setItem("criminalGroupIDs", this.provisionalGroupList[dom+this.provisionalGroupA-1].FlnkID)
        this.provisionalGroupList[dom+this.provisionalGroupA-1].ischoose=!this.provisionalGroupList[dom+this.provisionalGroupA-1].ischoose
      },
      generalGroupGo:function () {
        if(this.generalGroupNowPage<this.generalGroupPages){
          this.generalGroupNowPage=this.generalGroupNowPage+1
          this.generalGroupA=this.generalGroupA+30
          this.generalGroupB=this.generalGroupB+30
        }else {
//          alert("已经最后一页了")
        }
      },
      generalGroupBack:function () {
        if(this.generalGroupNowPage==1){
//          alert("已经是第一页了")
        }else {
          this.generalGroupNowPage=this.generalGroupNowPage-1
          this.generalGroupA=this.generalGroupA-30
          this.generalGroupB=this.generalGroupB-30
        }

      }
      ,
      provisionalGroupGo:function () {
        if(this.provisionalGroupNowPage<this.provisionalGroupPages){
          this.provisionalGroupNowPage=this.provisionalGroupNowPage+1
          this.provisionalGroupA=this.provisionalGroupA+12
          this.provisionalGroupB=this.provisionalGroupB+12
        }else {
//          alert("已经最后一页了")
        }
      },
      provisionalGroupBack:function () {
        if(this.provisionalGroupNowPage==1){
//          alert("已经是第一页了")
        }else {
          this.provisionalGroupNowPage=this.provisionalGroupNowPage-1
          this.provisionalGroupA=this.provisionalGroupA-12
          this.provisionalGroupB=this.provisionalGroupB-12
        }

      },
      cancle:function (index) {
        var r=confirm("确定要删除该人员？");
        if (r==true)
        {
           this.cardPerson.splice(index,1)
        }

      },
      submit:function () {
        var vm=this
        var cardPersonList=[]
        for (var i=0;i<vm.cardPerson.length;i++){
          cardPersonList.push(vm.cardPerson[i]["PersonID"])
        }
        var send1 = {
          Header: {
            MsgID:"201501260000000034",
            MsgType:35
          },
          Body: JSON.stringify({
            CmdType:1,
            CriminalIDs:cardPersonList
          })
        }
        if(vm.cardPerson==[]||vm.cardPerson==''){
          vm.alertText="还没人刷卡"
          setTimeout(function () {
            vm.alertText=""
          },2000)
        }else {
          $.ajax({
            type: "get",
            contentType: "application/json; charset=utf-8",
            dataType: "jsonp",
            jsonp: "callback",
            async: false,
            url: ajaxUrl,
            data:JSON.stringify(send1),
            success: function (result) {
              if(result.Ret==1){
                vm.alertText=result.Description
                setTimeout(function () {
                  vm.alertText=""
                },2000)
              }else if(result.Ret==2){
                var r=confirm(result.Description);
                if (r==true)
                {
                  var send2 = {
                    Header: {
                      MsgID:"201501260000000034",
                      MsgType:35
                    },
                    Body: JSON.stringify({
                      CmdType:2,
                      CriminalIDs:cardPersonList
                    })
                  }
                  //发送数据
                  $.ajax({
                    type: "get",
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    jsonp: "callback",
                    async: false,
                    url: ajaxUrl,
                    data:JSON.stringify(send2),
                    success: function (result) {
                      if(result.RET==1){
                        vm.alertText=result.Description
                        setTimeout(function () {
                          vm.alertText=""
                        },2000)
                      }else {
                        vm.alertText=result.Description
                        setTimeout(function () {
                          vm.alertText=""
                        },2000)
                      }
                    },
                    complete: function (XHR, TS) {
                      XHR = null;  //回收资源
                    }
                  })

                }
              }else if(result.Ret==3){
                vm.alertText=result.Description
                setTimeout(function () {
                  vm.alertText=""
                },2000)
              }else if(result.Ret==4){
                var r=confirm(result.Description);
                if (r==true)
                {
                  var send4 = {
                    Header: {
                      MsgID:"201501260000000034",
                      MsgType:35
                    },
                    Body: JSON.stringify({
                      CmdType:2,
                      CriminalIDs:cardPersonList
                    })
                  }
                  //发送数据
                  $.ajax({
                    type: "get",
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    jsonp: "callback",
                    async: false,
                    url: ajaxUrl,
                    data:JSON.stringify(send4),
                    success: function (result) {
                      if(result.RET==1){
                        vm.alertText=result.Description
                        setTimeout(function () {
                          vm.alertText=""
                        },2000)
                      }else {
                        vm.alertText=result.Description
                        setTimeout(function () {
                          vm.alertText=""
                        },2000)
                      }
                    },
                    complete: function (XHR, TS) {
                      XHR = null;  //回收资源
                    }
                  })
                }else {
                  var send5 = {
                    Header: {
                      MsgID:"201501260000000034",
                      MsgType:35
                    },
                    Body: JSON.stringify({
                      CmdType:3,
                      CriminalIDs:cardPersonList
                    })
                  }
                  //发送数据
                  $.ajax({
                    type: "get",
                    contentType: "application/json; charset=utf-8",
                    dataType: "jsonp",
                    jsonp: "callback",
                    async: false,
                    url: ajaxUrl,
                    data:JSON.stringify(send5),
                    success: function (result) {
                      if(result.Ret==1){
                        vm.alertText=result.Description
                        setTimeout(function () {
                          vm.alertText=""
                        },2000)
                      }else {
                        vm.alertText=result.Description
                        setTimeout(function () {
                          vm.alertText=""
                        },2000)
                      }
                    },
                    complete: function (XHR, TS) {
                      XHR = null;  //回收资源
                    }
                  })
                }
              }
            },
            error: function (err) {
          console.log("请求异常")
            },
            complete: function (XHR, TS) {
              XHR = null;  //回收资源
            }
          })
        }
      },
      cancelSubmit:function () {
        this.$router.push({ path: '/' })
         this.$emit('delCardPerson')

        var vm=this
        var send3 = {
          Header: {
            MsgID:"201501260000000035",
            MsgType:26
          },
          Body: JSON.stringify({
            OrgID : localStorage.getItem('OrgID'),
            DoorID : localStorage.getItem('DoorID')
          })
        }
        //发送数据
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: ajaxUrl,
          data:JSON.stringify(send3),
          success: function (result) {

          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        })

      },

      firstWs:function () {
        var vm=this
        var send1 = {
          Header: {
            MsgID:"201501260000000035",
            MsgType:20
          },
          Body: JSON.stringify({
            OrgID : localStorage.getItem('OrgID'),
            DoorID : localStorage.getItem('DoorID'),
            AreaID : localStorage.getItem('AreaID'),
            RegType:2604
          })
        }
        //发送数据
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: ajaxUrl,
          data:JSON.stringify(send1),
          success: function (result) {
            if(result.RET==1){
              vm.isSuccess=1
            }else {
              vm.isSuccess=0
            }
          },
          complete: function (XHR, TS) {
            XHR = null;  //回收资源
          }
        })


      },

    },
    mounted () {
      /* Coding By YanM */

      /* Coding By YanM */
      /* Coding By Qianjf */
      var vm = this
//      获取普通互监组
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID")},
        url:  BasicUrl+'Group/GetGeneralGroupList' + "?callback=?",
        success: function (result) {
          if(result!=""||result!=null){
            vm.generalGroupListAll=result.length
            vm.generalGroupPages=Math.ceil(result.length/30)==0?1:Math.ceil(result.length/30)
            for (var i=0;i<result.length;i++){
              result[i]["ischoose"]=false
            }
            vm.generalGroupList=result
          }

        },
        error: function (err) {
          alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });
//     获取临时互监组
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID")},
        url:  BasicUrl+'Group/GetProvisionalGroupList' + "?callback=?",
        success: function (result) {
          if(result!=""&&result!=null){
            vm.provisionalGroupListAll=result.length
            vm.provisionalGroupPages=Math.ceil(result.length/12)==0?1:Math.ceil(result.length/12)
            for (var i=0;i<result.length;i++){
              result[i]["ischoose"]=false
            }
            vm.provisionalGroupList=result
          }

        },
        error: function (err) {
          alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });

      vm.firstWs()

//      setInterval(function () {
//          if(vm.isSuccess==1){
//            /*刷卡信息*/
//            var receiveData = vm.receiveDataMsgType8
//            if(receiveData!=""||receiveData!=null){
//              if(receiveData["Type"]==2002){
//                receiveData["ischoose"]=false
//                receiveData["CriminalName"]=vm.criminalList[0][receiveData["PersonID"]]["CriminalName"]
//                receiveData["Photo"]=vm.criminalList[0][receiveData["PersonID"]]["Photo"]
//                for( var i=0;i< vm.cardPerson.length;i++){
//                  if(vm.cardPerson[i]["PersonID"]==receiveData["PersonID"]){
//                    vm.cardPerson.splice(i,1)
//                  }
//                }
//                vm.cardPerson.push(receiveData)
//              }
//            }
//
//          }
//      },200)
      /* Coding By Qianjf */

    }

  }
</script>

<style>

  .li4_parts {
    height: 740px;
    margin: 0px auto;
  }
  .li4_parts .deailHead{
    width: 100%;
    height: 32px;
    background: rgba(0, 126, 202, 0.25);
    color: blue;
    text-align: left;
    text-indent: 28px;
    font-size: 19px;
    line-height: 33px;
  }
  li4_parts .deailBody{

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
    /*margin-top: -48px;*/
    background: #c5cfdb;

  }
  .li4_parts .bodyCon{
    height: 592px;
    padding: 20px;

  }
  .li4_parts .pages{
    width: 273px;
    height: 50px;
    margin: 12px auto;
  }
  .li4_parts .pageControl{

  }
  .li4_parts .pagesText {
    font-size: 24px;
    display: inline-block;
    width: 155px;
    text-align: center;
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
    width: 84%;
    height: 124px;
    float: left;
    background: #0048d9;
    margin: 6px 6px;
    text-align: center;
    padding: 2px;
  }
  .li4_parts .criminal img{
    border: 1px solid white;
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
  .li4_parts .titleDescribe{
    line-height: 45px;
    font-size: 20px;
    width: 856px;
    text-align: left;
  }
  .li4_parts .tab2 .bodyCon{
    height: 600px;
  }


  .li4_parts .choose{
    border: 1px solid blue;
    height: 37px;
    line-height: 35px;
    margin: 6px 5px;
    color: blue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .li4_parts .choosed{
    border: 1px solid blue;
    height: 37px;
    line-height: 35px;
    margin: 6px 5px;
    color: white;
    background: blue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
