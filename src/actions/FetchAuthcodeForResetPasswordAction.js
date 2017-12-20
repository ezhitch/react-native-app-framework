import { fetchAuthcodeForResetPasswordActionTypes } from '../actiontypes/FetchAuthcodeForResetPasswordActionTypes';
import { serverList } from '../configs/ServerList';
import { basicHeaders } from '../common/BasicHeaders';
import { fetcher } from '../common/Fetcher';

export const fetchAuthcodeForResetPasswordAction = (phoneNumber) => dispatch => {
	dispatch({
		type: fetchAuthcodeForResetPasswordActionTypes.REQUEST
	});

	const url = serverList.nodeServer.hostname + '/user/get_authcode_reset?phone_number=' + phoneNumber;
	const params = {
		method: 'GET',
    headers: basicHeaders
	};
	fetcher({
		url: url,
		params: params,
		success: fetchAuthcodeForResetPasswordActionTypes.SUCCESS,
		failure: fetchAuthcodeForResetPasswordActionTypes.FAILURE,
	}, dispatch);
};
