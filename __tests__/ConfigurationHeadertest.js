import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ConfigurationHeader from '../src/components/atoms/ConfigurationHeader';
import '@react-native-firebase/auth';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-google-signin/google-signin', () => {});

describe('Test from ConfigurationHeader component', () => {
  it('ConfigurationHeader snapshot test', () => {
    const renderConfigurationHeader = renderer
      .create(
        <ConfigurationHeader
          image={''}
          name={''}
          photo={''}
          setPhoto={() => {}}
        />,
      )
      .toJSON();
    expect(renderConfigurationHeader).toMatchSnapshot();
  });
});
