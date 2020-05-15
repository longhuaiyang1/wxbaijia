//Page Object
Page({
  data: {
  },
  //options(Object)
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
  },

  /**
   * 点击查看未付款订单
   */
  onClickOrderUnpay: function (e) {
    wx.navigateTo({
      url: '/pages/orderUnpayList/orderUnpayList',
    })
  },

});