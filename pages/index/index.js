//index.js
//获取应用实例
var animationFun = require('../../static/js/animation.js');
const app = getApp()
var query = wx.createSelectorQuery();
Page({
  data: {
    imgUrls: [//轮播图片
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    autoplay:true,//自动播放
    swiperCurrent: 0,//轮播默认第几个
    meau:[//首页菜单
      {
        image:"http://file.baozhixing.com/zixun1.png",
        text:"咨询",
        jumpurl:"#"
      },
      {
        image:"http://file.baozhixing.com/lp.png",
        text:"理赔",
        jumpurl:"/lipeiB/pages/lipeichoosebaodan/lipeichoosebaodan"
      },
      {
        image:"http://file.baozhixing.com/baodan1.png",
        text:"保单",
        jumpurl:"/productA/pages/baodan/baodan"
      },
      {
        image:"http://file.baozhixing.com/productList_icon.png",
        text:"产品",
        jumpurl:"/productA/pages/productList/productList"
      }
    ],
    productLists:[0,1,2],//产品列表数据
    meauTop:null,//获取删选菜单距离页面顶部的距离，便于控制悬浮菜单的显示与隐藏
    meauFixed:true,//设置悬浮菜单显示与隐藏的开关
    hiddenFixedMeau:true, //显示与隐藏dialog菜单,
    scrollTopNow:0,//滚动条实时高度,
    ketangLists:[1,2,3]
  },

  swiperChange: function(e){
    this.setData({
        swiperCurrent: e.detail.current
    })
  },
  scrollToZero:function(e){
    const that = this;

    //控制悬浮分类的动画
    if(that.data.meauTop-that.data.scrollTopNow < 10){
      var scrollToDuration = 0
      var animation = animationFun.dialog(that,180,110,'top')
    }else{
      var scrollToDuration = 180
      var animation = animationFun.dialog(that,180,210,'top')
    }
    wx.pageScrollTo({
      scrollTop: that.data.meauTop,
      duration: scrollToDuration,
      success:function(){
        that.setData({
          animationData: animation.export(),
          hiddenFixedMeau:false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '王帆讲保险'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var that = this;
    wx.createSelectorQuery().select('#classifie').boundingClientRect(rect => {
      this.setData({
        meauTop:rect.top
      })
    }).exec()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  onPageScroll:function(e){
    const scrollTop = e.scrollTop;
    this.setData({
      scrollTopNow:scrollTop
    })
    if( scrollTop > this.data.meauTop || scrollTop == this.data.meauTop ){
      this.setData({
        meauFixed:false
      })
    }else{
      this.setData({
        meauFixed:true
      })
    }
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
    setTimeout(function(){
      wx.stopPullDownRefresh()
    }, 2000);
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
  toProductDetail:function(){
    wx.navigateTo({
      url: '/productA/pages/product/anxin/cryw/cryw'
    })
  },
  preventdefault:function(e){
     e.stopPropagation();
     e.cancelBubble=true
  },
  hideFixedMeau:function(){
    this.setData({
      hiddenFixedMeau:true
    })
  },
  closeDialog:function(){

    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(-300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        hiddenFixedMeau: true
      })
    }.bind(this), 200)



    //  this.setData({
    //   hiddenFixedMeau:true
    // })
   },
   returnFalse:function(){
    return false
   }
})