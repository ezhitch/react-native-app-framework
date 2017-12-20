export const fetcher = (inputObject, dispatch) => {
  let errString;
	const { url, params, success, failure } = inputObject;
	fetch(url, params).then(
		(response) => {
      switch (response.status) {
        case 200:
          dispatch({
            type: success,
            payload: {
              isFetching: false,
              headers: response.headers.map,
              data: JSON.parse(response._bodyText)
            }
          });
          return;
        case 400:
          errString = '错误请求';
          break;
        case 404:
          errString = '未找到';
          break;
        case 500:
          errString = '服务器错误';
          break;
        default:
          errString = '未知错误';
          break;
      }

      dispatch({
        type: failure,
        payload: {
          isFetching: false,
          data: errString
        }
      });
    }
	).catch(
		(error) => {
		  dispatch({
				type: failure,
				payload: {
					isFetching: false,
					data: '异常错误'
				}
			});
		}
	)
};
