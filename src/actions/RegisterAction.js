import { registerActionTypes } from '../actiontypes/RegisterActionTypes';
import { serverList } from '../configs/ServerList';
import { basicHeaders } from '../common/BasicHeaders';
import { fetcher } from '../common/Fetcher';

export const registerAction = (body) => dispatch => {
	dispatch({
		type: registerActionTypes.REQUEST
	});

	const url = serverList.nodeServer.hostname + '/user/register';
	const params = {
		method: 'POST',
    headers: basicHeaders,
    body: JSON.stringify(body)
	};
	fetcher({
		url: url,
		params: params,
		success: registerActionTypes.SUCCESS,
		failure: registerActionTypes.FAILURE
	}, dispatch);
};
