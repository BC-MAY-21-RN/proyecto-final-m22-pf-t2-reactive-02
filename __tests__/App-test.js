/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {mocked} from 'ts-jest/utils';
import '@react-native-google-signin/google-signin';
import 'react-native-gesture-handler/jestSetup';
import 'react-native-permissions';
import '@react-native-firebase/app';
import '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-google-signin/google-signin', () => {});
jest.mock('react-native-permissions', () => {
  require('react-native-permissions/mock');
});
jest.mock('@react-native-firebase/auth');
const mockedAuth = mocked(auth, true);
beforeEach(() => {
  mockedAuth.mockReset();
});

it('renders correctly', () => {
  mockedAuth.mockReturnValue({
    currentUser: null,
    onAuthStateChanged: jest.fn(),
  });
  renderer.create(<App />);
});
