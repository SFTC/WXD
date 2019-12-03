import Page from '../../common/page';

Page({
  data: {
    list: [
      {
        checked: true
      },
      {
        checked: false
      },
      {
        checked: false
      }
    ],
    checked: true
  },

  onChange(e) {
    const { checked, index } = e.currentTarget.dataset;
    this.data.list[index].checked = !checked;
    this.setData({ list: this.data.list });
  },

  onChange2({ detail }) {
    this.setData({ checked: detail });
  }
});
