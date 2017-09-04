// 配置baseurl
// 接口地址
/* 基础数据接口地址 */
export const BasicUrl = 'http://10.58.1.145:88/api/'
$.ajax({
  type: "get",
  contentType: "application/json; charset=utf-8",
  dataType: "jsonp",
  jsonp: "callback",
  async: false,
  url:  BasicUrl+'HomeIndex/GetGateWayConfig' + "?callback=?",
  success: function (result) {
    console.log(result)
    localStorage.setItem('IP',result[0].GateWayIP)
    localStorage.setItem('WebSocketPort',result[0].ReceivePort)
    localStorage.setItem('TcpPort',result[0].TcpReceivePort)
  },
  complete: function (XHR, TS) {
    XHR = null;  //回收资源
  }
});
/* 服务请求接口地址 */
export const ajaxUrl = 'http://'+localStorage.getItem('IP')+':' +localStorage.getItem('TcpPort')
/* 静态资源地址 */
export const IMG = 'http://10.58.1.178:9112'
export const MapUrl ='http://10.58.1.237:9999'
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
    Vue.prototype.ws = new WebSocket('ws:'+localStorage.getItem('IP')+':'+localStorage.getItem('WebSocketPort'))
  }
}
