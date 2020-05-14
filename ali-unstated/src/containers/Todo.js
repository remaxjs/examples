import * as React from 'react';
import { createContainer } from "unstated-next"

function useTodo() {
  const [items, setItems] = React.useState([
    { id: 1, text: 'Learning Javascript', completed: true },
    { id: 2, text: 'Learning ES2016', completed: true },
    { id: 3, text: 'Learning Remax', completed: false },
  ]);

  return {
    items,
    setItems,
  };
}

const Todo = createContainer(useTodo);

export default Todo;
