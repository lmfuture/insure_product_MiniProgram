// productA/pages/paysuccess/paysuccess.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  jumpBtn:function(e){
    wx.navigateTo({
      url: '../payFail/payFail',
    })
    // 暂时看样式用
  },
  backIndex: function (e) {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})