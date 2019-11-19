import * as React from 'react';
import Todo from './containers/Todo';
import './app.css';

const App = ({ children }) => <Todo.Provider>{children}</Todo.Provider>;

export default App;
