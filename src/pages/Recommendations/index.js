import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Recommendations extends React.Component {
  static navigationOptions = {
    title: 'Recomendações',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={24} color={tintColor} />,
  };

  render() {
    return <View style={styles.container} />;
  }
}
