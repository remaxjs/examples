import * as React from 'react';

export const storeContext = React.createContext(null);

const useStores = () => {
  const store = React.useContext(storeContext);
  return store;
};

export default useStores;
