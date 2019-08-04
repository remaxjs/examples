import * as React from 'react';
import {
  View,
  Image,
  CheckboxGroup,
  Checkbox,
  Label,
  Text,
  navigateTo,
  Platform
} from 'remax';
import clsx from 'clsx';
import useUserInfo from '../../hooks/useUserInfo';
import AddButton from '../../components/AddButton';
import LoginButton from '../../components/LoginButton';
import './index.css';

const app = getApp();

const logo = Platform.isAlipay
  ? 'https://s2.ax1x.com/2019/08/05/ecUQJI.jpg'
  : 'https://s2.ax1x.com/2019/08/05/ecUMFA.jpg';

export default ({ lifecycle }) => {
  const [user, login] = useUserInfo();
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    setTodos(app.todos);
  }, [app.todos]);

  lifecycle.useShow(() => {
    setTodos(app.todos);
  }, []);

  const handleAdd = () => {
    navigateTo({ url: '../new/index' });
  };

  const handleComplete = e => {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: !!checkedTodos.find(id => todo.id == id)
    }));
    setTodos(app.todos);
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
        <CheckboxGroup className="todo-items-group" onChange={handleComplete}>
          {todos.map(todo => (
            <Label
              key={todo.id}
              className={clsx('todo-item', {
                checked: todo.completed,
                wechat: Platform.isWechat
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
