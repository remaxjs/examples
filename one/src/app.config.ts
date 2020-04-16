import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
import { AppConfig as WebAppConfig } from 'remax/web';

const pages = [
  'pages/index/index',
  'pages/new/index',
  'pages/textarea/index',
  'pages/web-view/index',
  'pages/form/index',
  'pages/label/index',
  'pages/input/index',
  'pages/button/index',
  'pages/image/index',
  'pages/text/index',
  'pages/view/index',
];

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Wechat',
  },
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: 'Remax One Ali',
  },
  tabBar: {
    backgroundColor: '#fff',
    selectedColor: '#1b73fa',
    items: [
      {
        pagePath: 'pages/index/index',
        icon:
          'https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*uJJISqWJcMQAAAAAAAAAAABkARQnAQ',
        name: 'todos',
      },
      {
        pagePath: 'pages/new/index',
        icon:
          'https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*uJJISqWJcMQAAAAAAAAAAABkARQnAQ',
        name: 'new todo',
      },
    ],
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Toutiao',
  },
};

export const web: WebAppConfig = {
  pages,
  title: 'Remax One Web',
  tabBar: {
    backgroundColor: '#fff',
    activeTitleColor: '#1b73fa',
    items: [
      {
        url: '/pages/index/index',
        image:
          'https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*uJJISqWJcMQAAAAAAAAAAABkARQnAQ',
        title: 'todos',
      },
      {
        url: '/pages/new/index',
        image:
          'https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*uJJISqWJcMQAAAAAAAAAAABkARQnAQ',
        title: 'new todo',
      },
    ],
  },
};
