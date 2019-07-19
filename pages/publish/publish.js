// pages/publish/publish.js
const app = getApp();
const url = app.globalData.url;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [
      ['卡类', '电子类', "书籍"],
      ['校园卡', '饭卡', '身份证', '游泳卡', '银行卡']
    ],
    multiIndex: [0, 0],
    imgList: [],
    img_len: 0,
    contact_select: [true, false, false],
    contact_way: 'qq号',
    goods_contact: null, //联系方式
    goods_postscrit: null, //附言
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  postscrptInput: function(e) {
    this.data.goods_postscrit = e.detail.value;
  },
  contactInput: function(e) {
    this.data.goods_contact = e.detail.value;
  },
  MultiChange(e) {
    console.log(e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  MultiColumnChange(e) {
    console.log("value:" + e.detail.value)
    console.log("colomn:" + e.detail.column)
    let data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['校园卡', '饭卡', '身份证', '游泳卡', '银行卡'];
            break;
          case 1:
            data.multiArray[1] = ['手机', '耳机', 'U盘'];
            break;
          case 2:
            data.multiArray[1] = ['教材书', '课外书', '资料']
        }
        data.multiIndex[1] = 0;
    }
    this.setData(data);
  },
  ChooseImage() {
    wx.chooseImage({
      count: 2, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        console.log(res.tempFilePaths)
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
        this.setData({
          img_len: this.data.imgList.length
        })
      }
    });

  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '亲',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList,
          })
        }
        let num = this.data.img_len - 1;
        this.setData({
          img_len: num
        })
      }
    })
  },
  contact_way_change: function(e) {
    let id = e.currentTarget.dataset.id;
    if (id == "qq") {
      this.setData({
        contact_select: [true, false, false],
        contact_way: 'qq号'
      })
    } else if (id == "weixin") {
      this.setData({
        contact_select: [false, true, false],
        contact_way: '微信号'
      })
    } else {
      this.setData({
        contact_select: [false, false, true],
        contact_way: '手机号'
      })
    }
  },
  //发布
  submit: function() {

    //写死静态数据 测试
    let userid = "123";
    let username = "wang";


    var _this = this;
    //上传图片
    for (let i = 0; i < img_len; i++) {
      wx.uploadFile({
        url: url + 'publish/submit_photo',
        filePath: _this.data.imgList[i],
        name: 'file',
        header: {
          "Content-Type": "multipart/form-data"
        },
        formData: {
          userid: userid,
          username: username
        },
        success(res) {
          var data = res.data
          console.log(data);
          // do something
        },
        fail(){
          console.log("uploadFile wrong")
        }
      })
    }
    //上传其他数据
    wx.request({
      url: url + 'publish/submit_data',
      data: {
        userid: userid,
        username: username,
        goods_bigkind: _this.data.multiArray[0][multiIndex[0]],//大类
        goods_smallkind: _this.data.multiArray[1][multiIndex[1]],//小类
        goods_postscrit: _this.data.goods_postscrit,//附言
        goods_contact:_this.data.goods_contact,//联系方式
        goods_contact_way: contact_way//联系方式 qq weixin phone
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(){
        console.log("wrong")
      }
    })


  }
})