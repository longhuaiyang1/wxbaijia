//Page Object
var httpUtil = require('../../utils/httpUtils');   //相对路径

Page({
  data: {
    productsArray: [],

    cartAllIn: false,
    cart: [],
    cartTotal: 0,
    cartTotalPrice: 0
  },
  //options(Object)
  onLoad: function (options) {
  },

  /**
    * 生命周期函数--监听页面显示
    */
  onShow: function () {
    let params = {
      session_key: wx.getStorageSync("session_key"),
    };
    var that = this;
    httpUtil.postRequest(getApp().data.serverUrl + "/myCart/getShopCarList", params, function (res) {
      console.log("res：", res);
      that.setData({
        productsArray: res
      })
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '获取数据失败!',
      })
    });
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
      if (res.code >= 2000 & res.code < 3000) {
        that.setData(
          {
            productsArray: res.data
          }
        )
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

  onDeleteProductFromMyCart: function (e) {
    console.log(e);
    var $data = e.currentTarget.dataset;

    let params = {
      session_key: wx.getStorageSync("session_key"),
      goods_id: $data.id
    };
    var that = this;

    //删除购物车商品
    httpUtil.postRequest(getApp().data.serverUrl + "/myCart/delete", params, function (res) {
      console.log("res：", res);
      if (res.code >= 2000 & res.code < 3000) {
        that.setData(
          {
            productsArray: res.data
          }
        )
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '删除失败!',
      })
    });
  },

  //跳转到购物商品列表页
  onGotoShopping: function (e) {
    wx.switchTab({
      url: '/pages/products/products',
    })
  },


  // 购物车全选操作
  cartAllIn: function () {
    this.setData({
      cartAllIn: true,
      cart: this.data.cart,
      cartTotal: 0,
      cartTotalPrice: 0
    });
  },

  /** tab点击 */
  onTabItemTap (item) {
    console.log(item)
    // wx.showToast({
    //   title: 'tab点击',
    // })
  }

});