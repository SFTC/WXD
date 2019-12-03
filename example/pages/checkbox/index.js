import Page from '../../common/page';

Page({
  data: {
    list: ['a', 'b'],
    result: ['a'],
  },

  onChange(event) {
    const { key } = event.currentTarget.dataset;
    this.setData({ [key]: event.detail });
  },
});
