import * as React from 'react';
import createTodoStore from '@/stores/TodoStore';
import { useLocalStore } from 'mobx-react';
import { storeContext } from '@/hooks/useStores';
import './app.css';

const App = ({ children }) => {
  const todoStore = useLocalStore(createTodoStore);
  return (
    <storeContext.Provider value={{ todoStore }}>
      {children}
    </storeContext.Provider>
  );
};

export default App;
