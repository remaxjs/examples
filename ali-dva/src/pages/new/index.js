import * as React from 'react';
import { connect } from 'remax-dva';
import { View, Input, navigateBack } from 'remax/ali';
import AddButton from '@/components/AddButton';
import './index.css';

const NewPage = ({ dispatch }) => {
  const [text, setText] = React.useState('');

  const handleAdd = () => {
    dispatch({
      type: 'todo/add',
      text,
    });
    navigateBack();
  };

  return (
    <View className="page-add-todo">
      <View className="add-todo">
        <Input
          className="add-todo-input"
          placeholder="What needs to be done?"
          onInput={(e) => setText(e.detail.value)}
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
