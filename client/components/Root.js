import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App';
import configureStore from '../configureStore';

const store = configureStore();
const history = createBrowserHistory();

const Root = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>;

export default Root;