import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import LoginPage from './pages/Login';
import HomePage from './pages/Home';

const createNavigation = (isLogged = false) => createStackNavigator(
  {
    Login: { screen: LoginPage },
    Home: {
      screen: createBottomTabNavigator({
        Home: { screen: HomePage },
      }),
    },
  },
  {
    initialRouteName: isLogged ? 'Home' : 'Login',
  },
);

export default createNavigation;
