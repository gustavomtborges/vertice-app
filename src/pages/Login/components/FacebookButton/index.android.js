import React from 'react';
import { LoginButton } from 'react-native-fbsdk';
import { Alert, ToastAndroid, AsyncStorage } from 'react-native';

const saveUserAndRedirectToHome = async (username) => {
  await AsyncStorage.setItem('@vertice:username', username);
};

const FacebookButton = () => (
  <LoginButton
    readPermissions={['public_profile', 'email']}
    onLoginFinished={
      (error, result) => {
        if (error) {
          Alert.alert('Login failed with error', error.message);
        } else if (result.isCancelled) {
          ToastAndroid.show('Login was cancelled', ToastAndroid.SHORT);
        } else {
          const username = result.grantedPermissions.toString();
          saveUserAndRedirectToHome(username);
        }
      }
    }
  />
);

export default FacebookButton;
