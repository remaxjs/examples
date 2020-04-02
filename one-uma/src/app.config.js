const pages = ['pages/index/index'];
const title = 'Remax Universe Template';
const backgroundColor = '#282c34';

exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: backgroundColor
  }
};

exports.alipay = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: backgroundColor
  }
};
