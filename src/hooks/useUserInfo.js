import * as React from 'react';
import * as Remax from 'remax';

function useAlipayUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  function login() {
    Remax.getAuthCode({
      scopes: ['auth_user'],
      success: authcode => {
        Remax.getAuthUserInfo({
          success: res => {
            setUserInfo(res);
          }
        });
      }
    });
  }

  return [userInfo, login];
}

function useWechatUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  function login(response) {
    const { userInfo } = response.detail;

    userInfo.avatar = userInfo.avatarUrl;
    setUserInfo(response.detail.userInfo);
  }

  return [userInfo, login];
}

export default function useUserInfo() {
  if (Remax.Platform.isAlipay) {
    return useAlipayUserInfo();
  }

  if (Remax.Platform.isWechat) {
    return useWechatUserInfo();
  }
}
