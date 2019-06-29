import * as React from 'react';

export default function useUserInfo() {
  const [userInfo, setUserInfo] = React.useState(null);

  React.useEffect(() => {
    my.getAuthCode({
      scopes: ['auth_user'],
      success: authcode => {
        my.getAuthUserInfo({
          success: res => {
            setUserInfo(res);
          },
        });
      },
    });
  }, []);

  return userInfo;
}
