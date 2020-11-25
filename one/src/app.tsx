import './publicPath';
import * as React from 'react';
import './app.css';

interface Item {
  id: string;
  text: string;
  completed: boolean;
}

interface ItemContext {
  items: Item[];
  setItems: (items: Item[]) => void;
}

export const TodoContext = React.createContext<ItemContext>({
  items: [],
  setItems: () => {},
});

const App = ({ children }: React.PropsWithChildren<{}>) => {
  const [items, setItems] = React.useState([
    { id: '1', text: 'Learning Javascript', completed: true },
    { id: '2', text: 'Learning ES2016', completed: true },
    { id: '3', text: 'Learning Remax', completed: false },
  ]);

  return (
    <TodoContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default App;
