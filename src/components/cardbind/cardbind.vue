<template>
  <el-row class="menu_title_wrap home">
    <el-col :span="1" style="height:10px"></el-col>
    <el-col :span="22">
      <div class="li4_parts">
        <div class="tab1">
          <div class="partsBody">
            <div class="bodyHead">
              <div class="title">卡绑定</div>
            </div>
            <div class="bodyCon">
              <el-row >
                  <el-row class="float_person_wrap">
                    <el-col :span="4" v-for="(item,index) in criminalList.slice(float_personnelA-1,float_personnelB)" :key='1'>
                      <div class="float_person_card card_bind_init" :class="['card_bind_init', {card_bind_select: item.status}]" @click="bindCardSelect(index)">
                        <el-col :span="10" class="photo">
                          <img :src="item.Photo" alt="" width="100%" height="100%">
                        </el-col>
                        <el-col :span="12" class="crimal_content">
                          <p>姓名：{{item.CriminalName}}</p>
                          <p>罪犯编号：{{item.CriminalID}}</p>
                          <!--<p>当前区域：{{item.area}}</p>-->
                          <!--<p>外出地点：{{item.destination}}</p>-->
                          <!--<p>陪同民警：{{item.withplace}}</p>-->
                          <p>外出时间：{{item.UpdateTime}}</p>
                          <!--<p>外出事由：{{item.outreasons}}</p>-->
                        </el-col>
                      </div>
                    </el-col>
                  </el-row>
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
  import { SHANLEI,IMG,ajaxUrl} from '../../config'

  export default {
    name: 'navheader',
    props:[

    ],
    data () {
      return {
        criminalList:[
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
          {
            CriminalName:'张三',
            CriminalID:'0111111',
            UpdateTime:'',
            status:false
          },
        ],
      }
    },
    methods: {
      bindCardSelect:function (index) {
        let vm = this
        for(let i = 0; i<vm.criminalList.length; i++){
          vm.criminalList[i].status = false
        }
        vm.criminalList[index].status = true
      }

    },
    mounted () {
      var vm = this
      /* Coding By YanM */

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
    background: #196efc;
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



</style>
