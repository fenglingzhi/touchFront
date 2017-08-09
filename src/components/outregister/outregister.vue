<template>
  <!--<div class="navheader">人员清点</div>-->
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li3_parts">

        <div class="tab1">
          <div class="partsBody">
            <div class="bodyHead">
              <div class="title">外出登记</div>
            </div>
            <div class="bodyCon">
              <el-row >
                <el-col :span="11">
                  <el-row >
                    <div class="deailHead">
                      外出地点
                    </div>
                    <div class="deailBody" style="height:269px;">
                      <el-col :span="4" v-for="(areaName,index) in areaNameList.slice(areaA-1,areaB)" :key="1">
                        <div  :class="['choose', {choosed: areaName.ischoose}]" v-on:click="chooseArea(index)">
                          {{areaName.AreaName}}
                        </div>
                      </el-col>
                    </div>
                  </el-row>
                  <el-row >
                    <el-col :span="3" style="height: 10px"></el-col>
                    <el-col :span="18" >
                      <div class="pages">
                        <span class="pageControl"><img  v-on:click="areaBack()" src="../../assets/q1.png" alt=""/></span>
                        <span class="pagesText">{{areaNowPage}}/{{areaPages}}</span>
                        <span class="pageControl"><img  v-on:click="areaGo()" src="../../assets/q2.png" alt=""/></span>
                      </div>
                    </el-col>
                    <el-col :span="3" style="height: 10px"></el-col>
                  </el-row>

                  <div style="height:0px;"></div>

                  <el-row >
                    <el-row >
                      <div class="deailHead">
                        外出事由
                      </div>
                      <div class="deailBody" style="height:110px;">
                        <el-col :span="4" v-for="(reason,index) in reasonList.slice(reasonA-1,reasonB)" :key="1">
                          <div :class="['choose', {choosed: reason.ischoose}]" v-on:click="chooseReason(index)">
                            {{reason.DictCodeName}}
                          </div>
                        </el-col>

                      </div>
                    </el-row>
                    <el-row >
                      <el-col :span="3" style="height: 10px"></el-col>
                      <el-col :span="18" >
                        <div class="pages" style="    margin: 23px auto;">
                          <span class="pageControl"><img src="../../assets/q1.png" v-on:click="ReasonBack()" alt=""/></span>
                          <span class="pagesText">{{reasonNowPage}}/{{reasonPages}}</span>
                          <span class="pageControl"><img src="../../assets/q2.png" v-on:click="ReasonGo()" alt=""/></span>
                        </div>
                      </el-col>
                      <el-col :span="3" style="height: 10px"></el-col>
                    </el-row>

                  </el-row>
                </el-col>
                <el-col :span="2" style="height:10px;">
                <!--中间空隙-->
                </el-col>
                <el-col :span="11">
                  <el-row >
                    <div class="deailHead">
                      外出人员
                    </div>
                    <div class="deailBody" style="height:269px;">
                      <el-col :span="4" v-for="criminal in inCriminals" :key="1">
                        <div class="criminal" >
                          <img :src="criminal.headimg" width="98%" height="85" alt=""/>
                          <span class="criminalName">{{ criminal.name }}</span>
                        </div>
                      </el-col>
                    </div>
                  </el-row>
                  <el-row >
                    <el-col :span="3" style="height: 10px"></el-col>
                    <el-col :span="18" >
                      <div class="pages">
                        <span class="pageControl"><img src="../../assets/q1.png" alt=""/></span>
                        <span class="pagesText">11/30</span>
                        <span class="pageControl"><img src="../../assets/q2.png" alt=""/></span>
                      </div>
                    </el-col>
                    <el-col :span="3" style="height: 10px"></el-col>
                  </el-row>
                  <div style="height:0px;"></div>
                  <el-row >
                    <div class="deailHead">
                      陪同民警
                    </div>
                    <div class="deailBody" style="height:131px;">
                      <el-col :span="4" v-for="police in polices" :key="1">
                        <div class="criminal" >
                          <img :src="police.headimg" width="98%" height="85" alt=""/>
                          <span class="criminalName">{{ police.name }}</span>
                        </div>
                      </el-col>
                    </div>
                  </el-row>
                  <el-row >
                    <el-col :span="3" style="height: 10px"></el-col>
                    <el-col :span="18" >
                      <div class="pages">
                        <span class="pageControl"><img src="../../assets/q1.png" alt=""/></span>
                        <span class="pagesText">11/30</span>
                        <span class="pageControl"><img src="../../assets/q2.png" alt=""/></span>
                      </div>
                    </el-col>
                    <el-col :span="3" style="height: 10px"></el-col>
                  </el-row>

                </el-col>
              </el-row>

            </div>

          </div>
          <div class="partsFoot">
            <div style="margin: 13px 2px;float: right">
              <div class="sure">提交</div>
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
    data () {
      return {
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
          {name: '5555666', headimg: '/static/img/tol.png'}
        ],// 外出人员明细
        polices: [
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'}

        ], // 陪同民警明细
        areaNameList:[],//外出地点
        areaPages:1,//外出地点总页数
        areaNowPage:1,//外出地点当前页
        areaListAll:0,//外出地点总数
        areaA:1,
        areaB:30,
        reasonList:[],// 外出事由
        reasonNowPage:1,// 外出事由当前页码
        reasonPages:1,// 外出事由总页码
        reasonListAll:0,
        reasonA:1,
        reasonB:12

      }
    },
    methods: {
      chooseArea:function (dom) {
        for(var i=0;i< this.areaNameList.length;i++){
          this.areaNameList[i].ischoose=false
        }
        this.areaNameList[dom+this.areaA-1].ischoose=!this.areaNameList[dom+this.areaA-1].ischoose
      },
      chooseReason:function (dom) {
        for(var i=0;i< this.reasonList.length;i++){
          this.reasonList[i].ischoose=false
        }
        this.reasonList[dom+this.reasonA-1].ischoose=!this.reasonList[dom+this.reasonA-1].ischoose
      },
      areaGo:function () {
        if(this.areaNowPage<this.areaPages){
          this.areaNowPage=this.areaNowPage+1
          this.areaA=this.areaA+30
          this.areaB=this.areaB+30
        }else {
          alert("已经最后一页了")
        }
      },
      areaBack:function () {
        if(this.areaNowPage==1){
          alert("已经是第一页了")
        }else {
          this.areaNowPage=this.areaNowPage-1
          this.areaA=this.areaA-30
          this.areaB=this.areaB-30
        }

      }
      ,
      ReasonGo:function () {
          if(this.reasonNowPage<this.reasonPages){
            this.reasonNowPage=this.reasonNowPage+1
            this.reasonA=this.reasonA+12
            this.reasonB=this.reasonB+12
          }else {
            alert("已经最后一页了")
          }
      },
      ReasonBack:function () {
        if(this.reasonNowPage==1){
          alert("已经是第一页了")
        }else {
          this.reasonNowPage=this.reasonNowPage-1
          this.reasonA=this.reasonA-12
          this.reasonB=this.reasonB-12
        }

      }
    },
    mounted () {
      /* Coding By YanM */

      /* Coding By YanM */
      /* Coding By Qianjf */
      var vm = this
//      获取外出地点
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID")},
        url: 'http://10.58.1.145:88/api/Move/GetOutAreaList' + "?callback=?",
        success: function (result) {
          if(result!=""||result!=null){
            vm.areaListAll=result.length
              vm.areaPages=Math.ceil(result.length/30)==0?1:Math.ceil(result.length/30)
            for (var i=0;i<result.length;i++){
               result[i]["ischoose"]=false
            }
            vm.areaNameList=result
          }

        },
        error: function (err) {
          alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });
