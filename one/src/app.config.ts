import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AlipayAppConfig } from 'remax/alipay';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

const pages = [
  'pages/index/index',
  'pages/new/index',
  'pages/view/index',
  'pages/text/index',
  'pages/image/index',
  'pages/button/index',
  'pages/form/index',
  'pages/input/index',
  'pages/label/index',
  'pages/textarea/index',
  'pages/web-view/index'
];

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Wechat'
  }
};

export const alipay: AlipayAppConfig = {
  pages,
  window: {
    defaultTitle: 'Remax One Alipay'
  }
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Toutiao'
  }
};
