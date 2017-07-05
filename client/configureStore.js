import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';

const configureStore = () => {
  const router = routerMiddleware(browserHistory);
  const middlewares = [router];

  if (!process.env.NODE_ENV) {
    const createLogger = require('redux-logger').createLogger;
    const logger = createLogger();
    middlewares.push(logger);
  }

  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;