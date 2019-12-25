// pages/lipeidetails/lipeidetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lipeitypeArr: ['重大疾病', '中国', '巴西', '日本'],
    lipeitype:0,
    shigu_time:"2019-05-06",
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
  bindShiguTime:function(e){
    this.setData({
      shigu_time: e.detail.value
    })
  },
  telPhone:function () {
    wx.makePhoneCall({
      phoneNumber: '4008-812-812',
    })
  }
})