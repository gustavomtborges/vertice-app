import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import LoginPage from './pages/login';

const createNavigation = (isLogged = false) => createStackNavigator(
  {
    Login: {
      screen: LoginPage,
    },
  },
);

export default createNavigation;
