Page({

  /**
   * 页面的初始数据
   */
  data: {
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

})