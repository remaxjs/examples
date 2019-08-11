import * as React from 'react';
import { View, Input, navigateBack } from 'remax/wechat';
import AddButton from '@/components/AddButton';
import './index.css';

const app = getApp();

export default () => {
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    app.todos = app.todos.concat([
      {
        id: Date.now(),
        text,
        compeleted: false
      }
    ]);

    navigateBack();
  };

  return (
    <View className="page-add-todo">
      <View className="add-todo">
        <Input
          className="add-todo-input"
          placeholder="What needs to be done?"
          onInput={e => setText(e.detail.value)}
          value={text}
        />
      </View>

      <View className="todo-footer">
        <AddButton text="Add Todo" onClick={handleAdd} />
      </View>
    </View>
  );
};
