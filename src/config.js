// 配置baseurl
// 接口地址
/* 基础数据接口地址 */
/*英德*/
// export const BasicUrl = 'http://10.58.1.178:9115/api/'

// export const BasicUrl = 'http://10.58.1.145:88/api/'

/*丁山*/
// export const BasicUrl = 'http://10.58.1.178:7701/api/'
/*上线版本*/
export const BasicUrl = 'http://'+window.location.host+'/api/'
console.log(BasicUrl)
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
    localStorage.setItem('WebSocketPort',result[0].TcpReceivePort)
    localStorage.setItem('TcpPort',result[0].ReceivePort)
  },
  complete: function (XHR, TS) {
    XHR = null;  //回收资源
  }
});

/* 服务请求接口地址 */
export const ajaxUrl = 'http://'+localStorage.getItem('IP')+':' +localStorage.getItem('TcpPort')
// export const ajaxUrl = 'http://10.58.1.237:20001'


/* 静态资源地址 */
export const IMG = ''
// export const IMG = 'http://10.58.1.178:9115'
// export const MapUrl ='http://10.58.1.237:9999'
export const MapUrl =''

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
    // Vue.prototype.ws = new WebSocket('ws:10.58.1.237:20002')

  }
}
