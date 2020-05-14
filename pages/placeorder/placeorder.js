var httpUtil = require('../../utils/httpUtils');   //相对路径
var stringUtils = require('../../utils/StringUtils');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    receivePoint: "",//收货点
    receiverUserName: "",//收货人姓名
    receiverUserPhone: "",//收货人电话

    productsArray: [],
    totalPrice: 0,
    receiveProductTime: "2020-05-06"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = wx.getStorageSync('place_order_list');
    this.setData({
      productsArray: list
    })
    this.caculateCartTotal();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


  //计算总金额
  caculateCartTotal: function () {
    let that = this;
    let v = 0;
    let productsArray = that.data.productsArray;

    for (let j = 0, len = productsArray.length; j < len; j++) {
      let item = productsArray[j];
      v = v + item.goods.price * item.shopCarCount;
    }
    that.setData({
      totalPrice: v.toFixed(1)
    });
  },

  //设置提货门店
  setReceiverShop: function () {
    wx.navigateTo({
      url: '/pages/setReceiverShop/setReceiverShop',
    })
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
  onUploadOrder: function (e) {
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
        receivePoint: $data.receivePoint,
        receiverUserName: $data.receiverUserName,
        receiverUserPhone: $data.receiverUserPhone,
        productsArray: $data.productsArray,
        totalPrice: $data.totalPrice
      };
      var that = this;
      httpUtil.postRequest(getApp().data.serverUrl + "/uploadOrder", params, function (res) {
        console.log("res：", res);
        if (res.code >= 2000 & res.code < 3000) {
          //清空本地缓存订单列表
          wx.setStorageSync('place_order_list', "");
          //跳转到下单成功页面
          wx.redirectTo({
            url: '/pages/placeOrderSuccess/placeOrderSuccess',
          });
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
})