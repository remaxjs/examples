import * as React from 'react';
import { View, Image, Label, Text, navigateTo } from 'remax/one';
import clsx from 'clsx';
import useUserInfo from '@/hooks/useUserInfo';
import AddButton from '@/components/AddButton';
import LoginButton from '@/components/LoginButton';
import Checkbox from '@/components/Checkbox';
import CheckboxGroup from '@/components/CheckboxGroup';
import { TodoContext } from '@/app';
import './index.css';

export default () => {
  const [user, login] = useUserInfo();
  const todo = React.useContext(TodoContext);

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  const handleComplete = (event: any) => {
    const checkedItems = event.detail.value;
    const items = todo.items.map((item) => ({
      ...item,
      completed: !!checkedItems.find((id: string) => item.id === id),
    }));

    todo.setItems(items);
  };

  return (
    <View className="page">
      <View className="user">
        <LoginButton login={login}>
          <Image className="avatar" src={user ? user.avatar : 'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*6ECQQKDLLykAAAAAAAAAAABkARQnAQ'} />
        </LoginButton>
        <View className="nickname">
          {user ? user.nickName + "'s" : 'My'} Todo List
          {!user && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>

      <View className="todo-items">
        <CheckboxGroup className="todo-items-group" onChange={handleComplete}>
          {todo.items.map((item) => (
            <Label
              key={item.id}
              className={clsx('todo-item', {
                checked: item.completed,
              })}
            >
              <Checkbox
                className="todo-item-checkbox"
                value={item.id}
                checked={item.completed}
              />
              <Text className="todo-item-text">{item.text}</Text>
            </Label>
          ))}
        </CheckboxGroup>
      </View>

      <View className="todo-footer">
        <AddButton text="Add Todo" onTap={handleAdd} />
      </View>
    </View>
  );
};
