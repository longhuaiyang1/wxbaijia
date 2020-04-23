//Page Object
Page({
  data: {
    cartAllIn: false,
    cart: [],
    cartTotal: 0,
    cartTotalPrice: 0
  },
  //options(Object)
  onLoad: function (options) {

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
});