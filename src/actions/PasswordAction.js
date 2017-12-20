import { passwordActionTypes } from '../actiontypes/PasswordActionTypes';

export const passwordAction = (password) => {
  return {
    type: passwordActionTypes.DISPATCH,
    password
  }
};
