import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

export default function InputForm({text, hashtag}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={text}
        style={styles.input}
        defaultValue={hashtag}
      />
    </View>
  );
}
