// animation.js
Page({
  data: {
    video: {},
    videoList: [{
      url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      name: 'my song mv 1'
    },{
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      name: 'my song mv 2'
    },{
        url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      name: 'my song mv 3'
    }],
    videoNo:0,
    // 弹幕列表
    danmuList: [{
      text: '第一秒出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第3秒出现的弹幕',
      color: '#0000ff',
      time: 3
      }, {
        text: '第20秒出现的弹幕',
        color: '#00ff00',
        time: 20
      }]
  },
  inputValue: '',
  onReady: function(res){
    this.videoContext = wx.createVideoContext('videoPlay');
    this.dataInit();
    this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
  },
  dataInit :function(){
    var that = this;
    that.setData({
      video:that.data.videoList[0]
    });
  },
  bindInputBlur: function(e){
    this.inputValue = e.detail.value;
  },
  // 生成随机颜色，用于弹幕的字体颜色
  getRandomColor: function() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
      let color = Math.floor(Math.random() * 256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rgb.push(color)
    }
    return '#' + rgb.join('')
  },
  bindSendDanmu: function () {
    var that = this;
    that.videoContext.sendDanmu({
      text: that.inputValue,
      color: that.getRandomColor()
    });
  },
  getPreVideo: function(){
    var no = this.data.videoNo;
    var that = this;
    if(no == 0){
      that.setData({
        video:that.data.videoList[that.data.videoList.length-1]
      });
      that.data.videoNo = that.data.videoList.length - 1;
    }else{
      that.data.videoNo--;
      that.setData({
        video: that.data.videoList[that.data.videoNo]
      });
    }
    that.videoContext = wx.createVideoContext('videoPlay');
  },
  getNexVideo: function () {
    var no = this.data.videoNo;
    var that = this;
    if (no == that.data.videoList.length - 1) {
      that.setData({
        video: that.data.videoList[0]
      });
      that.data.videoNo = 0;
    } else {
      that.data.videoNo++;
      that.setData({
        video: that.data.videoList[that.data.videoNo]
      });
    }
    that.videoContext = wx.createVideoContext('videoPlay');
  },
// 动画效果
  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },

  scale: function () {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },

  translate: function () {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },

  skew: function () {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },

  rotateAndScale: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({ animation: this.animation.export() })
  },

  rotateThenScale: function () {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },

  all: function () {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },

  reset: function () {
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  },
})