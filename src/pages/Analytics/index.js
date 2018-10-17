import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default class Analytics extends React.Component {
  static navigationOptions = {
    title: 'Análises',
    tabBarIcon: ({ tintColor }) => <Icon name="piechart" size={24} color={tintColor} />,
  };

  render() {
    return <View style={styles.container} />;
  }
}
