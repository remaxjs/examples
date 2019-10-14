import * as React from 'react';
import { Button } from 'remax/wechat';
import Test from './Test2';
import { FixedSizeList } from 'remax-window';
import './index.css';

const LoginButton = ({ login, children }) => {
  return (
    <Button
      className="login-button"
      hoverClass="none"
      openType="getUserInfo"
      onGetUserInfo={login}
    >
      <FixedSizeList />
      <Test />
      {children}
    </Button>
  );
};

export default LoginButton;
