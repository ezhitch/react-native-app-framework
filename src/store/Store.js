import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers/RootReducer';

export const store = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
	    createLogger()
    )
  );
};
