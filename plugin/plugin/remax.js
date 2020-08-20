// 运行时插件

const React = require('react');
const { withLayout } = require('@/layouts');

const wrap = (component, page) => {
  const Wrapped = props => {
    return React.createElement(component, props);
  };

  Wrapped.displayName = 'AppLayout';
  return withLayout(Wrapped);
};

exports.default = {
  onPageComponent({ component, page }) {
    return wrap(component, page);
  },
};
