import * as React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './app.css';

const store = createStore(rootReducer);

const App = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
