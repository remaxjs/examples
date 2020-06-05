import * as React from 'react';
import { getAuthCode, getAuthUserInfo } from 'remax/ali';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  const login = async () => {
    const authcode = await getAuthCode({
      scopes: ['auth_user'],
    });
    const user = await getAuthUserInfo();
    setUserInfo(user);
  };

  React.useEffect(() => {
    login();
  }, []);

  return userInfo;
}
