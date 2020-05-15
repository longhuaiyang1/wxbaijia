//Page Object
var httpUtil = require('../../utils/httpUtils');   //相对路径

Page({
  data: {
    list: []
  },
  //options(Object)
  onLoad: function (options) {
    let params = {
      token: wx.getStorageSync("token"),
    };
    var that = this;
    httpUtil.postRequest(getApp().data.serverUrl + "/getOrderUnpayList", params, function (res) {
      console.log("res：", res);
      if (res.code >= 2000 & res.code < 3000) {
        that.setData({
          list: res.data
        })
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '获取失败!',
      })
    });
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },

});