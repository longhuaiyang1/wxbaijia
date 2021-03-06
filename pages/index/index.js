// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://img0.imgtn.bdimg.com/it/u=880477421,2302497799&fm=27&gp=0.jpg",
      "http://img5.imgtn.bdimg.com/it/u=1741138662,3408053349&fm=27&gp=0.jpg",
      "http://img4.imgtn.bdimg.com/it/u=2930540385,1562266871&fm=27&gp=0.jpg",
    ],
    //分类信息存储
    classify:[
      {
        url: "http://img1.imgtn.bdimg.com/it/u=228757436,1698566375&fm=27&gp=0.jpg",
        class: '新鲜蔬菜',
        where: 'myFruits',
      },
      {
        url: "http://img3.imgtn.bdimg.com/it/u=3977131877,3939061076&fm=200&gp=0.jpg",
        class: '时令水果',
        where: 'myMeat',
      },
      {
        url:"http://img0.imgtn.bdimg.com/it/u=2643138296,454739920&fm=27&gp=0.jpg",
        class: '粮油干货',
      },

      {
        url: "http://img4.imgtn.bdimg.com/it/u=1467212894,102176156&fm=27&gp=0.jpg",
        class: '水产冻品',
      },
      {
        url:"http://img1.imgtn.bdimg.com/it/u=3747107757,1957790606&fm=27&gp=0.jpg",
        class: '肉禽蛋品',
      },
      {
        url: "http://img4.imgtn.bdimg.com/it/u=485778917,1868567867&fm=27&gp=0.jpg",
        class: '厨卫百货',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})