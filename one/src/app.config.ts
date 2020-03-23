import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AlipayAppConfig } from 'remax/alipay';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';

const pages = [
  'pages/index/index',
  'pages/new/index',
  'pages/view',
  'pages/text',
  'pages/image',
  'pages/button',
  'pages/form',
  'pages/input',
  'pages/label',
  'pages/textarea',
  'pages/web-view'
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
