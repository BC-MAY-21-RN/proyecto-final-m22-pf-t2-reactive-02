import React from 'react';
import {View, Text} from 'react-native';

export default function TwoTexts({text2, text, styles}) {
  return (
    <View style={styles.textscontainer}>
      <Text style={styles.toptext}>{text}</Text>
      <Text style={styles.bottomtext}>{text2}</Text>
    </View>
  );
}
