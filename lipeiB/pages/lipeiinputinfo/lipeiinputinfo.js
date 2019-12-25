// pages/lipeiinputinfo/li'pei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shigu_text:"请选择您报案的事故类型",
    // shigu_type:1,
    shigu: ['美国', '中国', '巴西', '日本'],
    shiguTypeDefaultColor:'#9E9E9E',
    shigu_time:"请选择事件发生时间",
    shiguTimeDefaultColor:'#9E9E9E',
    detail:false,  //默认显示安卓的
    showXuzhi:true,
    showTiaokuan:true,
    checkXuzhi:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var phone=wx.getSystemInfoSync();  //调用方法获取机型
       var detail;
    if (phone.platform=='ios'){
      this.setData({
        detail:true
      })
    } else if (phone.platform == 'android'){
       this.setData({
        detail:false
      })
    }
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
  bindShiguTypeChange:function(e) {
    this.setData({
      shigu_type: e.detail.value,
      shigu_text:this.data.shigu[e.detail.value],
      shiguTypeDefaultColor:"#282828"
    })
  },
  bindShiguTime:function(e){
    this.setData({
      shigu_time: e.detail.value,
      shiguTimeDefaultColor:"#282828"
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
  uploadImage:function(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data
            // do something
          }
        })
      }
    })
  },
  toLipieDetails:function(){
    wx.navigateTo({
      url:'../lipeidetails/lipeidetails'
    })
  }
})