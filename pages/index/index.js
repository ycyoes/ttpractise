const appInstance = getApp()
const auth = require("../../common/auth.js")
const appId = appInstance.globalDatas.appId
const appSecret = appInstance.globalDatas.appSecret

Page({
  data: {
    text: "This is page data.",
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
    console.log(appInstance.globalDatas.hello); // I am global data
    // this.login()
    this.getUserInfo();
    auth.getAccessToken({appId, appSecret})
  },
  onShow: function () {
    // Do something when page show.
    this.checkSession()
  },
  onReady: function () {
    // Do something when page ready.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  onResize: function () {
    // Do something when page resize
  },
  // Event handler.
  viewTap: function () {
    this.setData(
      {
        text: "Set some data for updating view.",
      },
      function () {
        // this is setData callback
      },
    );
  },
  login: function() {
    const appId = appInstance.globalDatas.appId
    const appSecret = appInstance.globalDatas.appSecret
    const baseUrl = "https://developer.toutiao.com/api/apps/token";
    //https://developer.toutiao.com/api/apps/token?appid=ttabc&secret=942bd785dbf1fbffaaed37bb05d0968d********&grant_type=client_credential
    tt.login({
      force: true,
      success(res) {
        console.log(`login 调用成功${res.code} ${res.anonymousCode}`);
      },
      fail(res) {
        console.log(`login 调用失败`);
      },
    });

  },

  checkSession: function() {
    tt.checkSession({
      success() {
        console.log(`session 未过期`);
      },
      fail() {
        console.log(`session 已过期，需要重新登录`);
        tt.login({
          success: (res) => {
            console.log("登录成功", res);
          },
          fail: (err) => {
            console.log("登录失败", err);
          },
        });
      },
    });
  },

  getUserInfo: function() {
    tt.getUserInfo({
        withCredentials: true,
        success(res) {
          console.log(`getUserInfo 调用成功 ${res.userInfo}`);
        },
        fail(res) {
          console.log(`getUserInfo 调用失败`);
        },
      });
  },

  // Custom Data
  customData: {
    hi: "hello",
  },
  tapName: function (event) {
    console.log(event);
  },
})
