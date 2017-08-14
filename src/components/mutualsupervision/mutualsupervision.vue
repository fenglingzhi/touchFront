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
                          {{generalGroup.GroupCode}}
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
                            {{provisionalGroup.GroupCode}}
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
                <el-col :span="2" style="height:10px;">
                  <!--中间空隙-->
                </el-col>
                <el-col :span="7">
                  <el-row >
                    <div class="deailHead">
                      刷卡区域
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
            <div style="margin: 13px 2px;float: right">
              <div class="sure" v-on:click="submit()">提交</div>
              <div class="sure">取消</div>
            </div>
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
    props:[
      'SocketAllData','criminalList','receiveDataMsgType8','receiveDataMsgType35'
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
        cardPerson:[]//刷卡罪犯集合

      }
    },
    methods: {

      chooseGeneralGroup:function (dom) {
        for(var i=0;i< this.generalGroupList.length;i++){
          this.generalGroupList[i].ischoose=false
        }
        this.generalGroupList[dom+this.generalGroupA-1].ischoose=!this.generalGroupList[dom+this.generalGroupA-1].ischoose
      },
      chooseProvisionalGroup:function (dom) {
        for(var i=0;i< this.provisionalGroupList.length;i++){
          this.provisionalGroupList[i].ischoose=false
        }
        this.provisionalGroupList[dom+this.provisionalGroupA-1].ischoose=!this.provisionalGroupList[dom+this.provisionalGroupA-1].ischoose
      },
      generalGroupGo:function () {
        if(this.generalGroupNowPage<this.generalGroupPages){
          this.generalGroupNowPage=this.generalGroupNowPage+1
          this.generalGroupA=this.generalGroupA+30
          this.generalGroupB=this.generalGroupB+30
        }else {
          alert("已经最后一页了")
        }
      },
      generalGroupBack:function () {
        if(this.generalGroupNowPage==1){
          alert("已经是第一页了")
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
          alert("已经最后一页了")
        }
      },
      provisionalGroupBack:function () {
        if(this.provisionalGroupNowPage==1){
          alert("已经是第一页了")
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
        var send = {
          Header: {
            MsgID:"201501260000000034",
            MsgType:35
          },
          Body: JSON.stringify({
            Type:1,
            CriminalIDs:vm.cardPerson
          })
        }
        if(vm.cardPerson==[]||vm.cardPerson==''){
          alert("还没选人")
        }else {
          //发送数据
          if(vm.ws.readyState == WebSocket.OPEN){
            vm.ws.send(JSON.stringify(send))
          }
          /*接收数据*/
         var set1=setInterval(function () {
            var receiveData = vm.receiveDataMsgType35
            if(receiveData["RET"]==1){
              clearInterval(set1)
              alert(receiveData["Description"])
            }else if(receiveData["RET"]==2){
              clearInterval(set1)
              var r=confirm(receiveData["Description"]);
              if (r==true)
              {
                var send1 = {
                  Header: {
                    MsgID:"201501260000000034",
                    MsgType:35
                  },
                  Body: JSON.stringify({
                    Type:2,
                    CriminalIDs:vm.cardPerson
                  })
                }
                //发送数据
                if(vm.ws.readyState == WebSocket.OPEN){
                  vm.ws.send(JSON.stringify(send1))
                }
                var set2=setInterval(function () {
                  if(receiveData["RET"]==1){
                    clearInterval(set2)
                    alert(receiveData["Description"])
                  }
                },1000)
              }

            }else if(receiveData["RET"]==3){
              clearInterval(set1)
             alert(receiveData["Description"])

            }else if(receiveData["RET"]==4){
              clearInterval(set1)
              var r=confirm(receiveData["Description"]);
              if (r==true)
              {
                var send3 = {
                  Header: {
                    MsgID:"201501260000000034",
                    MsgType:35
                  },
                  Body: JSON.stringify({
                    Type:3,
                    CriminalIDs:vm.cardPerson
                  })
                }
                //发送数据
                if(vm.ws.readyState == WebSocket.OPEN){
                  vm.ws.send(JSON.stringify(send3))
                }
                var set3=setInterval(function () {
                  if(receiveData["RET"]==1){
                    clearInterval(set3)
                    alert(receiveData["Description"])
                  }
                },1000)
              }
            }

          },1000)
        }
      }

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
        url: 'http://10.58.1.145:88/api/Group/GetGeneralGroupList' + "?callback=?",
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
        url: 'http://10.58.1.145:88/api/Group/GetProvisionalGroupList' + "?callback=?",
        success: function (result) {
          if(result!=""||result!=null){
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

      setInterval(function () {
        /*刷卡信息*/
        var receiveData = vm.receiveDataMsgType8

          if(receiveData!=""||receiveData!=null){
            if(receiveData[0]["PsType"]==2002){
              console.log(receiveData,"aaaaaaaaaaaaaaaa",vm.criminalList[0])
                    receiveData[0]["ischoose"]=false
                    receiveData[0]["CriminalName"]=vm.criminalList[0][receiveData[0]["PersonID"]]["CriminalName"]
                    receiveData[0]["Photo"]=vm.criminalList[0][receiveData[0]["PersonID"]]["Photo"]
                    for( var i=0;i< vm.cardPerson.length;i++){
                      if(vm.cardPerson[i]["PersonID"]==receiveData[0]["PersonID"]){
                        vm.cardPerson.splice(i,1)
                      }
                    }
                    vm.cardPerson.push(receiveData[0])


            }
          }


      },500)
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
