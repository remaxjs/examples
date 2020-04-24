import * as React from 'react';
import { View, Input, navigateBack } from 'remax/ali';
import AddButton from '@/components/AddButton';
import { TodoContext } from '@/app';
import './index.css';

export default () => {
  const todo = React.useContext(TodoContext);
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    const items = todo.items.concat([
      {
        id: Date.now(),
        text,
        compeleted: false,
      },
    ]);

    todo.setItems(items);

    navigateBack();
  };

  return (
    <View className="page-add-todo">
      <View className="add-todo">
        <Input
          className="add-todo-input"
          placeholder="What needs to be done?"
          onInput={(e) => setText(e.detail.value)}
          value={text}
        />
      </View>

      <View className="todo-footer">
        <AddButton text="Add Todo" onClick={handleAdd} />
      </View>
    </View>
  );
};
