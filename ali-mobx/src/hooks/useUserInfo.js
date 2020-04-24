import * as React from 'react';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  function login(response) {
    const { userInfo } = response.detail;

    userInfo.avatar = userInfo.avatarUrl;
    setUserInfo(response.detail.userInfo);
  }

  return [userInfo, login];
}
