import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux-flow/configure-store';
import { db } from './config/firebase';

import App from './App';

// Um exemplo para se criar um estado inicial na aplicação
const initialState = {
  todos: [{
    id: 0,
    text: 'Um exemplo com initialState',
    completed: true
  }]
}

const store = configureStore({ initialState })


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
