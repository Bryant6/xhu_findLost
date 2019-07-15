var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({


  data: {
    toView: 'red',
    scrollTop: 100
  },
  onLoad:function(){
    wx.request({
      url: 'http://mumucoder.free.idcfengye.com/findOwner/findAll',
      success: data => {
        console.log(data.data);
        this.setData({
          findOwner: data.data
        })
      },
      fail() {
        console.log(error);
      }
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
