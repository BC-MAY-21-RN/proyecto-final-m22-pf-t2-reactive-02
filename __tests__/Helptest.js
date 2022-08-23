import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Help from '../src/components/atoms/Help';

describe('Test from Help component', () => {
  it('Help snapshot test', () => {
    const renderHelp = renderer.create(<Help overlay={false} />).toJSON();
    expect(renderHelp).toMatchSnapshot();
  });
});
