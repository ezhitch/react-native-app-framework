import { logoutActionTypes } from '../actiontypes/LogoutActionTypes';
import { serverList } from '../configs/ServerList';
import { basicHeaders } from '../common/BasicHeaders';
import { fetcher } from '../common/Fetcher';

export const logoutAction = (body, token) => dispatch => {
	dispatch({
		type: logoutActionTypes.REQUEST
	});

  let headers = basicHeaders;
  headers['token'] = token;
	const url = serverList.nodeServer.hostname + '/user/logout';
	const params = {
		method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
	};
	fetcher({
		url: url,
		params: params,
		success: logoutActionTypes.SUCCESS,
		failure: logoutActionTypes.FAILURE
	}, dispatch);
};
