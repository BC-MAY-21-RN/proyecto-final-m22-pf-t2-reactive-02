import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BottomText from '../src/components/atoms/BottomText';

describe('Test from BottomText component', () => {
  it('BottomText snapshot test', () => {
    const renderBottomText = renderer
      .create(
        <BottomText
          namescreen={''}
          navigation={{navigation: () => {}}}
          text={''}
          key={1}
        />,
      )
      .toJSON();
    expect(renderBottomText).toMatchSnapshot();
  });
});
