import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const LoginPage = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Welcome to ./live
    </Text>
  </View>
);

export default LoginPage;
