import { Alert } from 'react-native';
import { initialState } from '../configs/InitialState';
import { CONSTANT } from '../constants/Constant';
import { loginActionTypes } from '../actiontypes/LoginActionTypes';
import { serverStatusCode } from '../constants/ServerStatusCode';

export const loginReducer = (state = initialState.user, action = {}) => {
  switch (action.type) {
    case loginActionTypes.REQUEST:
      return {...state, isFetching: true, isLogined: false};
		case loginActionTypes.SUCCESS:
      const { isFetching, data } = action.payload;
      if (!isFetching && data) {
        const { status, message } = data;
        if (status === serverStatusCode.SC_LOGIN_SUCCESS) {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false, isLogined: true, token: action.payload.headers.token};
        } else {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false, isLogined: false};
        }
      }
      return state;
		case loginActionTypes.FAILURE:
			Alert.alert(CONSTANT.ALERT_TITLE, action.payload.data);
			return {...state, isFetching: false, isLogined: false};
    default:
      return state;
	}
};
