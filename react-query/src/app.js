import * as React from 'react';
import { ReactQueryCacheProvider, makeQueryCache } from 'react-query';
import './app.css';

const App = props => {
  const queryCache = makeQueryCache({ frozen: false });

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {props.children}
    </ReactQueryCacheProvider>
  )
 };

export default App;
