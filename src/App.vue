-/<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navheader></navheader>
    <router-view></router-view>
    <menufooter></menufooter>
  </div>
</template>

<script>
import navheader from './components/navheader.vue'                  // 引入组件头部导航
import menufooter from './components/menufooter.vue'                // 引入组件底部菜单
export default {
  name: 'app',
  components: {
    navheader: navheader,         // 引入组件头部导航
    menufooter: menufooter        // 引入组件底部菜单
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  background: url('./assets/bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
