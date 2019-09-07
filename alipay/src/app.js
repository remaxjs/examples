import * as React from 'react';
import dva, { connect } from '@remax/dva';
import todo from './models/todo';
import './app.css';

const app = dva();
app.model(todo);
const Provider = app.start();

const App = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default App;
