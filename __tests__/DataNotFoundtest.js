import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DataNotFound from '../src/components/atoms/DataNotFound';

describe('Test from DataNotFound component', () => {
  it('DataNotFound snapshot test', () => {
    const renderDataNotFound = renderer
      .create(<DataNotFound text={''} title={''} />)
      .toJSON();
    expect(renderDataNotFound).toMatchSnapshot();
  });
});
