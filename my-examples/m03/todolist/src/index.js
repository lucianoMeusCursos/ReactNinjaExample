import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import reducer from './redux-flow/reducers'
import App from './App';
import 'milligram';

const initialState = {
  todos: [{
    id: 0,
    text: 'Um exemplo com initialState',
    completed: false
  }]
}

const rederState = () => {
  console.log('state: ', store.getState())
}

const store = createStore(reducer, initialState)

store.subscribe(rederState)
rederState()

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
