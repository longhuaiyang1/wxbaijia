var QRCode = require('../../utils/weapp-qrcode.js');//生成二维码const W = wx.getSystemInfoSync().windowWidth;
const W = wx.getSystemInfoSync().windowWidth;
const rate = 750.0 / W;
// 300rpx 在6s上为 150px
const code_w = 500 / rate;

//Page Object
Page({
  data: {
    code_w: code_w
  },
  //options(Object)
  onLoad: function (options) {
    this.onGetQRCOde();
  },
  onReady: function () {

  },
  onShow: function () {

  },
  /**
   * 生成二维码
   */
  onGetQRCOde: function () {
    //传入wxml中二维码canvas的canvas-id
    //单位为px
    var qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: wx.getStorageSync("token"),
      width: code_w,
      height: code_w,
      padding: 12,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
      callback: (res) => {
        // 生成二维码的临时文件
        console.log(res.path)
      }
    });
  },
});