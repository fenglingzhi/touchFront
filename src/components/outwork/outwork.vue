<template>
  <!--<div class="navheader">人员清点</div>-->
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li1_parts">
        <div class="tabHead">
          <div :class="['tab', { tabing: isB1}]" v-on:click="toggle1()">出工{{SocketAllData}}</div>
          <div :class="['tab', { tabing: isB2}]" v-on:click="toggle2()">留监</div>
        </div>
        <div class="partsBody" v-show="isShow1">
          <div class="bodyCon">

            <el-col :span="2" v-for="(outCrimina,index)  in outCriminalList.slice(outA-1,outB)" :key="1">
              <div class="criminal">
                <img :src="outCrimina.Photo" width="98%" height="85" alt=""/>
                <span class="criminalName">{{outCrimina.CriminalName}}</span>
              </div>
            </el-col>
          </div>
          <el-row >
            <el-col :span="8" style="height: 10px"></el-col>
            <el-col :span="8" >
              <div class="pages">
                <span class="pageControl"><img src="../../assets/q1.png" v-on:click="outBack()" alt=""/></span>
                <span class="pagesText">{{outNowPage}}/{{outPages}}</span>
                <span class="pageControl"><img src="../../assets/q2.png" v-on:click="outGo()" alt=""/></span>
              </div>
            </el-col>
            <el-col :span="8" style="height: 10px"></el-col>
          </el-row>

        </div>
        <div class="partsBody" v-show="isShow2">
          <div class="bodyCon">
            <el-col :span="2" v-for="(inCriminal,index) in inCriminalList.slice(inA-1,inB)" :key="1">
              <div class="criminal">
                <img :src="inCriminal.Photo" width="98%" height="85" alt=""/>
                <span class="criminalName">{{inCriminal.CriminalName}}</span>
              </div>
            </el-col>
          </div>
          <el-row >
            <el-col :span="8" style="height: 10px"></el-col>
            <el-col :span="8" >
              <div class="pages">
                <span class="pageControl"><img src="../../assets/q1.png" v-on:click="inBack()" alt=""/></span>
                <span class="pagesText">{{inNowPage}}/{{inPages}}</span>
                <span class="pageControl"><img src="../../assets/q2.png" v-on:click="inGo()" alt=""/></span>
              </div>
            </el-col>
            <el-col :span="8" style="height: 10px"></el-col>
          </el-row>

        </div>
        <div class="partsFoot">
          <div class="sure" v-on:click="sub()">收工</div>
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
      'SocketAllData','receiveDataMsgType25'
    ],
    data () {
      return {
        isShow1: true,
        isShow2: false,
        isB1: true,
        isB2: false,
        MoveType:2601,
        areaCriminalList:[],
        outCriminalList:[],
        inCriminalList:[],
        inPages:1,//留监总页数
        inNowPage:1,//留监当前页
        inListAll:0,//留监总数
        inA:1,
        inB:48,
        outPages:1,//外出总页数
        outNowPage:1,//外出当前页
        outListAll:0,//外出总数
        outA:1,
        outB:48
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
      inGo:function () {
        if(this.inNowPage<this.inPages){
          this.inNowPage=this.inNowPage+1
          this.inA=this.inA+48
          this.inB=this.inB+48
        }else {
          alert("已经最后一页了")
        }
      },
      inBack:function () {
        if(this.inNowPage==1){
          alert("已经是第一页了")
        }else {
          this.inNowPage=this.inNowPage-1
          this.inA=this.inA-48
          this.inB=this.inB-48
        }

      },
      outGo:function () {
        if(this.outNowPage<this.outPages){
          this.outNowPage=this.outNowPage+1
          this.outA=this.outA+48
          this.outB=this.outB+48
        }else {
          alert("已经最后一页了")
        }
      },
      outBack:function () {
        if(this.outNowPage==1){
          alert("已经是第一页了")
        }else {
          this.outNowPage=this.outNowPage-1
          this.outA=this.outA-48
          this.outB=this.outB-48
        }

      },
      sub:function () {

      }
    },
    mounted(){
      var vm = this
//      发送内容
      var personnel_distribution = {
        Header: {
          MsgID:"201501260000000001",
          MsgType:25
        },
        Body: JSON.stringify({
          OrgID : localStorage.getItem('OrgID'),
          MoveType : vm.MoveType
        })
      }
      setInterval(function () {
        if(vm.ws.readyState == WebSocket.OPEN){
          vm.ws.send(JSON.stringify(personnel_distribution))
        }

          var  flowPerson_outPrison_rec = vm.receiveDataMsgType25
          if(flowPerson_outPrison_rec!=""||flowPerson_outPrison_rec!=null){
            vm.inPages=Math.ceil(vm.inCriminalList.length/48)==0?1:Math.ceil(vm.inCriminalList.length/48)
            for(var i=0;i<flowPerson_outPrison_rec.length;i++){
              var getCriminalID = flowPerson_outPrison_rec[i]["CriminalID"]
              for(var j=0;j<vm.areaCriminalList.length;j++){
                if(vm.areaCriminalList[j]["FlnkID"]==getCriminalID){
                  vm.outCriminalList.push(vm.areaCriminalList[j])
                }
              }
              for(var k=0;k<vm.inCriminalList.length;k++){
                if(vm.inCriminalList[k]["FlnkID"]==getCriminalID){
                  vm.inCriminalList.splice(k,1)
                }
              }
            }
          }


        vm.outPages=Math.ceil(vm.outCriminalList.length/48)==0?1:Math.ceil(vm.outCriminalList.length/48)

      },1000)


//      获取当前监区罪犯集合
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID")},
        url: 'http://10.58.1.145:88/api/CriminalCnt/GetCriminalList' + "?callback=?",
        success: function (result) {
          if(result!=""||result!=null){
            vm.inListAll=result.length
            for (var i=0;i<result.length;i++){
              result[i]["ischoose"]=false
            }
            vm.areaCriminalList=result
            vm.inCriminalList=result
            vm.inPages=Math.ceil(result.length/48)==0?1:Math.ceil(result.length/48)
          }
        },
        error: function (err) {
//            alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });


    }
  }

</script>

<style>

  .li1_parts{
    height: 740px;
    margin: 0px auto;
  }
  .li1_parts .tabHead{
    width: 100%;
    height: 40px;
  }
  .li1_parts .tab{
    width: 155px;
    height: 40px;
    background: #004bdc;
    font-size: 18px;
    text-align: center;
    float: left;
    color:white;
    line-height: 38px;
  }
  .li1_parts .tabing{
    background: white;
    font-size: 18px;
    color: #004bdc;
    text-align: center;
  }
  .li1_parts .partsBody{
    width: 100%;
    height: 614px;
    background: white;

  }
  .li1_parts .partsFoot{
    width: 100%;
    height: 84px;
    background: #c5cfdb;

  }
  .li1_parts .bodyCon{
    height: 522px;
    padding: 20px;
  }
  .li1_parts .pages{
    width: 273px;
    height: 50px;
    margin: 0px auto;
  }
  .li1_parts .pageControl{

  }
  .li1_parts .pagesText {
    font-size: 24px;
    display: inline-block;
    width: 155px;
    text-align: center;
  }
  .li1_parts .sure{
    width: 126px;
    height: 40px;
    background: #004bdc;
    text-align: center;
    color: white;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: 9px;
    float: right;
    margin: 24px 95px;
  }



  .li1_parts .criminal{
    /*width: 64px;*/
    height: 110px;
    /*float: left;*/
    background: #0048d9;
    margin: 6px 6px;
    text-align: center;
    padding: 2px;
  }
  .li1_parts .criminal img{
    border: 1px solid white;
  }
  .li1_parts .criminalName{
    font-size: 12px;
    color: white;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 99%;
  }

  .navheader{
    height: 122px;
    color: #fff;
    font-size: 20px;
  }
</style>
