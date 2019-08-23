//button.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  jump: (event) => {
    console.log(event);
    wx.navigateTo({
      url: '/pages/logs/logs'
    });
  }
})
