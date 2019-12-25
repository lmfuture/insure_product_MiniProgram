// pages/product/anxin/cryw/cryw.js
var animationFun = require('../../../../../static/js/animation.js');
let app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx,
    showXuzhi:true,
    showTiaokuan:true,
    showProblems:true,
    showLipei:true,
    showEnsure:true,
    showCompute:true,
    showKefu:true
    // pageStype:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.isIpx)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(app.globalData.isIpx)
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

  },

  toJkgz:function(){
    wx.navigateTo({
      url:"../../../jkgz/jkgz"
    })
  },

  showXuzhi:function(){
    this.setData({
      showXuzhi:false
    })
  },
  showTiaokuan:function(){
    this.setData({
      showTiaokuan:false
    })
  },
  showProblems:function(){
    this.setData({
      showProblems:false
    })
  },
  showLipei:function(){
    this.setData({
      showLipei:false
    })
  },
  showEnsure:function(){
    this.setData({
      showEnsure:false
    })
  },
  showKefu: function () {
    this.setData({
      showKefu: false
    })
  },
  showCompute:function(){
    var animation = animationFun.dialog(this, 200, 0, 'bottom');
    this.setData({
      animationData: animation.export(),
      // pageStype:"position:fixed;top:0;bottom:0;left:0;right:0;overflow:hidden;"
    })
    this.setData({
      showCompute:false
    })
  },
  hiddenCompute:function(){
    this.setData({
      showCompute:true,
      // pageStype:""
    })
  },
  hiddenKefu: function () {
    this.setData({
      showKefu: true,
      // pageStype:""
    })
  },
  preventdefault:function(e){
     e.stopPropagation();
     e.cancelBubble=true;
  }
})