import * as React from 'react';
import { observer } from 'mobx-react';
import { View, Input, navigateBack } from 'remax/wechat';
import AddButton from '@/components/AddButton';
import useStores from '@/hooks/useStores';
import './index.css';

const NewPage = () => {
  const [text, setText] = React.useState('');
  const { todoStore } = useStores();

  const handleAdd = () => {
    todoStore.addTodo(text);
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

export default observer(NewPage);
