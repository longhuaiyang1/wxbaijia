



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

  /**
* 点击设置收货地址
*/
  onClickSetReceiveAddress: function (e) {
    wx.navigateTo({
      url: '/pages/setReceiveAddress/setReceiveAddress',
    })
  },

  /**
   * 拨打客户电话
   */
  onCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: '17761222067',
    })
  },

  onScanCode: function (e) {
    // 只允许从相机扫码
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
        wx.setStorageSync('receiverToken', res.result);
        wx.navigateTo({
          url: "/pages/qrCodeReceiveList/qrCodeReceiveList",
        })
       
      }
    })
  },

  /**
   * 跳转到提货二维码页面 
   */
  onClickQrCode: function (e) {
    wx.navigateTo({
      url: '/pages/qrCode/qrCode',
    })
  },
});