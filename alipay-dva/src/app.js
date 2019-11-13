import * as React from 'react';
import dva from 'remax-dva';
import todo from './models/todo';
import './app.css';

const app = dva();
app.model(todo);

const App = app.start(({ children }) => children);

export default App;
