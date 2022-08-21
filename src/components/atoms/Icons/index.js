import React from 'react';
import {View} from 'react-native';

export default function Icons({IconProp, styles}) {
  return (
    <View style={styles}>
      <IconProp />
    </View>
  );
}
