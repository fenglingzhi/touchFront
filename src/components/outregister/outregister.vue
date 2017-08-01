<template>
  <!--<div class="navheader">人员清点</div>-->
  <el-row class="menu_title_wrap">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li2_parts">

        <div class="tab1">
          <div class="partsBody" style="height:392px;">
            <div class="bodyHead">
              <div class="title">外出登记</div>
            </div>
            <div class="bodyCon">
              <el-col :span="2" v-for="criminal in inCriminals">
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
        // 监内未点人员明细
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
        ],
        // 外出未点人员明细
        outCriminals: [
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'}

        ],
        // 清点记录
        inventoryRecords: [
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'},
          {n1: '张学友', n2: '张学友', n3: '张学友', n4: '张学友', n5: '张学友', n6: '张学友', n7: '张学友'}
        ]
      }
    },
    methods: {

    }
  }
</script>

<style>
  .li2_parts {
    height: 740px;
    margin: 0px auto;
  }
  .li2_parts .tabHead{
    width: 100%;
    height: 40px;
  }
  .li2_parts .tab{
    width: 127px;
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
