
function getAccessToken(params) {
    console.log('params: ', params)
    console.log('appId: ', params.appId)
    const baseUrl = "https://developer.toutiao.com/api/apps/token";
    let url = baseUrl + "?appid=" + params.appId + "&secret="+params.appSecret + "&grant_type=client_credential"
    //https://developer.toutiao.com/api/apps/token?appid=ttabc&secret=942bd785dbf1fbffaaed37bb05d0968d********&grant_type=client_credential
    tt.request({
      url: url, // 目标服务器url
      success: (res) => {
        console.log('调用成功: ' + JSON.stringify(res))
      },
      fail: (res) => {
          console.log('调用失败: ' + res)
      }
    });
}

module.exports.getAccessToken = getAccessToken