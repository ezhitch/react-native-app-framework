import { Alert } from 'react-native';
import { initialState } from '../configs/InitialState';
import { CONSTANT } from '../constants/Constant';
import { fetchAuthcodeActionTypes } from '../actiontypes/FetchAuthcodeActionTypes';
import { serverStatusCode } from '../constants/ServerStatusCode';

export const fetchAuthcodeReducer = (state = initialState.user, action = {}) => {
	switch (action.type) {
    case fetchAuthcodeActionTypes.REQUEST:
      return {...state, isFetching: true};
		case fetchAuthcodeActionTypes.SUCCESS:
      const { isFetching, data } = action.payload;
		  if (!isFetching && data) {
		    const { status, message, authcode } = data;
        if (status === serverStatusCode.SC_FETCH_AUTHCODE_SUCCESS && authcode.length === 4) {
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
		case fetchAuthcodeActionTypes.FAILURE:
			Alert.alert(CONSTANT.ALERT_TITLE, action.payload.data);
			return {...state, isFetching: false};
    default:
      return state;
	}
};
