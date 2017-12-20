import { initialState } from '../configs/InitialState';
import { authcodeActionTypes } from '../actiontypes/AuthcodeActionTypes';

export const authcodeReducer = (state = initialState.user, action = {}) => {
	switch (action.type) {
    case authcodeActionTypes.DISPATCH:
			return {...state, authcode: action.authcode};
    default:
      return state;
	}
};
