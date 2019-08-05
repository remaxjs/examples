const backgroundColor = '#323239';
const pages = ['pages/index/index', 'pages/new/index'];

exports.alipay = {
  pages,
  window: {
    defaultTitle: 'Alipay Todo App',
    titleBarColor: backgroundColor
  }
};

exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: 'Wechat Todo App',
    navigationBarBackgroundColor: backgroundColor
  }
};
