import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
} from 'react-native';

import FacebookButton from './components/FacebookButton/index.android';
import styles from './style';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../images/logo.png')} />
        <FacebookButton navigation={navigation} />
      </View>
    );
  }
}
