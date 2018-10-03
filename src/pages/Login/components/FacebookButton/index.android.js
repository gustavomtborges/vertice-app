import React from 'react';
import PropTypes from 'prop-types';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { NavigationActions, StackActions } from 'react-navigation';
import {
  Alert,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';

async function saveToken(token) {
  await AsyncStorage.setItem('@vertice:token', token);
}

function redirectToHome(navigation) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'Home' }),
    ],
  });
  navigation.dispatch(resetAction);
}

const FacebookButton = ({ navigation }) => (
  <LoginButton
    readPermissions={['public_profile', 'email']}
    onLoginFinished={
      (error, result) => {
        if (error) {
          Alert.alert('Login failed with error', error.message);
        } else if (result.isCancelled) {
          ToastAndroid.show('Login was cancelled', ToastAndroid.SHORT);
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            saveToken(data.accessToken.toString());
            redirectToHome(navigation);
          });
        }
      }
    }
  />
);

FacebookButton.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};

export default FacebookButton;
