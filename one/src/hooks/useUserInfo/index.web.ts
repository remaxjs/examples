import * as React from 'react';

export default function useUserInfo() {
  const [user, setUser] = React.useState<any>(
    JSON.parse(window.localStorage.getItem('user') || 'null')
  );
  function login() {
    const user = {
      nickName: 'remax visitor',
      avatar: `https://api.adorable.io/avatars/285/remax@${new Date().getTime()}.png`,
    };

    window.localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  }

  return [user, login];
}
