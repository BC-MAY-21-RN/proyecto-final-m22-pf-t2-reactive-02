import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ButtonsForInit from '../src/components/atoms/ButtonsForInit';

describe('Test from ButtonsForInit component', () => {
  it('ButtonsForInit snapshot test', () => {
    const renderButtonsForInit = renderer
      .create(
        <ButtonsForInit
          onPress1={() => {}}
          onPress2={() => {}}
          textButton={''}
          validationbtn1={true}
          validationbtn2={true}
          key={1}
        />,
      )
      .toJSON();
    expect(renderButtonsForInit).toMatchSnapshot();
  });
});
