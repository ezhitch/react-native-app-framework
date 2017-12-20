import { StackNavigator } from 'react-navigation';
import { AppTabNavigator } from './AppTabNavigator';
import { CONSTANT } from '../constants/Constant';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';

export const AppStackNavigator = StackNavigator({
  'Entrance': {
    screen: AppTabNavigator
  },
  'ResetPasswordScreen': {
    screen: ResetPasswordScreen
  },
	'RegisterScreen': {
		screen: RegisterScreen
	},
	'SettingsScreen': {
		screen: SettingsScreen
	},
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: CONSTANT.BASIC_COLOR
    }
  }
});
