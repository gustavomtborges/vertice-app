import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from './styles';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import HeaderRight from './components/HeaderRight';

const createNavigation = (isLogged = false) => createStackNavigator(
  {
    Login: { screen: LoginPage },
    Home: {
      screen: createBottomTabNavigator(
        {
          Home: { screen: HomePage },
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
  },
  {
    initialRouteName: isLogged ? 'Home' : 'Login',
    navigationOptions: ({ navigation }) => ({
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
);

export default createNavigation;
