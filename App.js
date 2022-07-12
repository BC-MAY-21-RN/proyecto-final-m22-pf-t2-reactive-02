/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Navigation from './src/navigation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {UserContextProvider} from './src/context/UserContext';
import {CLIENT_ID} from '@env';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: CLIENT_ID,
    });
  });

  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
};

export default App;
