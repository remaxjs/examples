import * as React from 'react';
// @ts-ignore
import { connect } from 'remax-redux';
import { View, Input, navigateBack } from 'remax/wechat';
import AddButton from '@/components/AddButton';
import { addTodo } from '@/actions';
import './index.css';

interface PageProps {
  dispatch: Function;
}

const NewPage = ({ dispatch }: PageProps) => {
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    dispatch(addTodo(text));
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

export default connect()(NewPage);
