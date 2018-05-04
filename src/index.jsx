import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './containers/App';

const store = createStore(
  reducers,
  {
    news: [{ payload: { id: 0, title: 'Redux GO', message: 'Friday110' } }, { payload: { id: 1, title: 'Redux GO', message: 'Friday1648' } }],
  },
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
