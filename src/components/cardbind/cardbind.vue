<template>
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li4_parts">
        <div class="tabHead">
          <div  :class="['tab', { tabing: isB1}]"  @click="bandCardInfo_onBind()">绑定</div>
          <div  :class="['tab', { tabing: isB2}]"  @click="UnbandCardInfo_onUnBind()">解绑</div>
        </div>
        <div class="tab1">
          <div class="partsBody">
            <div class="bodyHead">
              <div class="title">{{CardTitle}}</div>
            </div>
            <div class="bodyCon">
              <el-row >
                  <el-row class="float_person_wrap">
                    <el-col :span="4" v-for="(item,index) in chest_card" :key='1' v-show="!isUnbind">
                      <div class="float_person_card card_bind_init" :class="['card_bind_init', {card_bind_select: item.status}, {card_bind_success:item.wristband!==''}]" @click="$emit('bindCardSelect',index)">
                        <el-col :span="10" class="photo">
                          <img :src="item.Photo" alt="" width="100%" height="100%">
                        </el-col>
                        <el-col :span="12" class="crimal_content">
                          <p>姓名：{{item.CriminalName}}</p>
                          <p>罪犯编号：{{item.CriminalID}}</p>
                          <p>胸牌编号：{{item.CardID}}</p>
                          <p>腕带编号：{{item.wristband}}</p>
                        </el-col>
                      </div>
                    </el-col>
                    <el-col :span="4" v-for="item in wristband" :key='1' v-show="isUnbind">
                      <div class="float_person_card card_bind_success">
                        <el-col :span="10" class="photo">
                          <img :src="item.Photo" alt="" width="100%" height="100%">
                        </el-col>
                        <el-col :span="12" class="crimal_content">
                          <p>姓名：{{item.CrimalName}}</p>
                          <p>罪犯编号：{{item.CriminalID}}</p>
                          <p>腕带编号：{{item.CardID}}</p>
                        </el-col>
                      </div>
                    </el-col>
                  </el-row>
              </el-row>

            </div>

          </div>
          <div class="partsFoot">
            <div style="margin: 13px 2px;float: right">
              <div class="sure" @click="bandCardInfoSubmit()" v-show="!isUnbind">提交</div>
              <div class="sure" @click="bandCardInfoUnbind()" v-show="isUnbind">提交解绑</div>
              <div class="sure" @click="bandCardUnbindAll()" v-show="isUnbind">一键解绑</div>
            </div>
          </div>
        </div>

      </div>
    </el-col>
    <el-col :span="1"  style="height:10px"></el-col>
  </el-row>

</template>

