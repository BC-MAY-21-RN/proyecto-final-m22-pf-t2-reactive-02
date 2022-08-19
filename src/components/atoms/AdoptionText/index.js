import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function AdoptionText({title, info}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{info}</Text>
    </View>
  );
}
