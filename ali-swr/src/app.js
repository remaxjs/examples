import * as React from 'react';
import { request } from 'remax/ali';
import { SWRConfig } from 'swr';
import './app.css';

const App = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          request({
            url: 'https://api.github.com' + url,
            method: 'GET',
            headers: {
              'User-Agent': 'Remax',
            },
          }).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default App;
