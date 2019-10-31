import * as React from 'react';
import { Button } from "remax/wechat";
import './index.css';
import { UserInfoProps } from "@/interface";

interface Props {
  login?: (event: UserInfoProps) => void;
  children: React.ReactNode;
}

const LoginButton = ({ login, children }: Props) => {
  return (
    <Button
      className="login-button"
      hoverClass="none"
      openType="getUserInfo"
      onGetUserInfo={login}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
