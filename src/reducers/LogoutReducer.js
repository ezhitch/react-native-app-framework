import { Alert } from 'react-native';
import { initialState } from '../configs/InitialState';
import { CONSTANT } from '../constants/Constant';
import { logoutActionTypes } from '../actiontypes/LogoutActionTypes';
import { serverStatusCode } from '../constants/ServerStatusCode';

export const logoutReducer = (state = initialState.user, action = {}) => {
  switch (action.type) {
    case logoutActionTypes.REQUEST:
      return {...state, isFetching: true};
		case logoutActionTypes.SUCCESS:
      const { isFetching, data } = action.payload;
      if (!isFetching && data) {
        const { status, message } = data;
        if (status === serverStatusCode.SC_LOGOUT_SUCCESS) {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false, isLogined: false};
        } else {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false};
        }
      }
      return state;
		case logoutActionTypes.FAILURE:
			Alert.alert(CONSTANT.ALERT_TITLE, action.payload.data);
			return {...state, isFetching: false};
    default:
      return state;
	}
};
