// pages/jkgz/jkgz.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx
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
  showError:function(){
    wx.showModal({
      content: '非常抱歉，您不满足本产品投保条件，去看看其他产品吧！',
      cancelText:"选错了",
      cancelColor:"#9E9E9E",
      confirmText:"其他产品",
      confirmColor:"#FFA600",
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  toProductForm:function(){
    wx.navigateTo({
      url:"../product/anxin/anxinform/anxinform"
    })
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