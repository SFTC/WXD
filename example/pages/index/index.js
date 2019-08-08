//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {
        title: '基础控件',
        components: [
          {
            icon: 'icon_button@2x.png',
            name: '按钮'
          }
        ]
      },
      {
        title: '表单',
        components: [
          {
            icon: 'icon_RadioButton@2x.png',
            name: '单选框'
          },
          {
            icon: 'icon_CheckBox@2x.png',
            name: '复选框'
          },
          {
            icon: 'icon_switch@2x.png',
            name: 'Switch开关'
          },
        ]
      },
      {
        title: '其他',
        components: [
          {
            icon: 'icon_empty@2x.png',
            name: '空页面'
          }
        ]
      },
    ]
  },

})
