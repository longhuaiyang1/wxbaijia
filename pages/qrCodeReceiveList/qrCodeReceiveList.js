var httpUtil = require('../../utils/httpUtils');   //相对路径
var stringUtils = require('../../utils/StringUtils');

//Page Object
Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    let params = {
      token: wx.getStorageSync("token"),
      receiverToken: wx.getStorageSync("receiverToken"),
    };
    var that = this;
    httpUtil.postRequest(getApp().data.serverUrl + "/getQrCodeReceiveList", params, function (res) {
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
  onFinishOrder: function (e) {
    let list = this.data.list;
    let orderIdsList = [];
    //获取订单列表
    for (let i = 0; i < list.length; i++) {
      orderIdsList.push(list[i].orderId);
    }

    //
    let params = {
      token: wx.getStorageSync("token"),
      receiverToken: wx.getStorageSync("receiverToken"),
      orderIdsList: orderIdsList
    };
    var that = this;
    httpUtil.postRequest(getApp().data.serverUrl + "/finishQrCodeReceiveList", params, function (res) {
      console.log("res：", res);
      if (res.code >= 2000 & res.code < 3000) {
        that.setData({
          list: []
        })
        wx.showToast({
          title: "成功",
        })
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '失败!',
      })
    });
  },

});