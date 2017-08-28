// 配置baseurl
// 接口地址
/* 基础数据接口地址 */
export const BasicUrl = 'http://10.58.1.145:88/api/'
/* 服务请求接口地址 */
export const ajaxUrl = 'http://10.58.1.226:20001'
/* 静态资源地址 */
export const IMG = 'http://10.58.1.178:9112'
export const MapUrl ='http://10.58.1.237:8888'
export default {
  /*全局弹窗显示变量*/
  install(Vue){
    /* 全局本地获取 */
    Vue.prototype.getLocalStorage = (keyName) => {
      return (localStorage.getItem(keyName))
    }

    /* 全局本地存储 */
    Vue.prototype.setLocalStorage = (keyName,keyValue) => {
      localStorage.setItem(keyName,keyValue)
    }
    /* websocket地址配置 */
    Vue.prototype.ws = new WebSocket('ws:10.58.1.226:20002')
  }
}
