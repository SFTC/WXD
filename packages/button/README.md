# Button 按钮

### 引入

在`app.json`或`index.json`中引入组件，详细介绍见[快速上手](#/quickstart#yin-ru-zu-jian)

```json
"usingComponents": {
  "wxd-button": "./dist/button/index"
}
```

## 代码演示

### 按钮类型

支持`default`、`info`两种类型，默认为`default`

```html
<wxd-button type="default">默认按钮</wxd-button>
<wxd-button type="info">信息按钮</wxd-button>
```

### 线性按钮

通过`plain`属性将按钮设置为线性按钮，线性按钮的文字为按钮颜色，背景为白色

```html
<wxd-button plain type="info">线性按钮</wxd-button>
```

### 禁用状态

通过`disabled`属性来禁用按钮，此时按钮不可点击

```html
<wxd-button disabled type="info">禁用状态</wxd-button>
```

### 加载状态

```html
<wxd-button loading type="info" >加载中...</wxd-button >
```

### 图标按钮

通过`icon`属性设置按钮图标，支持 Icon 组件里的所有图标，也可以传入图标 URL

```html
<wxd-button icon="search" type="info" />
```

### 自定义颜色

通过`color`属性可以自定义按钮的颜色

```html
<wxd-button color="#7232dd" type="info" >单色按钮</wxd-button>
<wxd-button color="linear-gradient(to right, #4bb0ff, #6149f6)" type="info" >渐变色按钮</wxd-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|-----------|-----------|-----------|-------------|-------------|
| id | 标识符 | *string* | - | - |
| type | 按钮类型，可选值为 `info`  | *string* | `default` | - |
| color | 按钮颜色，支持传入`linear-gradient`渐变色 | *string* | - | 1.0.0 |
| icon | 左侧图标名称或图片链接，可选值见 [Icon 组件](#/icon) | *string* | - | - |
| plain | 是否为朴素按钮 | *boolean* | `false` | - |
| disabled | 是否禁用按钮 | *boolean* | `false` | - |
| loading | 是否显示为加载状态 | *boolean* | `false` | - |
| custom-style | 自定义样式 | *string* | - | - |
| open-type | 微信开放能力，具体支持可参考 [微信官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/component/button.html) | *string* | - | - |
| app-parameter | 打开 APP 时，向 APP 传递的参数 | *string* | - | - |
| lang | 指定返回用户信息的语言，zh_CN 简体中文，<br>zh_TW 繁体中文，en 英文 | *string* | `en` | - | - |
| session-from | 会话来源 | *string* | - | - |
| business-id | 客服消息子商户 id | *number* | - | - |
| send-message-title | 会话内消息卡片标题 | *string* | 当前标题 | - |
| send-message-path | 会话内消息卡片点击跳转小程序路径 | *string* | 当前分享路径 | - |
| send-message-img | sendMessageImg | *string* | 截图 | - |
| show-message-card | 显示会话内消息卡片 | *string* | `false` | - |

### Events

| 事件名 | 说明 | 参数 |
|-----------|-----------|-----------|
| bind:click | 点击按钮，且按钮状态不为加载或禁用时触发 | - |
| bind:getuserinfo | 用户点击该按钮时，会返回获取到的用户信息，<br>从返回参数的 detail 中获取到的值同 wx.getUserInfo | - |
| bind:contact | 客服消息回调 | - |
| bind:getphonenumber | 获取用户手机号回调 | - |
| bind:error | 当使用开放能力时，发生错误的回调 | - |
| bind:opensetting | 在打开授权设置页后回调 | - |



### 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| custom-class | 根节点样式类 |
| loading-class | 加载图标样式类 |
