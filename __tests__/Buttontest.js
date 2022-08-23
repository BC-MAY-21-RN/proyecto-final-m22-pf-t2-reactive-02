import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/atoms/Button';

describe('Test from Button component', () => {
  it('Button snapshot test', () => {
    const renderButton = renderer
      .create(
        <Button
          children={null}
          disabled={false}
          onPress={() => {}}
          style={{}}
          text={''}
          key={1}
        />,
      )
      .toJSON();
    expect(renderButton).toMatchSnapshot();
  });
});
