import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { colors } from './styles';
import LoginPage from './pages/Login';
import RecommendationsPage from './pages/Recommendations';
import AnalyticsPage from './pages/Analytics';
import PortifolioPage from './pages/Portifolio';
import PerfilPage from './pages/Perfil';

const createNavigation = (isLogged = false) => createStackNavigator(
  {
    Login: { screen: LoginPage },
    Home: {
      screen: createBottomTabNavigator(
        {
          Recommendations: { screen: RecommendationsPage },
          Analytics: { screen: AnalyticsPage },
          Portifolio: { screen: PortifolioPage },
          Perfil: { screen: PerfilPage },
        },
        {
          initialRouteName: 'Perfil',
          tabBarOptions: {
            showIcon: true,
            showLabel: true,
            labelStyle: {
              fontSize: 14,
              fontFamily: 'SourceSansPro',
            },
            tabStyle: {
              width: 100,
              height: 64,
            },
            activeTintColor: colors.white,
            inactiveTintColor: colors.dark,
            style: {
              height: 64,
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
  },
  {
    initialRouteName: isLogged ? 'Home' : 'Login',
    headerMode: 'none',
  },
);

export default createNavigation;
