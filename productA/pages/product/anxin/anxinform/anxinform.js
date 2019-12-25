// pages/product/anxin/anxinform/anxinform.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isIpx: app.globalData.isIpx,
    index_idcard: 0,
    showXuzhi:true,
    showTiaokuan:true,
    showZhiye:true,
    isChangQi_tbr:false,
    array: ['美国', '中国', '巴西', '日本'],
    card_date_qi: "2012-09-09",
    card_date_zhi: "2020-01-01",
    professional:'',
    checkXuzhi:false,
    goodid:10,
    showKefu: true
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

  },

  checkboxChange:function(res){
    this.setData({
      isChangQi_tbr:!this.data.isChangQi_tbr
    })
  },
  checkXuzhi:function(){
    this.setData({
      checkXuzhi:!this.data.checkXuzhi
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
  showKefu: function () {
    this.setData({
      showKefu: false
    })
  },
  bindIdcardChange:function(e) {
    this.setData({
      index_idcard: e.detail.value
    })
  },
  bindDateQiChange:function(e){
    this.setData({
      card_date_qi: e.detail.value
    })
  },
  bindDateZhiChange:function(e){
    this.setData({
      card_date_zhi: e.detail.value
    })
  },
  submitForm:function(){
    wx.navigateTo({
      url:"../orderDetails/orderDetails"
    })
  },
  chooseZhiye:function(e){
    this.setData({
      showZhiye:false
    })
  },
  professionalValue:function(e){
    this.setData({
      professional:e.detail.val
    })
  }
})