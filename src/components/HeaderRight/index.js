import React from 'react';
import { TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginManager } from 'react-native-fbsdk';

import styles from './styles';

export default class HeaderRight extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  signOut = async () => {
    await LoginManager.logOut();
    await AsyncStorage.clear();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' }),
      ],
    });
    const { navigation } = this.props;
    navigation.dispatch(resetAction);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.signOut}
      >
        <Icon name="logout" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
