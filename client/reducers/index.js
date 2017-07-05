import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { home } from './home';
import { LOGOUT } from '../constants';

const appReducer = combineReducers({
  home,
  routing: routerReducer
});

export default (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};