var sliderWidth = 20; // 需要设置slider的宽度，用于计算中间位置
var query = wx.createSelectorQuery();
Page({
    data: {
        tabs: ["进行中", "已完成"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        baodanItems:[0,1,2,3,4,5,6],
        navWidth:""
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                wx.createSelectorQuery().selectAll('.weui-navbar__item').boundingClientRect(function (rect) {
                    that.setData({
                        sliderLeft: (rect[0].width - sliderWidth)/ 2 ,
                        sliderOffset: rect[0].width * that.data.activeIndex
                    });
                }).exec()  
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    onPullDownRefresh: function () {
        setTimeout(function(){
          wx.stopPullDownRefresh()
        }, 5000);
    },

    toOrderDetails:function(){
        wx.navigateTo({
            url:'../product/anxin/orderDetails/orderDetails'
        })
    }

});
