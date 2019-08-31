import * as React from 'react';
import TodoContainer from './containers/Todo';
import './app.css';

const App = ({ children }) => {
  return <TodoContainer>{children}</TodoContainer>;
};

export default App;
