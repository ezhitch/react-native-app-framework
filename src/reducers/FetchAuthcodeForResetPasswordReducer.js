import { Alert } from 'react-native';
import { initialState } from '../configs/InitialState';
import { CONSTANT } from '../constants/Constant';
import { fetchAuthcodeForResetPasswordActionTypes } from '../actiontypes/FetchAuthcodeForResetPasswordActionTypes';
import { serverStatusCode } from '../constants/ServerStatusCode';

export const fetchAuthcodeForResetPasswordReducer = (state = initialState.user, action = {}) => {
  switch (action.type) {
    case fetchAuthcodeForResetPasswordActionTypes.REQUEST:
      return {...state, isFetching: true};
		case fetchAuthcodeForResetPasswordActionTypes.SUCCESS:
      const { isFetching, data } = action.payload;
		  if (!isFetching && data) {
		    const { status, message, authcode } = data;
        if (status === serverStatusCode.SC_FETCH_AUTHCODE_FOR_RESET_PASSWORD_SUCCESS && authcode.length === 4) {
        	// 获取验证码成功
          Alert.alert(message, authcode);
          return {...state, isFetching: false};
        } else {
	        // 获取验证码失败
          Alert.alert(CONSTANT.ALERT_TITLE, message);
	        return {...state, isFetching: false};
        }
      }
      return state;
		case fetchAuthcodeForResetPasswordActionTypes.FAILURE:
			Alert.alert(CONSTANT.ALERT_TITLE, action.payload.data);
			return {...state, isFetching: false};
    default:
      return state;
	}
};
