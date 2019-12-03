export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'WXD 组件库演示'
      };
    },
    ...options
  });
}
