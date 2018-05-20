import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './utils/history';
import App from './containers/App';

// Import store configuration
import configureStore from './configureStore';

// Import CSS normalize
import 'normalize.css'; // eslint-disable-line

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
