import { initialState } from '../configs/InitialState';
import { phoneNumberActionTypes } from '../actiontypes/PhoneNumberActionTypes';

export const phoneNumberReducer = (state = initialState.user, action = {}) => {
  switch (action.type) {
    case phoneNumberActionTypes.DISPATCH:
			return {...state, phoneNumber: action.phoneNumber};
    default:
      return state;
	}
};
