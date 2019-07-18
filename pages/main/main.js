// pages/main/main.js
const app = getApp();
const url=app.globalData.url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    findOwner: null,
    CustomBar: app.globalData.CustomBar,
    selected: true,//true 为寻找失物   false认领失物
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: url+'findOwner/findAll',
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
  selected_btn1:function(){
    this.setData({selected:true})
  },
  selected_btn2: function () {
    this.setData({selected:false})
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})