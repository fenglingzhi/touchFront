<template>
  <div class="home">
    <div class="body">
      <el-col :span="9">
        <div class="prison_situation">
          <h4 class="home_title">监区概况</h4>
          <div class="content">
            <el-col :span="3" style="height: 10px;"></el-col>
            <el-col :span="21">
              <p>监区人数：{{prison_situation[0].prison_num}}人</p>
              <p>在监人数：{{prison_situation[0].in_prison_num}}人</p>
              <p>外出人数（监内）：{{prison_situation[0].out_prison_num_in}}人</p>
              <p>外出人数（监外）：{{prison_situation[0].out_prison_num_out}}人</p>
              <p>非法流动人数：{{prison_situation[0].float_num}}人</p>
            </el-col>
          </div>
        </div>
        <div class="member_distribute">
          <h4 class="home_title">人员分布</h4>
          <div class="cycle_chart"></div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="floating_personnel">
          <h4 class="home_title">流动人员
            <span class="float">（非法流动{{float_personnel[0].float}}人，</span>
            <span class="out">本监外出{{float_personnel[0].out}}人）</span>
          </h4>
          <el-row class="menu_title_wrap">
            <el-col :span="6" v-for="item in float_person_card">
              <div class="float_person_card">
                <div class="phtot">
                  <img :src="item.imgurl" alt="">
                </div>
                <div class="crimal_content">
                  <p>姓名：{{item.name}}</p>{{item.imgurl}}
                  <p>罪犯编号：{{item.crimalNum}}</p>
                  <p>当前区域：{{item.area}}</p>
                  <p>外出地点：{{item.destination}}</p>
                  <p>陪同民警：{{item.withplace}}</p>
                  <p>外出时间：{{item.outtime}}</p>
                  <p>外出事由：{{item.outreasons}}</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="outside_persion_personnel">
          <h4 class="home_title">外监进入人员</h4>
        </div>
      </el-col>
    </div>
  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      // 监区概况
      prison_situation: [
        {prison_num: 200, in_prison_num: 100, out_prison_num_in: 123, out_prison_num_out: 234, float_num: 345}
      ],
      float_personnel: [
        {float: 12, out: 13}
      ],
      float_person_card: [
        {
          imgurl: './assets/crimal_1_03.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无'
        },
        {
          imgurl: './assets/crimal_1_03.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无'
        },
        {
          imgurl: './assets/crimal_1_03.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无'
        },
        {
          imgurl: './assets/crimal_1_03.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无'
        },
        {
          imgurl: './assets/crimal_1_03.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无'
        },
        {
          imgurl: './assets/crimal_1_03.jpg',
          name: '王小明',
          crimalNum: '00123',
          area: '某区域',
          destination: '无',
          withplace: '无',
          outtime: '15:44:00',
          outreasons: '无'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .body{
    height: 100%;
    color:#000;
    padding: 25px;
    overflow: auto;
    .home_title{
      color: #2553ff;
      text-shadow: -1px 1px 0px #fff;
      margin: 10px 20px;
      font-size: 20px;
      font-weight:bold;
      text-align: left;
    }
    .prison_situation{
      height: 230px;
      background: rgba(255,255,255,.8);
      text-align: left;
      overflow: auto;
      margin-bottom: 20px;
      .content{
        p{
          font-size: 16px;
          line-height: 16px;
          font-weight: bold;
        }
      }
    }
    .member_distribute{
      height:460px;
      background: rgba(255,255,255,.8);
      overflow: auto;
      text-align: left;
    }
    .floating_personnel{
      background: rgba(255,255,255,.8);
      overflow: auto;
      height: 465px;
      margin-bottom: 20px;
      margin-left: 20px;
      .float{
        color: #8a2648;
        text-shadow: none;
        font-size: 16px;
      }
      .out{
        color: #0061ff;
        text-shadow: none;
        font-size: 16px;
      }
    }
    .outside_persion_personnel{
      background: rgba(255,255,255,.8);
      overflow: auto;
      height: 225px;
      margin-left: 20px;
    }
  }
</style>
