import * as React from 'react';
import { createStore } from "redux";
// @ts-ignore
import { Provider } from 'remax-redux';
import rootReducer from './reducers';
import './app.css';

const store = createStore(rootReducer);

interface PageProps {
  children: React.ReactNode;
}

const App = ({ children }: PageProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default App;
