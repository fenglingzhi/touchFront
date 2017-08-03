//封装调用方法
jQuery.extend({
  //ajax同步请求Api的get方法，读取Json对象或集合
  getApiJson: function (method, m_data) {
    var ret_data = null;
    $.ajax({
      type: "get",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: method,
      async: false,
      data: m_data,
      success: function (result) {
        ret_data = result;
      },
      error: function (err) {
        ret_data = err;
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
    return ret_data;
  },
  //ajax异步请求Api的get方法，读取Json对象或集合
  getAsyncApiJson: function (method, m_data, m_backfun) {
    $.ajax({
      type: "get",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: method,
      async: true,
      data: m_data,
      success: function (result) {
        m_backfun(result);
      },
      error: function (err) {
        m_backfun(null);
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
  },
  //ajax同步请求Api的post方法，读取Json对象或集合
  postApiJson: function (method, m_data) {
    var ret_data = null;
    $.ajax({
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: method,
      async: false,
      data: JSON.stringify(m_data),
      success: function (result) {
        ret_data = result;
      },
      error: function (err) {
        ret_data = err;
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
    return ret_data;
  },
  //ajax异步请求Api的post方法，读取Json对象或集合
  postAsyncApiJson: function (method, m_data, m_backfun) {
    $.ajax({
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: method,
      async: true,
      data: JSON.stringify(m_data),
      success: function (result) {
        m_backfun(result);
      },
      error: function (err) {
        m_backfun(null);
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
  },
  //ajax同步请求Api的post方法提交保存数据
  postApiCommitData: function (method, m_data) {
    var ret_data = null;
    $.ajax({
      type: "post",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: method,
      async: false,
      data: JSON.stringify(m_data),
      success: function (result) {
        ret_data = result;
      },
      error: function (err) {
        ret_data = err;
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
    return ret_data;
  },
  //跨域读取
  getDomainApiJson:function (method, m_data, m_backfun) {
    $.ajax({
      type: "get",
      contentType: "application/json; charset=utf-8",
      dataType: "jsonp",
      jsonp: "callback",
      async: false,
      url: method + "?callback=?",
      data: m_data,
      success: function (result) {
        m_backfun(result)
      },
      error: function (err) {
        m_backfun(null);
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
  },
  //ajax同步请求Api的get方法提交保存数据
  getDomainApiCommitData: function (method, m_data, m_backfun) {
    $.ajax({
      type: "get",
      contentType: "application/json; charset=utf-8",
      dataType: "jsonp",
      jsonp: "callback",
      url: method + "?callback=?",
      async: false,
      data: m_data,
      success: function (result) {
        m_backfun(result)
      },
      error: function (err) {
        m_backfun(null);
      },
      complete: function (XHR, TS) {
        XHR = null;  //回收资源
      }
    });
  }
});
