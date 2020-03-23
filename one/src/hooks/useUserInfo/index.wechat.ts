import * as React from 'react';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  function login(response: any) {
    const { userInfo } = response.detail;

    userInfo.avatar = userInfo.avatarUrl;
    setUserInfo(response.detail.userInfo);
  }

  return [userInfo, login];
}
