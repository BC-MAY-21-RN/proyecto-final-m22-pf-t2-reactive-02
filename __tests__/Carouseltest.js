import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../src/components/atoms/Carousel';

describe('Test from Carousel component', () => {
  it('Carousel snapshot test', () => {
    const renderCarousel = renderer
      .create(
        <Carousel
          array={[]}
          handleImgsVisible={() => {}}
          handleUrlImgs={() => {}}
        />,
      )
      .toJSON();
    expect(renderCarousel).toMatchSnapshot();
  });
});
