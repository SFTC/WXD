# Radio 单选框

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "wxd-radio": "./dist/radio/index",
  "wxd-radio-group": "./dist/radio-group/index"
}
```

## 代码演示

### 基础用法

通过`value`绑定值当前选中项的 name

```html
<wxd-radio-group value="{{ radio }}" bind:change="onChange">
  <wxd-radio name="1">单选框 1</wxd-radio>
  <wxd-radio name="2">单选框 2</wxd-radio>
</wxd-radio-group>
```

```js
Page({
  data: {
    radio: '1'
  },

  onChange(event) {
    this.setData({
      radio: event.detail
    });
  }
});
```

### 禁用状态

通过`disabled`属性禁止选项切换，在`wxd-radio`上设置`diabled`可以禁用单个选项

```html
<wxd-radio-group value="{{ radio }}" bind:change="onChange" disabled>
  <wxd-radio name="1">单选框 1</wxd-radio>
  <wxd-radio name="2">单选框 2</wxd-radio>
</wxd-radio-group>
```

### 自定义颜色

 ```html
<wxd-radio checked-color="#07c160">复选框</wxd-radio>
```

### 自定义图标

通过 icon 插槽自定义图标

```html
<wxd-radio use-icon-slot value="{{ radio }}" name="1" bind:change="onChange">
  自定义图标
  <image
    slot="icon"
    src="{{ radio === '1' ? icon.active : icon.normal }}"
  />
</wxd-radio>
```

```js
Page({
  data: {
    radio: true,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    }
  },

  onChange(event) {
    this.setData({
      radio: event.detail
    });
  }
});
```

## API

### Radio API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| name | 标识 Radio 名称 | *string* | - | - |
| value | 当前选中项的 name | *any* | - | - |
| shape | 形状，可选值为 `round` `square` | *string* | `round` | - |
| disabled | 是否为禁用状态 | *boolean* | `false` | - |
| icon-size | 图标大小，默认单位为`px` | *string \| number* | `20px` | - |
| label-disabled | 是否禁用文本内容点击 | *boolean* | `false` | - |
| label-position | 文本位置，可选值为 `left` | *string* | `right` | - |
| use-icon-slot | 是否使用 icon slot | *boolean* | `false` | - |
| checked-color | 选中状态颜色 | *string* | `#1989fa` | - |

### Radio Event

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | 当前选中项的 name |

### Radio 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| icon-class | 图标样式类 |
| label-class | 描述信息样式类 |

### RadioGroup API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| name | 在表单内提交时的标识符 | *string* | - | - |
| value | 当前选中项的 name | *any* | - | - |
| disabled | 是否禁用所有单选框 | *boolean* | `false` | - |

### RadioGroup Event

| 事件名 | 说明 | 回调参数 |
|-----------|-----------|-----------|
| bind:change | 当绑定值变化时触发的事件 | 当前选中项的 name |
