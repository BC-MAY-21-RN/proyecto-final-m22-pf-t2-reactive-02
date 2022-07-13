import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function BottomText({text, navigation, namescreen}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(namescreen)}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
