/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import '@react-native-google-signin/google-signin';
import 'react-native-gesture-handler/jestSetup';
import 'react-native-permissions';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-google-signin/google-signin', () => {});
jest.mock('react-native-permissions', () => {
  require('react-native-permissions/mock');
});

it('renders correctly', () => {
  renderer.create(<App />);
});
