// pages/yuhebao/yuhebao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    initArr:[{name:'甲状腺结节',toggle:false},{name:'甲状腺功能亢进',toggle:false},{name:'卵巢囊肿',toggle:false},{name:'心电图异常、心率失常',toggle:false},{name:'蚕豆病（葡萄糖-6-磷酸脱氧氢酶缺乏症）地中海贫血',toggle:false},{name:'甲状腺结节',toggle:false},{name:'甲状腺功能亢进',toggle:false},{name:'结核病',toggle:false}],
    showSexResult:true,
    showProblem1Result:true,
    sexResult:null,
    problem1Result:null,
    endBirthdayYear:null,
    birthdayDate:null,
    selectResult:true,
    selectArr:[],
    scrollToElement:null,
    scrollTop:0,
    recomend_products:[1,2,3]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const startBirthday = new Date();
    this.setData({
      endBirthdayYear:startBirthday.getFullYear()
    })
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
  showSexResult:function(e){
    if(this.data.sexResult != null){
      wx.showToast({
        title: '您已经选择了性别',
        icon:'none',
        duration: 1500
      })
    }else{
      this.setData({
        showSexResult:false,
        sexResult:e.target.dataset.sex
      })
    }
  },
  bindDateChange:function(e){
    const that = this;
    this.setData({
      birthdayDate: e.detail.value+'年'
    },function(){
      setTimeout(function(){
        that.setData({
          scrollToElement:"jibingContent"
        })
      },1000);
    })


  },
  selectItem:function(e){
    if(this.data.selectArr.length>2){
      wx.showToast({
        title: '既往病史不能超过三个',
        icon:'none',
        duration: 2000
      })
      return;
    }else{

      //控制已选疾病样式
      const index = e.target.dataset.index;
      const toggle = e.target.dataset.toggle;
      this.data.initArr[index].toggle = !toggle;

      //控制已选疾病名称
      this.data.selectArr.push(e.target.dataset.name)

      this.setData({
        initArr:this.data.initArr,
        selectArr:this.data.selectArr
      })
    }
    
  },
  showSelectResult:function(){
    if(this.data.selectArr.length==0){
      wx.showToast({
        title: '请选择您的既往病史',
        icon:'none',
        duration: 2000
      })
      return;
    }
    const that = this;
    this.setData({
      selectResult:false
    },function(){
      setTimeout(function(){
        that.setData({
          scrollToElement:"result-jibing"
        })
      },1000);
    })
  },
  showProblem1Result:function(e){
    const that = this;
    if(this.data.problem1Result != null){
      wx.showToast({
        title: '您已经选择了结果',
        icon:'none',
        duration: 1500
      })
    }else{
      setTimeout(function(){
        that.setData({
          showProblem1Result:false,
          problem1Result:e.target.dataset.sex,
          scrollToElement:"problem1Result"
        })
      }, 300);
    }
  },
  toMoreDisease:function(){
    wx.navigateTo({
      url: '../moredisease/moredisease'
    })
  }
})