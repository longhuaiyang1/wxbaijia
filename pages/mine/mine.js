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

  /**
  * 点击查看待收货订单
  */
  onClickOrderWaitReceive: function (e) {
    wx.navigateTo({
      url: '/pages/orderWaitReceiveList/orderWaitReceiveList',
    })
  },

  /**
   * 点击查看已完成订单
   */
  onClickOrderFinished: function (e) {
    wx.navigateTo({
      url: '/pages/orderFinishedList/orderFinishedList',
    })
  },

  /**
  * 点击查看已完成订单
  */
  onClickOrderCancled: function (e) {
    wx.navigateTo({
      url: '/pages/orderCancledList/orderCancledList',
    })
  },
});