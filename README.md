<p align="center">
  <img alt="logo" src="http://www.itbbb.com/img/wxd-logo.png" width="120" style="margin-bottom: 10px;">
</p>
<h3 align="center">SF 小程序 UI 组件库</h3>

<!-- <p align="center">
  <img src="https://img.shields.io/npm/v/wxd.svg?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/wxd.svg?style=flat-square" alt="downloads" />
  <img src="https://img.shields.io/npm/dm/wxd.svg?style=flat-square" alt="downloads" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg">
</p> -->

<p align="center">
  🔥 <a href="https://sftc.github.io/WXD">文档网站</a>
</p>

---

## 介绍

WXD 是 SF 小程序 UI 组件库，助力开发者快速搭建小程序应用。

## 预览

扫描下方小程序二维码，体验组件库示例：

<img src="http://www.itbbb.com/img/wxd-code.jpg" width="200" height="200" style="margin-top: 10px;" >

## 使用之前

使用 WXD 前，请确保你已经学习过微信官方的 [小程序简易教程](https://mp.weixin.qq.com/debug/wxadoc/dev/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)。

## 安装

### 下载代码

直接通过 git 下载 WXD 源代码，并将`dist`目录拷贝到自己的项目中
```bash
git clone https://github.com/SFTC/WXD.git
```

## 使用组件

以按钮组件为例，只需要在 json 文件中引入按钮对应的自定义组件即可

```json
{
  "usingComponents": {
    "wxd-button": "/path/to/wxd/dist/button/index"
  }
}
```

接着就可以在 wxml 中直接使用组件

```html
<wxd-button type="primary">按钮</wxd-button>
```

## 在开发者工具中预览

```bash
# 安装项目依赖
npm install

# 执行组件编译
npm run dev
```

打开[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，把`wxd/example`目录添加进去就可以预览示例了。

## 基础库版本

WXD 最低支持到小程序基础库 1.9.9 版本


## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)协议，请自由地享受和参与开源。

