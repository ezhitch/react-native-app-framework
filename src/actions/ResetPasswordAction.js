import { resetPasswordActionTypes } from '../actiontypes/ResetPasswordActionTypes';
import { serverList } from '../configs/ServerList';
import { basicHeaders } from '../common/BasicHeaders';
import { fetcher } from '../common/Fetcher';

export const resetPasswordAction = (body, token) => dispatch => {
	dispatch({
		type: resetPasswordActionTypes.REQUEST
	});

	const url = serverList.nodeServer.hostname + '/user/reset_password';
	let headers = basicHeaders;
	headers['token'] = token;
  const params = {
		method: 'PUT',
    headers: headers,
    body: JSON.stringify(body)
	};
	fetcher({
		url: url,
		params: params,
		success: resetPasswordActionTypes.SUCCESS,
		failure: resetPasswordActionTypes.FAILURE
	}, dispatch);
};
