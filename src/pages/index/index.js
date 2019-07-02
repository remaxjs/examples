import * as React from 'react';
import { View, Image, CheckboxGroup, Checkbox, Label, Text } from 'remax';
import clsx from 'clsx';
import useUserInfo from '../../hooks/useUserInfo';
import AddButton from '../../components/AddButton';
import './index.css';

const app = getApp();

export default React.forwardRef((_, ref) => {
  const user = useUserInfo();
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    setTodos(app.todos);
  }, [app.todos]);

  React.useImperativeHandle(ref, () => ({
    componentDidShow() {
      setTodos(app.todos);
    },
  }));

  const handleAdd = () => {
    my.navigateTo({ url: '../new/index' });
  };

  const handleComplete = e => {
    const checkedTodos = e.detail.value;
    app.todos = app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.id) > -1,
    }));
    setTodos(app.todos);
  };

  return (
    <View className="page-todos">
      {user && (
        <View className="user">
          <Image className="avatar" src={user.avatar} background-size="cover" />
          <View className="nickname">{user.nickName + "'s"} Todo List</View>
        </View>
      )}

      <View className="todo-items">
        <CheckboxGroup className="todo-items-group" onChange={handleComplete}>
          {todos.map(todo => (
            <Label key={todo.id} className={clsx('todo-item', { checked: todo.completed })}>
              <Checkbox className="todo-item-checkbox" value={todo.id} checked={todo.completed} />
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
});
