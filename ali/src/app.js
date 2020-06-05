import * as React from 'react';
import './app.css';

export const TodoContext = React.createContext({});

const App = ({ children }) => {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Learning 支付宝小程序', completed: true },
    { id: 2, text: 'Learning React', completed: true },
    { id: 3, text: 'Learning Remax', completed: false }
  ]);

  return (
    <TodoContext.Provider
      value={{
        items,
        setItems
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default App;
