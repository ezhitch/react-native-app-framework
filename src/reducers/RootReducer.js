import { combineReducers } from 'redux';
import { navReducer } from './NavReducer';
import { userReducer } from './UserReducer';

export const rootReducer = combineReducers({
  nav: navReducer,
  user: userReducer,
});
