import * as React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  CheckboxGroup,
  Checkbox,
  Label,
  Text,
  navigateTo
} from 'remax/wechat';
import clsx from 'clsx';
import useUserInfo from '../../hooks/useUserInfo';
import AddButton from '@/components/AddButton';
import LoginButton from '@/components/LoginButton';
import { toggleTodo } from '@/actions';
import logo from '@/assets/logo.png';
import './index.css';

const IndexPage = ({ todos, dispatch }) => {
  const [user, login] = useUserInfo();

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  const handleToggle = todo => () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <View className="page-todos">
      <View className="user">
        <LoginButton login={login}>
          <Image
            className="avatar"
            src={user ? user.avatar : logo}
          />
        </LoginButton>
        <View className="nickname">
          {user ? user.nickName + "'s" : 'My'} Todo List
          {!user && <Text className="login-tip">(Tap to login ↑)</Text>}
        </View>
      </View>

      <View className="todo-items">
        <CheckboxGroup className="todo-items-group">
          {todos.map(todo => (
            <Label
              onClick={handleToggle(todo)}
              key={todo.id}
              className={clsx('todo-item', {
                checked: todo.completed
              })}
            >
              <Checkbox
                className="todo-item-checkbox"
                value={todo.id}
                checked={todo.completed}
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

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(IndexPage);
