import { createStackNavigator } from 'react-navigation';

import LoginPage from '../pages/login';

export default createStackNavigator({
  Login: {
    screen: LoginPage,
  },
});
