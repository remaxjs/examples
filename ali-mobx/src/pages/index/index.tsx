import * as React from 'react';
import {
  View,
  Image,
  CheckboxGroup,
  Checkbox,
  Label,
  Text,
  navigateTo,
} from 'remax/ali';
import { observer } from 'mobx-react';
import clsx from 'clsx';
import useUserInfo from '../../hooks/useUserInfo';
import useStores from '../../hooks/useStores';
import AddButton from '@/components/AddButton';
import LoginButton from '@/components/LoginButton';
import logo from '@/assets/logo.png';
import './index.css';

const IndexPage = () => {
  const { todoStore } = useStores();
  const [user, login] = useUserInfo();

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  const handleToggle = (todo) => () => {
    todoStore.toggleTodo(todo.id);
  };

  return (
    <View className="page-todos">
      <View className="user">
        <LoginButton login={login}>
          <Image className="avatar" src={user ? user.avatar : logo} />
        </LoginButton>
        <View className="nickname">
          {user ? user.nickName + "'s" : 'My'} Todo List
          {!user && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>

      <View className="todo-items">
        <CheckboxGroup className="todo-items-group">
          {todoStore.todos.map((todo) => (
            <Label
              key={todo.id}
              className={clsx('todo-item', {
                checked: todo.completed,
              })}
            >
              <Checkbox
                className="todo-item-checkbox"
                value={todo.id}
                checked={todo.completed}
                onChange={handleToggle(todo)}
              />
              <Text className="todo-item-text">{todo.text}</Text>
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

export default observer(IndexPage);
