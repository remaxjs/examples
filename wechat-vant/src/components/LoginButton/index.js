import * as React from 'react';
import { Button } from 'remax/wechat';
import './index.css';

const LoginButton = ({ login, children }) => {
  return (
    <Button
      className="login-button"
      hoverClassName="none"
      openType="getUserInfo"
      onGetUserInfo={login}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
