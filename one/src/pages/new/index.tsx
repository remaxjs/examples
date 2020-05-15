import * as React from 'react';
import { View, Input, navigateBack } from 'remax/one';
import AddButton from '@/components/AddButton';
import { TodoContext } from '@/app';
import './index.css';

export default () => {
  const todo = React.useContext(TodoContext);
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    const items = todo.items.concat([
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);

    todo.setItems(items);

    navigateBack();
  };

  return (
    <View className="page">
      <View className="add-todo">
        <Input
          className="add-todo-input"
          placeholder="What needs to be done?"
          onInput={(e) => {
            setText(e.target.value);

            return e.target.value;
          }}
          maxLength={140}
          value={text}
        />
      </View>

      <View className="todo-footer">
        <AddButton text="Add Todo" onTap={handleAdd} />
      </View>
    </View>
  );
};
