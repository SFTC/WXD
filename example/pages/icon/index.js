// import icons from '../../dist/@vant/icons/src/wxdConfig';
import Page from '../../common/page';

const iconConfigs = {
  basic: [
    'write',
    'delete',
    'hint',
    'choose',
    'close-o',
    'arrowright',
    'down'
  ],
  outline: [
    'close',
    'scan',
    'camera',
    'my',
    'setting',
    'order',
    'home',
    'search',
  ],
  filled: [
    'avatar',
    'alipay',
    'wechatpay',
    'receive',
    'send',
    'wechat',
    'choosed',
    'inputclear',
    'question',
    'arrowdown',
    'searchbox',
  ],
};

Page({
  data: {
    iconConfigs,
    active: 0
  },

  onSwitch(event) {
    this.setData({
      active: event.detail.index,
    });
  }
});
