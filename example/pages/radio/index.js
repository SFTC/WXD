import Page from '../../common/page';

Page({
  data: {
    radio1: '1',
    radio2: '2',
    radio3: '1',
    name: ['1', '2']
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ [key]: event.detail });
  },
});
