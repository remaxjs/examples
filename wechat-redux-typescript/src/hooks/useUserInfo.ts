import * as React from 'react';
import { UserInfoProps } from "@/interface";

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState();
  function login(response: UserInfoProps) {
    const { userInfo } = response.detail;
    userInfo.avatar = userInfo.avatarUrl;
    setUserInfo(response.detail.userInfo);
  }

  return [userInfo, login];
}
