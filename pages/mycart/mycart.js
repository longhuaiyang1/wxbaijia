//Page Object
var httpUtil = require('../../utils/httpUtils');   //相对路径

Page({
  data: {
    productsArray: [],

    //跟全选按钮有关
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
      that.caculateCartTotal();
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
        that.caculateCartTotal();
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
        that.caculateCartTotal();
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

  /** tab点击 */
  onTabItemTap (item) {
    console.log(item)
    // wx.showToast({
    //   title: 'tab点击',
    // })
  },

  caculateCartTotal: function () {
    let that = this;
    let v = 0;
    let productsArray = that.data.productsArray;

    for (let j = 0, len = productsArray.length; j < len; j++) {
      let item = productsArray[j];
      v = v + item.goods.price * item.shopCarCount;
    }
    that.setData({
      cartTotalPrice: v
    });
  }

});