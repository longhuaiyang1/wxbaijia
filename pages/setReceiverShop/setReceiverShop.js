var httpUtil = require('../../utils/httpUtils');   //相对路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    receivePoints: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = {
      session_key: wx.getStorageSync("session_key"),
    };
    var that = this;
    httpUtil.getRequest(getApp().data.serverUrl + "/getReceivePoints", params, function (res) {
      console.log("res：", res);
      that.setData({
        receivePoints: res
      })
      that.caculateCartTotal();
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '获取数据失败!',
      })
    });
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

  /**
   * 选中某个地点
   */
  onItemSelected: function () {

  },
})