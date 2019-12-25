Page({
    data: {
        inputShowed: false,
        inputVal: "",
        showTips:true
    },
    showInput: function () {
        this.setData({
            inputShowed: true,
            showTips:false
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false,
            showTips:true
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
    preventdefault: function (e) {
      e.stopPropagation();
      e.cancelBubble = true;
    }
});