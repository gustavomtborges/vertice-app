import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationActions, StackActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { LoginManager } from 'react-native-fbsdk';
import {
  View,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default class Recommendations extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
    tabBarIcon: ({ tintColor }) => <Icon name="user" size={24} color={tintColor} />,
  };

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
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <Image style={styles.photo} source={require('../../images/default.jpg')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textLabel}>
            Nome
          </Text>
          <Text style={styles.textValue}>
            Gustavo M T Borges
          </Text>
          <Text style={styles.textLabel}>
            Plano
          </Text>
          <Text style={styles.textValue}>
            Trial
          </Text>
        </View>
        <View style={styles.divider} />
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={this.signOut}
        >
          <Text style={styles.signOutButtonText}>
            SAIR
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
