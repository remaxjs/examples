const React = require('react');
const Modal = require('../src/components/Modal').default;

module.exports = {
    onPageComponent({ component, page }) {
        // 注意这里一定要用 React.forwardRef 把 ref 传下去
        return React.forwardRef((props, ref) => {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Modal,
                    { page },
                    React.createElement(component, { ...props, ref })
                )
            );
        });
    },
};
