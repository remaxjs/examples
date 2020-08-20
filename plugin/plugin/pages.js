// 编译时插件

module.exports = () => {
  return {
    registerRuntimePlugin() {
      return require.resolve('./remax');
    },
  };
};