<script>
  import { GUFEI } from '../../config'

  export default {
    name: 'navheader',
    props:[
      'chest_card',
      'wristband'
    ],
    data () {
      return {
        isUnbind:false,
        CardTitle:'卡绑定',
        isB1: true,
        isB2: false,
      }
    },
    methods: {
      /* 绑定 */
      bandCardInfo_onBind:function () {
        let vm = this
        this.isB1 =  true
        this.isB2 = false
        vm.$emit('CardBindPageInit')
        vm.CardTitle = '卡绑定'
        vm.isUnbind = false
        var bandCardInfo_req = {
          Header: {
            MsgID:"201501260000000001",
            MsgType:50,
          },
          Body: JSON.stringify({
            DoorID : vm.getLocalStorage('DoorID'),
            RegType:4601
          })
        }
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: GUFEI,
          data:JSON.stringify(bandCardInfo_req),
          success: function (result) {
            console.log('开始绑定',result)
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });
      },
      /* 提交绑定 */
      bandCardInfoSubmit:function () {
          alert('提交换卡')
        let vm = this
        let ChangeCardPeopleList = []
        for(let i = 0; i<vm.chest_card.length; i++){
          ChangeCardPeopleList.push({
            CriminalID:vm.chest_card[i].CriminalID,
            ChestCard:vm.chest_card[i].CardID,
            WristCard:vm.chest_card[i].wristband
          })
        }
        console.log('提交换卡数据',ChangeCardPeopleList)
        var bandCardInfoSubmit = {
          Header: {
            MsgID:"201501260000000001",
            MsgType:52,
          },
          Body: JSON.stringify({
            DoorID : vm.getLocalStorage('DoorID'),
            ChangeCardPeopleList:ChangeCardPeopleList
          })
        }
        console.log('bandCardInfoSubmit',bandCardInfoSubmit)
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: GUFEI,
          data:JSON.stringify(bandCardInfoSubmit),
          success: function (result) {
            console.log('卡绑定信息',result)
            if(result.RET === 1){
              alert('绑定成功')
              vm.$router.push({ path: '/' })
            } else {
              alert('绑定失败')
//              vm.$router.push({ path: '/' })
            }
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });
      },
      /* 解绑 */
      UnbandCardInfo_onUnBind:function () {
        let vm = this
        this.isB1 = false
        this.isB2 = true
        vm.$emit('clearCardInfo')
        vm.CardTitle = '卡解绑'
        vm.isUnbind = true
        var bandCardInfo_req = {
          Header: {
            MsgID:"201501260000000001",
            MsgType:50,
          },
          Body: JSON.stringify({
            DoorID : vm.getLocalStorage('DoorID'),
            RegType:4603
          })
        }
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: GUFEI,
          data:JSON.stringify(bandCardInfo_req),
          success: function (result) {
            console.log('开始解绑',result)
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });
      },
      /* 提交解绑 */
      bandCardInfoUnbind:function () {
        let vm = this
        alert('提交解绑')
        let UnBundingList = []
        for(let i = 0; i<vm.wristband.length; i++){
          UnBundingList.push({
            CriminalID:vm.wristband[i].CriminalID,
            WristCard:vm.wristband[i].CardID
          })
        }

        console.log('提交解绑数据',UnBundingList)
        var UnbandCardInfoSubmit = {
          Header: {
            MsgID:"201501260000000001",
            MsgType:53,
          },
          Body: JSON.stringify({
            DoorID : vm.getLocalStorage('DoorID'),
            UnBundingList:UnBundingList
          })
        }
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: GUFEI,
          data:JSON.stringify(UnbandCardInfoSubmit),
          success: function (result) {
            if(result.RET === 1){
              alert('解除绑定成功')
              vm.$router.push({ path: '/' })
            } else {
              alert('解除绑定失败')
//              vm.$router.push({ path: '/' })
            }
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });
      },
      /* 一键解绑 */
      bandCardUnbindAll:function () {
        let vm = this
        alert('请求解绑')
        var bandCardInfo_reqAll = {
          Header: {
            MsgID:"201501260000000001",
            MsgType:50,
          },
          Body: JSON.stringify({
            DoorID : vm.getLocalStorage('DoorID'),
            RegType:4602
          })
        }
        console.log('bandCardInfo_req',bandCardInfo_reqAll)
        $.ajax({
          type: "get",
          contentType: "application/json; charset=utf-8",
          dataType: "jsonp",
          jsonp: "callback",
          async: false,
          url: GUFEI,
          data:JSON.stringify(bandCardInfo_reqAll),
          success: function (result) {
            if(result.RET === 1){
              alert('一键解绑成功')
            } else {
              alert('一键解绑失败')
            }
          },
          complete: function (XHR) {
            XHR = null;  //回收资源
          }
        });
      },
    },
    mounted () {
      var vm = this
      /* Coding By YanM */
      vm.bandCardInfo_onBind()
      vm.$emit('CardBindPageInit')
      /* Coding By YanM */
    }

  }
</script>

<style lang="scss">
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
  .card_bind_select{
    box-shadow: inset 0px 0px 9px 3px rgb(68, 74, 71);
  }
  .card_bind_success{
    background: #196efc !important;
    /*box-shadow: none ;*/
  }
  .card_bind_init{
    background: #109b62;
  }






  .li4_parts {
    height: 740px;
    margin: 0px auto;
  }

  .li4_parts .partsBody{
    width: 100%;
    height: 695px;
    background: white;

  }
  .li4_parts .partsBody {
    width: 100%;
    height: 672px;
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
  .li4_parts .tabHead{
    width: 100%;
    height: 40px;
  }
  .li4_parts .tab{
    width: 155px;
    height: 40px;
    background: #004bdc;
    font-size: 18px;
    text-align: center;
    float: left;
    color:white;
    line-height: 38px;
  }
  .li4_parts .tabing{
    background: white;
    font-size: 18px;
    color: #004bdc;
    text-align: center;
  }



</style>
