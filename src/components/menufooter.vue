<template>
  <div class="menufooter">
    <el-row class="menu_title_wrap">
      <!--<el-col :span="1" class="menu_title"></el-col>-->
      <el-col :span="4" class="menu_title" v-for="item in menuList" :key="1">
        <div @click="gopage(item.path)">{{item.name}}</div>
      </el-col>
      <!--<el-col :span="1" class="menu_title"></el-col>-->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'menufooter',
  props:['YHDL'],
  data () {
    return {
      menuList: [
        {name: '首页展示', path: '/'},
        {name: '出工收工', path: '/outwork'},
        {name: '人员清点', path: '/crimalcheck'},
        {name: '工具清点', path: '/toolcheck'},
        {name: '外出登记', path: '/outregister'},
//        {name: '定位展示', path: '/position'},
        {name: '互监组管理', path: '/mutualsupervision'}
      ],
    }
  },
  methods: {
    gopage: function (path) {
      var vm = this
      // 路由跳转
      this.$router.push({ path: path })
      if(path === '/outwork' || path === '/outregister'){
        vm.$emit('openLogin',true)
      }
    },
  }
}
</script>

<style lang="scss">
a{
  color: #fff;
  text-decoration: none;
}
.menufooter{
  padding:0 25px;
  height: 122px;
  color: #fff;
  overflow: auto;
  .menu_title_wrap{
    height:70px;
    border-bottom: 1px solid #fff;
    line-height: 70px;
    margin: 20px 30px 0 30px;
  }
  .menu_title{
    height:70px;
    cursor: pointer;
  }
  .menu_title:hover{
    border-bottom: 3px solid #fff;
  }
}
</style>
