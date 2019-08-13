import * as React from 'react';
import { Button } from 'remax/alipay';
import './index.css';

const LoginButton = ({ login, children }) => {
  return (
    <Button className="login-button" hoverClass="none" onClick={login}>
      {children}
    </Button>
  );
};

export default LoginButton;
