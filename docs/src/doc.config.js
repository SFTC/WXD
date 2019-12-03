/* eslint-disable */
import packageJson from '../../package.json';
import components from '../../example/config';
const { version } = packageJson;

export const github = 'https://github.com/SFTC/WXD';

export const versions = [version];

export default {
  header: {
    logo: {
      image: 'http://www.itbbb.com/img/wxd-logo-w.png',
      title: 'WXD',
      href: '#/'
    },
    nav: {
      logoLink: [
        {
          image: 'https://img.yzcdn.cn/vant/logo/github.svg',
          url: github
        }
      ]
    }
  },
  nav: [
    {
      name: '开发指南',
      groups: [
        {
          list: [
            {
              path: '/intro',
              title: '介绍',
              md: true
            },
            {
              path: '/quickstart',
              title: '快速上手',
              md: true
            },
            {
              path: '/changelog',
              title: '更新日志',
              md: true
            },
            // {
            //   path: '/common',
            //   title: '内置样式'
            // },
            {
              path: '/theme',
              title: '定制主题',
              md: true
            }
          ]
        }
      ]
    },
    {
      name: '组件',
      groups: components
    }
  ]
};
