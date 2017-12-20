import { AppStackNavigator } from '../routers/AppStackNavigator';

export const navReducer = (state, action) => {
  return AppStackNavigator.router.getStateForAction(action, state) || state;
};