//      获取外出事由
      $.ajax({
        type: "get",
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        jsonp: "callback",
        async: false,
        data:{"OrgID":localStorage.getItem("OrgID")},
        url: 'http://10.58.1.145:88/api/Move/GetMoveReasonList' + "?callback=?",
        success: function (result) {
          if(result!=""||result!=null){

            vm.reasonListAll=result.length
            vm.reasonPages=Math.ceil(result.length/12)==0?1:Math.ceil(result.length/12)
            for (var i=0;i<result.length;i++){
              result[i]["ischoose"]=false
            }
            vm.reasonList=result
          }

        },
        error: function (err) {
          alert("请求异常")
        },
        complete: function (XHR, TS) {
          XHR = null;  //回收资源
        }
      });
      /* Coding By Qianjf */

    }

  }
</script>

<style>
  .home{
    height: 836px;
  }
  .li3_parts {
    height: 740px;
    margin: 0px auto;
  }
  .li3_parts .deailHead{
    width: 100%;
    height: 32px;
    background: rgba(0, 126, 202, 0.25);
    color: blue;
    text-align: left;
    text-indent: 28px;
    font-size: 19px;
    line-height: 33px;
  }
  li3_parts .deailBody{

  }

  .li3_parts .partsBody{
    width: 100%;
    height: 695px;
    background: white;

  }
  .li3_parts .partsBody {
    width: 100%;
    height: 675px;
    background: white;
  }
  .li3_parts .partsFoot{
    width: 100%;
    height: 84px;
    /*margin-top: -48px;*/
    background: #c5cfdb;

  }
  .li3_parts .bodyCon{
    height: 592px;
    padding: 20px;

  }
  .li3_parts .pages{
    width: 273px;
    height: 50px;
    margin: 12px auto;
  }
  .li3_parts .pageControl{

  }
  .li3_parts .pagesText {
    font-size: 24px;
    display: inline-block;
    width: 155px;
    text-align: center;
  }
  .li3_parts .sure{
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



  .li3_parts .criminal{
    width: 84%;
    height: 110px;
    float: left;
    background: #0048d9;
    margin: 6px 6px;
    text-align: center;
    padding: 2px;
  }
  .li3_parts .criminal img{
    border: 1px solid white;
  }
  .li3_parts .criminalName {
    font-size: 12px;
    color: white;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 99%;
  }
  .li3_parts .bodyHead{
    width: 100%;
    height: 46px;
    background: #c5cfdb;
  }
  .li3_parts .title{
    font-size: 25px;
    font-weight: 800;
    color: #1d68e8;
    text-shadow: 2px 2px 2px #fff;
    line-height: 45px;
    text-indent: 15px;
    float: left;

  }
  .li3_parts .titleDescribe{
    line-height: 45px;
    font-size: 20px;
    width: 856px;
    text-align: left;
  }
  .tab2 .bodyCon{
    height: 600px;
  }


  .choose{
    border: 1px solid blue;
    height: 37px;
    line-height: 35px;
    margin: 6px 5px;
    color: blue;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .choosed{
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
