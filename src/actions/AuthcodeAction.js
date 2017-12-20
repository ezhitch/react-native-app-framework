import { authcodeActionTypes } from '../actiontypes/AuthcodeActionTypes';

export const authcodeAction = (authcode) => {
  return {
    type: authcodeActionTypes.DISPATCH,
    authcode
  }
};
