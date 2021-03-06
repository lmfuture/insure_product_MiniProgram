// components/xuzhi/xuzhi.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hiddenEnsure: {
      type: Boolean
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    animationData: null
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
    clickCloseEnsure: function () {
      this.setData({
        hiddenEnsure: true
      })
    }
  }
})
