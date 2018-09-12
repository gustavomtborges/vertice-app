import React from 'react';
import { AsyncStorage } from 'react-native';

import createNavigation from './routes';
import './config/reactotronConfig';

export default class App extends React.Component {
  state = {
    isChecked: false,
    isLogged: false,
  }

  async componentDidMount() {
    const username = await AsyncStorage.getItem('@vertice:username');

    this.appLoaded(username);
  }

  appLoaded = (username) => {
    this.setState({
      isChecked: true,
      isLogged: !!username,
    });
  }

  render() {
    const { isChecked, isLogged } = this.state;
    if (!isChecked) return null;

    const Routes = createNavigation(isLogged);

    return <Routes />;
  }
}
