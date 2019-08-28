import * as React from 'react';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  function login(res) {
    res.userInfo.avatar = res.userInfo.avatarUrl;
    setUserInfo(res.userInfo);
  }

  return [userInfo, login];
}
