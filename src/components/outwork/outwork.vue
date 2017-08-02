<template>
  <!--<div class="navheader">人员清点</div>-->
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li1_parts">
        <div class="tabHead">
          <div :class="['tab', { tabing: isB1}]" v-on:click="toggle()">出工</div>
          <div :class="['tab', { tabing: isB2}]" v-on:click="toggle()">留监</div>
        </div>
        <div class="partsBody" v-show="isShow1">
          <div class="bodyCon">
            <el-col :span="2">
              <div class="criminal">
                <img src="../../assets/crimal_1_03.jpg" width="98%" height="85" alt=""/>
                <span class="criminalName">张三</span>
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
        <div class="partsBody" v-show="isShow2">
          <div class="bodyCon">
            <el-col :span="2">
              <div class="criminal">
                <img src="../../assets/crimal_1_03.jpg" width="98%" height="85" alt=""/>
                <span class="criminalName">1233213</span>
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
          <div class="sure">收工</div>
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
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'},
          {name: '张学友', headimg: '/static/img/crimal_1_03.5a235b3.jpg'}
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
        isShow1: true,
        isShow2: false,
        isB1: true,
        isB2: false
      }
    },
    methods: {
      toggle: function () {
        this.isShow1 = !this.isShow1
        this.isShow2 = !this.isShow2
        this.isB1 = !this.isB1
        this.isB2 = !this.isB2
      }
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
    width: 127px;
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
