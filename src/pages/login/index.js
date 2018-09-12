import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
