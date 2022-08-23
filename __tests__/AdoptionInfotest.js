import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AdoptionInfo from '../src/components/atoms/AdoptionInfo';
import '@react-native-firebase/auth';
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-google-signin/google-signin', () => {});

describe('Test from AdoptionInfo component', () => {
  it('AdoptionInfo snapshot test', () => {
    const renderAdoptionInfo = renderer
      .create(<AdoptionInfo data={{}} key={1} />)
      .toJSON();
    expect(renderAdoptionInfo).toMatchSnapshot();
  });
});
