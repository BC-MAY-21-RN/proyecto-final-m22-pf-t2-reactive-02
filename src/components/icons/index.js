import React from 'react';
import {View} from 'react-native';

export default function Icons({IconProp, style}) {
  return (
    <View style={style}>
      <IconProp />
    </View>
  );
}
