var httpUtil = require('../../utils/httpUtils');   //相对路径

//Page Object
Page({

  data: {
    productsArray: []
  },
  //options(Object)
  onLoad: function (options) {
    let params = {};
    var that = this;
    var appInst = getApp();
    httpUtil.getRequest(
      appInst.data.serverUrl + "/getAllGoods", params, function (res) {
        console.log("res：", res);
        that.setData({
          productsArray: res
        })
      }, function (err) {
        console.log("err：", header);
      });

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  },

  onAddProductToMyCart: function (e) {
    console.log(e);
    var $data = e.currentTarget.dataset;

    let params = {
      session_key: wx.getStorageSync("session_key"),
      goods_id: $data.id
    };
    var that = this;
    httpUtil.postRequest(getApp().data.serverUrl + "/myCart/add", params, function (res) {
      console.log("res：", res);
      wx.showToast({
        title: '已放入购物车',
      })
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '失败!',
      })
    });

    //删除购物车商品
    // httpUtil.postRequest(getApp().data.serverUrl + "/myCart/delete", params, function (res) {
    //   console.log("res：", res);
    //   wx.showToast({
    //     title: '已从购物车删除一条',
    //   })
    // }, function (err) {
    //   console.log("err：", err);
    //   wx.showToast({
    //     title: '删除失败!',
    //   })
    // });
  }

});