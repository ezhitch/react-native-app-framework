import { Alert } from 'react-native';
import { initialState } from '../configs/InitialState';
import { CONSTANT } from '../constants/Constant';
import { resetPasswordActionTypes } from '../actiontypes/ResetPasswordActionTypes';
import { serverStatusCode } from '../constants/ServerStatusCode';

export const resetPasswordReducer = (state = initialState.user, action = {}) => {
  switch (action.type) {
    case resetPasswordActionTypes.REQUEST:
      return {...state, isFetching: false};
		case resetPasswordActionTypes.SUCCESS:
      const { isFetching, data } = action.payload;
      if (!isFetching && data) {
        const { status, message } = data;
        if (status === serverStatusCode.SC_RESET_PASSWORD_SUCCESS) {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false, isLogined: false};
        } else {
	        Alert.alert(CONSTANT.ALERT_TITLE, message);
	        return {...state, isFetching: false};
        }
      }
      return state;
		case resetPasswordActionTypes.FAILURE:
			Alert.alert(CONSTANT.ALERT_TITLE, action.payload.data);
			return {...state, isFetching: false};
    default:
      return state;
	}
};
