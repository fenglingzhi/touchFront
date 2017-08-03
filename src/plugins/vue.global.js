/**
 * Created by Administrator on 2017/8/3.
 */
/* vue自定义插件方法 */
export default {
  /*全局弹窗显示变量*/
  install(Vue){
    Vue.prototype.alertYHDL = false
    Vue.prototype.alertJQXZ = false
    Vue.prototype.alertBJXX = false
    Vue.prototype.alertSSLD = false
    Vue.prototype.alertYDMD = false

  }
}
