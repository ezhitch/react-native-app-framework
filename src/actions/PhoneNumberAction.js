import { phoneNumberActionTypes } from '../actiontypes/PhoneNumberActionTypes';

export const phoneNumberAction = (phoneNumber) => {
  return {
    type: phoneNumberActionTypes.DISPATCH,
    phoneNumber
  }
};
