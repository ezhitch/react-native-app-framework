import { initialState } from '../configs/InitialState';
import { passwordActionTypes } from '../actiontypes/PasswordActionTypes';

export const passwordReducer = (state = initialState.user, action = {}) => {
	switch (action.type) {
    case passwordActionTypes.DISPATCH:
			return {...state, password: action.password};
    default:
      return state;
	}
};
