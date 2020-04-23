var httpUtil = require('../../utils/httpUtils');   //相对路径

//Page Object
Page({

  data: {
    productsArray: [{
      "goodsId": 1,
      "goodsTypeId": 1,
      "title": "demo",
      "img": "http://img3.imgtn.bdimg.com/it/u=1623011889,330159108&fm=26&gp=0.jpg",
      "oldPrice": 8.00,
      "price": 5.00,
      "onSale": "YES",
      "detail": null,
      "count": 100
    }, {
      "goodsId": 2,
      "goodsTypeId": 2,
      "title": "demo",
      "img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2443688626,2423352458&fm=26&gp=0.jpg",
      "oldPrice": 3.00,
      "price": 1.50,
      "onSale": "YES",
      "detail": null,
      "count": 20
    }, {
      "goodsId": 3,
      "goodsTypeId": 1,
      "title": "demo",
      "img": "http://img0.imgtn.bdimg.com/it/u=3343939642,3434755824&fm=26&gp=0.jpg",
      "oldPrice": 5.00,
      "price": 2.50,
      "onSale": "YES",
      "detail": null,
      "count": 60
    }, {
      "goodsId": 4,
      "goodsTypeId": 1,
      "title": "demo",
      "img": "http://img1.imgtn.bdimg.com/it/u=3106584297,2618354228&fm=26&gp=0.jpg",
      "oldPrice": 6.00,
      "price": 5.00,
      "onSale": "YES",
      "detail": null,
      "count": 30
    }]
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
    // httpUtil.postRequest(getApp().data.serverUrl + "/myCart/add", params, function (res) {
    //   console.log("res：", res);
    //   wx.showToast({
    //     title: '已放入购物车',
    //   })
    // }, function (err) {
    //   console.log("err：", err);
    //   wx.showToast({
    //     title: '失败!',
    //   })
    // });

    httpUtil.postRequest(getApp().data.serverUrl + "/myCart/delete", params, function (res) {
      console.log("res：", res);
      wx.showToast({
        title: '已从购物车删除一条',
      })
    }, function (err) {
      console.log("err：", err);
      wx.showToast({
        title: '删除失败!',
      })
    });
  }

});