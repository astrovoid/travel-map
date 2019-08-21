import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { Routing } from './routes';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
}

export default App;
