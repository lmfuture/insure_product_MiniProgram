// productA/pages/payFail/payFail.js
Page({
  data: {
    countNUM:''
  },
  onLoad: function (options) {
    console.log()
    this.countDown((new Date('2019-05-15 20:00:00').getTime() - new Date().getTime()) / 1000)
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
  backIndex:function(e){
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  countDown: function (times) {
    let that=this;
    let timer = null;
    timer = setInterval(function () {
      let [hour, minute, sceond] = [ 0, 0, 0];
      if (times > 0) {
        hour = Math.floor(times / (60 * 60));
        minute = Math.floor(times / 60)  - (hour * 60);
        sceond = Math.floor(times)  - (hour * 60 * 60) - (minute * 60);
        that.setData({
          countNUM: [hour, minute, sceond].map(that.formatNumber).join(':')
        })
      }
      times--;
      if(times<=0){
        clearInterval(timer)
        that.setData({
          countNUM: '已过期'
        })
      }
    }, 1000)
  },
  formatNumber:function(n){
    n = n.toString()
    return n[1] ? n : '0' + n
  }
})