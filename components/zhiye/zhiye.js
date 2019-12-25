// components/xuzhi/xuzhi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hiddenZhiye: {
      type: Boolean
    },
    goodid:{
      type:Number
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    animationData: null,
    oneLevel: {
      nownum:99,
      data: ['公共管理', '农牧业', '公共管理', '农牧业', '公共管理', '农牧业', '公共管理', '农牧业', '公共管理', '农牧业']
    },
    twoLevel: {
      nownum:99,
      data: ['森林砍伐业', '木材加工业', '森林砍伐业', '木材加工业', '森林砍伐业', '木材加工业', '森林砍伐业', '木材加工业', '森林砍伐业', '木材加工业']
    },
    threeLevel: {
      nownum: 99,
      data: ['领班类', '监工类', '领班类', '监工类', '领班类', '监工类', '领班类', '监工类', '领班类', '监工类']
    },
    fourLevel:{
      nownum: 99,
      data:[{
        style:'一类',
        name:'管理领班'
      },{
        style: '三类',
        name: '学习领班'
      }, {
        style: '三类',
        name: '领班助理'
      }]
    }
  },
  ready() {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    preventdefault: function (e) {
      e.stopPropagation();
      e.cancelBubble = true;
    },
    clickCloseZhiye: function () {
      let that=this;
      that.data.oneLevel.nownum = 99;
      that.data.twoLevel.nownum = 99;
      that.data.threeLevel.nownum = 99;
      that.data.fourLevel.nownum = 99;
      that.setData({
        oneLevel: that.data.oneLevel,
        twoLevel: that.data.twoLevel,
        threeLevel: that.data.threeLevel,
        fourLevel: that.data.fourLevel,
        hiddenZhiye: true
      })
    },
    oneLevelTap:function(e){
      console.log('goodid:' + this.data.goodid)
      let that=this;
      if (that.data.oneLevel.nownum === e.currentTarget.dataset.index) that.data.oneLevel.nownum = 99;
      else that.data.oneLevel.nownum = e.currentTarget.dataset.index;
      that.data.twoLevel.nownum = 99;
      that.data.threeLevel.nownum = 99;
      that.data.fourLevel.nownum = 99;
      that.setData({
        oneLevel: that.data.oneLevel,
        twoLevel: that.data.twoLevel,
        threeLevel: that.data.threeLevel,
        fourLevel: that.data.fourLevel
      })
    },
    twoLevelTap: function (e) {
      let that = this;
      if (that.data.twoLevel.nownum === e.currentTarget.dataset.index)that.data.twoLevel.nownum = 99;
      else that.data.twoLevel.nownum = e.currentTarget.dataset.index;
      that.data.threeLevel.nownum = 99;
      that.data.fourLevel.nownum = 99;
      that.setData({
        twoLevel: that.data.twoLevel,
        threeLevel: that.data.threeLevel,
        fourLevel: that.data.fourLevel
      })
    },
    threeLevelTap: function (e) {
      let that = this;
      if (that.data.threeLevel.nownum === e.currentTarget.dataset.index) that.data.threeLevel.nownum = 99;
      else that.data.threeLevel.nownum = e.currentTarget.dataset.index;
      that.data.fourLevel.nownum = 99;
      that.setData({
        threeLevel: that.data.threeLevel,
        fourLevel: that.data.fourLevel
      })
    },
    fourLevelTap: function(e){
      let that = this;
      that.data.fourLevel.nownum = e.currentTarget.dataset.index;
      that.setData({
        hiddenZhiye: true,
        fourLevel: that.data.fourLevel
      })
      this.triggerEvent('professionalValue', {
        val: that.data.fourLevel.data[that.data.fourLevel.nownum].name
      })
    }
  }
})
