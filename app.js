var stringUtils = require('./utils/StringUtils');   //相对路径
var httpUtil = require('./utils/httpUtils');

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId 用户唯一标识, sessionKey 会话密钥, unionId 单个小程序不会返回，一个开发账号有多个小程序才会返
        console.log(res);
        let params = {
          code: res.code
        };

        httpUtil.postRequest(getApp().data.serverUrl + "/login", params, function (res) {
          //获取到用户数据,保存用户信息数据到本地
          if (!stringUtils.isEmpty(res.openid)) {
            console.log("微信认证保存数据到本地：", res);
            wx.setStorage({
              key: "openid",
              data: res.openid
            })

            wx.setStorage({
              key: "session_key",
              data: res.session_key
            })
          }
        }, function (err) {
          console.log("err：", header);
        });

      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log("&&&&&&this.globalData.userInfo:" + res.userInfo);
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    classifyList: {},  //商品列表
    userInfo: {},     //用户信息

    userName: "",//用户名
    phone: "",//电话
    homeAddress: "",//家庭住址
    getProductAddress: ""//自提点
  },
  data: {
    serverUrl: "http://localhost:8085",
    //token: wx.getStorageSync('user').token,  //
    // storageKey: 'RATING_KEY',
    // amapKey: "100bfacd42fcddae6283637a4b6b1f22",
    // QQmapKey: "PLIBZ-FILYD-C3W4H-HTEG4-6CGRV-PHFHQ",
    // sessionKey: "",
    // appId: ''
    //envVersion: "trial",    //develop（开发版），trial（体验版），release（正式版）,
  },
})