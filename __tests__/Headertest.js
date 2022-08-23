import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/atoms/Header';

describe('Test from Header component', () => {
  it('Header snapshot test', () => {
    const renderHeader = renderer
      .create(<Header text={''} navigation={{}} />)
      .toJSON();
    expect(renderHeader).toMatchSnapshot();
  });
});
