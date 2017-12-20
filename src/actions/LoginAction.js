import { loginActionTypes } from '../actiontypes/LoginActionTypes';
import { serverList } from '../configs/ServerList';
import { basicHeaders } from '../common/BasicHeaders';
import { fetcher } from '../common/Fetcher';

export const loginAction = (body) => dispatch => {
	dispatch({
		type: loginActionTypes.REQUEST
	});

	const url = serverList.nodeServer.hostname + '/user/login';
	const params = {
		method: 'POST',
    headers: basicHeaders,
    body: JSON.stringify(body)
	};
	fetcher({
		url: url,
		params: params,
		success: loginActionTypes.SUCCESS,
		failure: loginActionTypes.FAILURE
	}, dispatch);
};
