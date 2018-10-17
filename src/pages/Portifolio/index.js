import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default class Portifolio extends React.Component {
  static navigationOptions = {
    title: 'Portifólio',
    tabBarIcon: ({ tintColor }) => <Icon name="wallet" size={24} color={tintColor} />,
  };

  render() {
    return <View style={styles.container} />;
  }
}
