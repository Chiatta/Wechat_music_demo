//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    pageNames:[{
      id: 'animation',
      name: '动画'
    },{
      id:'run',
      name: '跑步'
    },{
      id: 'music',
      name: '音乐'
    },{
      id: 'picture',
      name: '影音'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
