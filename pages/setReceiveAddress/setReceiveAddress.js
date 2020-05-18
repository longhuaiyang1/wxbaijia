var httpUtil = require('../../utils/httpUtils');   //相对路径
var stringUtils = require('../../utils/StringUtils');

//Page Object
Page({
  data: {
    receivePoint: "",//收货点
    receiverUserName: "",//收货人姓名
    receiverUserPhone: "",//收货人电话
  },
  //options(Object)
  onLoad: function (options) {
    this.getUserReceiveInfo();
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },

  bindReceiverUserNameInput: function (e) {
    this.setData({
      receiverUserName: e.detail.value
    })
  },

  bindReceiverUserPhoneInput: function (e) {
    this.setData({
      receiverUserPhone: e.detail.value
    })
  },

  /**
   * 提交订单
   */
  onUploadReceiveAddress: function (e) {
    let $data = this.data;
    if (stringUtils.isEmpty($data.receivePoint)) {
      wx.showToast({
        title: '请先设置提货点',
        icon: 'none'
      })
    } else if (stringUtils.isEmpty($data.receiverUserName)) {
      wx.showToast({
        title: '请先设置购买人',
        icon: 'none'
      })
    } else if ($data.receiverUserPhone.length < 11) {
      if ($data.receiverUserPhone.length == 0) {
        wx.showToast({
          title: '请先设置手机号',
          icon: 'none'
        })
      } else {
        wx.showToast({
          title: '手机号位数不正确',
          icon: 'none'
        })
      }
    } else {
      //上报数据
      $data = this.data;
      let params = {
        token: wx.getStorageSync("token"),
        receivePoint: $data.receivePoint,
        receiverUserName: $data.receiverUserName,
        receiverUserPhone: $data.receiverUserPhone,
      };
      var that = this;
      httpUtil.postRequest(getApp().data.serverUrl + "/uploadReceiveAddress", params, function (res) {
        console.log("res：", res);
        if (res.code >= 2000 & res.code < 3000) {
          wx.navigateBack({
            //返回
            delta: 1
          })
          wx.showToast({
            title: "保存成功",
          })
        } else {
          wx.showToast({
            title: res.msg,
          })
        }
      }, function (err) {
        console.log("err：", err);
        wx.showToast({
          title: '提交订单失败!',
        })
      });
    }
  },

  /**
 * 获取用户收货信息
 */
  getUserReceiveInfo: function () {
    //上报数据
    let $data = this.data;
    let params = {
      token: wx.getStorageSync("token"),
    };
    var that = this;
    httpUtil.postRequest(getApp().data.serverUrl + "/getUserReceiveInfo", params, function (res) {
      console.log("res：", res);
      if (res.code >= 2000 & res.code < 3000) {
        that.setData({
          receivePoint: res.data.receivePoint,
          receiverUserName: res.data.user.receiverName,
          receiverUserPhone: res.data.user.receiverPhone,
        })
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    }, function (err) {
      console.log("err：", err);
    });
  },

  //设置提货门店
  setReceiverShop: function () {
    wx.navigateTo({
      url: '/pages/setReceiverShop/setReceiverShop',
    })
  },
});