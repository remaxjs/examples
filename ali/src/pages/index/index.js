import * as React from 'react';
import {
  View,
  Image,
  CheckboxGroup,
  Checkbox,
  Label,
  Text,
  navigateTo
} from 'remax/ali';
import clsx from 'clsx';
import useUserInfo from '@/hooks/useUserInfo';
import AddButton from '@/components/AddButton';
import { TodoContext } from '@/app';
import logo from '@/assets/logo.png';
import './index.css';


export default () => {
  const user = useUserInfo();
  const todo = React.useContext(TodoContext);

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  const handleComplete = (e) => {
    const checkedItems = e.detail.value;
    const items = todo.items.map((item) => ({
      ...item,
      completed: !!checkedItems.find((id) => item.id == id),
    }));

    todo.setItems(items);
  };

  return (
    <View className="page-todos">
      <View className="user">
        <Image
          className="avatar"
          src={user ? user.avatar : logo}
          background-size="cover"
        />
        <View className="nickname">
          {user ? user.nickName + "'s" : 'My'} Todo List
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
        <AddButton text="Add Todo" onClick={handleAdd} />
      </View>
    </View>
  );
};
