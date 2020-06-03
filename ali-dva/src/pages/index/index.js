import * as React from 'react';
import { connect } from 'remax-dva';
import {
  View,
  Image,
  CheckboxGroup,
  Checkbox,
  Label,
  Text,
  navigateTo,
} from 'remax/ali';
import clsx from 'clsx';
import useUserInfo from '@/hooks/useUserInfo';
import AddButton from '@/components/AddButton';
import LoginButton from '@/components/LoginButton';
import logo from '@/assets/logo.png';
import './index.css';

const IndexPage = ({ todos, dispatch }) => {
  const [user, login] = useUserInfo();

  const handleAdd = async () => {
    navigateTo({ url: '../new/index' });
  };

  const handleToggle = (todo) => (e) => {
    dispatch({
      type: 'todo/toggle',
      id: todo.id,
    });
  };

  return (
    <View className="page-todos">
      <View className="user">
        <LoginButton login={login}>
          <Image
            className="avatar"
            src={user ? user.avatar : logo}
            background-size="cover"
          />
        </LoginButton>
        <View className="nickname">
          {user ? user.nickName + "'s" : 'My'} Todo List
          {!user && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>

      <View className="todo-items">
        <CheckboxGroup className="todo-items-group">
          {todos.map((todo) => (
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

const mapStateToProps = (state) => ({
  todos: state.todo,
});

export default connect(mapStateToProps)(IndexPage);
