App({
  onLaunch: function () {
    const appInstance = getApp()

      console.log('--------------app launch----------')
      console.log(appInstance.globalDatas.appId)
  },
  globalData: "I am global data",
  globalDatas: {
    hello: "hello, world!",
    appId: "tt8f23f99e101b9f1201",
    appSecret: "d2a088607ab6b746e3bfc9f39a29be9b76f74937"
  }
})
