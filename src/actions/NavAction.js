import { navActionTypes } from '../actiontypes/NavActionTypes';

export const navAction = (routeName) => {
  return {
    type: navActionTypes.NAV,
    routeName
  }
};
