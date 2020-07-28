module.exports = {
  pxToRpx: false,
  configWebpack({ config, webpack, addCSSRule }) {
    addCSSRule({
      name: 'wxss',
      test: /\.wxss(\?.*)?$/,
    });
  },
};
