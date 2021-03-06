import Page from '../../common/page';

Page({
  data: {
    list: [{
      title: '基础控件',
      components: [{
        icon: 'icon_button@2x.png',
        name: '按钮',
        path: 'button',
      },
      {
        icon: 'icon_icon@2x.png',
        name: '图标',
        path: 'icon',
      }
      ]
    },
    {
      title: '表单',
      components: [{
        icon: 'icon_RadioButton@2x.png',
        name: '单选框',
        path: 'radio',
      },
      {
        icon: 'icon_CheckBox@2x.png',
        name: '复选框',
        path: 'checkbox',
      },
      {
        icon: 'icon_switch@2x.png',
        name: 'Switch开关',
        path: 'switch',
      },
      ]
    },
    {
      title: '其他',
      components: [{
        icon: 'icon_empty@2x.png',
        // name: '空页面'
        name: '尽请期待'
      }]
    },
    ]
  },
  jump: (event) => {
    console.log(event);
    const url = event.target.dataset.page.path;
    if (url) {
      wx.navigateTo({
        url: `/pages/${url}/index`
      });
    }
  }
});
