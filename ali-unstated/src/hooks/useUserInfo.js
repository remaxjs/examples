import * as React from 'react';
import { getAuthCode, getAuthUserInfo } from 'remax/ali';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  function login() {
    getAuthCode({
      scopes: ['auth_user'],
      success: (authcode) => {
        getAuthUserInfo({
          success: (res) => {
            setUserInfo(res);
          },
        });
      },
    });
  }

  return [userInfo, login];
}
