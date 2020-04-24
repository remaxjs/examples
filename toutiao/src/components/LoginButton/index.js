import * as React from 'react';
import { Button, login as ttLogin, getUserInfo } from 'remax/toutiao';
import './index.css';

const LoginButton = ({ login, children }) => {
  const handleClick = async () => {
    const { isLogin } = await ttLogin({ force: true });
    if (isLogin) {
      const res = await getUserInfo();

      login(res);
    }
  };
  return (
    <Button
      className="login-button"
      hoverClassName="none"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
