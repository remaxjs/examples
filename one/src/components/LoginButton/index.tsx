import * as React from 'react';
import { Button } from 'remax/one';
import { getUserInfo, login as loginAPI } from '@/api';
import './index.css';

interface Props {
  login: (e: any) => void;
}

const LoginButton = ({ login, children }: React.PropsWithChildren<Props>) => {
  const handleTTLogin = async () => {
    const { isLogin } = await loginAPI({ force: true });

    if (isLogin) {
      const res = await getUserInfo();

      login(res);
    }
  };

  return (
    <Button
      className="login-button"
      hoverClassName="none"
      ali-onTap={login}
      web-onTap={login}
      toutiao-bindtap={handleTTLogin}
      wechat-open-type="getUserInfo"
      wechat-bindgetuserinfo={login}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
