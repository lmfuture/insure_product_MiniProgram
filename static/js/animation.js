function dialog(oageObj,duration,delay,direct){
	   var animation = wx.createAnimation({
      duration: duration,
      timingFunction: "linear",
      delay: delay
    })

    var direction;
    oageObj.animation = animation
    if(direct == 'bottom'){
      direction = 600
    }else if(direct == 'top'){
      direction = -300
    }
    animation.translateY(direction).step()

    setTimeout(function() {
      animation.translateY(0).step()
      oageObj.setData({
        animationData: animation.export()
      })
    }.bind(oageObj), delay)

    return animation;
}
module.exports = {
	dialog:dialog
}