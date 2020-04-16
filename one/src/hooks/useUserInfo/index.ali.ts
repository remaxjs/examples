import * as React from 'react';
import { getAuthCode, getAuthUserInfo } from 'remax/ali';

export default function useUserInfo(): [any, () => void] {
  const [userInfo, setUserInfo] = React.useState(null);

  async function login() {
    await getAuthCode({
      scopes: ['auth_user'],
    });
    const res: any = await getAuthUserInfo();
    setUserInfo(res);
  }

  return [userInfo, login];
}
