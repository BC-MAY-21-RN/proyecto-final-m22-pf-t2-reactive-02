import 'react-native';
import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';
import Icons from '../src/components/atoms/Icons';

describe('Test from Icons component', () => {
  it('Icons snapshot test', () => {
    const renderIcons = renderer
      .create(<Icons IconProp={View} styles={{}} />)
      .toJSON();
    expect(renderIcons).toMatchSnapshot();
  });
});
