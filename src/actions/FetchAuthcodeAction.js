import { fetchAuthcodeActionTypes } from '../actiontypes/FetchAuthcodeActionTypes';
import { serverList } from '../configs/ServerList';
import { basicHeaders } from '../common/BasicHeaders';
import { fetcher } from '../common/Fetcher';

export const fetchAuthcodeAction = (phoneNumber) => dispatch => {
	dispatch({
		type: fetchAuthcodeActionTypes.REQUEST
	});

	const url = serverList.nodeServer.hostname + '/user/get_authcode?phone_number=' + phoneNumber;
	const params = {
		method: 'GET',
    headers: basicHeaders
	};
	fetcher({
		url: url,
		params: params,
		success: fetchAuthcodeActionTypes.SUCCESS,
		failure: fetchAuthcodeActionTypes.FAILURE
	}, dispatch);
};
