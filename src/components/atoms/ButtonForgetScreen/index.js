import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../ButtonsForInit/styles';

export default function ButtonForgetScreen({text, onPress}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.button1,
        }}
        onPress={onPress}>
        <Text style={styles.text1}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
