import { TabNavigator } from 'react-navigation';
import { CONSTANT } from '../constants/Constant';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import StoryScreen from '../screens/StoryScreen';
import OrderScreen from '../screens/OrderScreen';
import MeScreen from '../screens/MeScreen';

export const AppTabNavigator = TabNavigator({
  'HomeScreen': {
    screen: HomeScreen
  },
  'FavoritesScreen': {
    screen: FavoritesScreen
  },
  'StoryScreen': {
    screen: StoryScreen
  },
  'OrderScreen': {
    screen: OrderScreen
  },
  'MeScreen': {
    screen: MeScreen
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipedEnabled: true,
  tabBarOptions: {
    activeTintColor: CONSTANT.BASIC_COLOR
  },
  headerMode: 'none'
});
