import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ButtonForgetScreen({text, onPress=null}) {
  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles.button,
        }}
        onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
