import React, { Component } from 'react';
import { View } from 'react-native';

import FacebookButton from './components/FacebookButton/index.android';
import styles from './style';

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <FacebookButton />
      </View>
    );
  }
}
