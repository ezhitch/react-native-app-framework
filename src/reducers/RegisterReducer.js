import { Alert } from 'react-native';
import { initialState } from '../configs/InitialState';
import { CONSTANT } from '../constants/Constant';
import { registerActionTypes } from '../actiontypes/RegisterActionTypes';
import { serverStatusCode } from '../constants/ServerStatusCode';

export const registerReducer = (state = initialState.user, action = {}) => {
  switch (action.type) {
    case registerActionTypes.REQUEST:
      return {...state, isFetching: true, isRegistered: false};
		case registerActionTypes.SUCCESS:
      const { isFetching, data } = action.payload;
      if (!isFetching && data) {
        const { status, message } = data;
        if (status === serverStatusCode.SC_REGISTER_SUCCESS) {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false, isRegistered: true};
        } else {
          Alert.alert(CONSTANT.ALERT_TITLE, message);
          return {...state, isFetching: false, isRegistered: false};
        }
      }
      return state;
		case registerActionTypes.FAILURE:
			Alert.alert(CONSTANT.ALERT_TITLE, action.payload.data);
			return {...state, isFetching: false, isRegistered: false};
    default:
      return state;
	}
};
