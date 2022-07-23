import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

export default function ButtonForm({text, type}) {
  const change = type;
  return (
    <View style={styles.containerText}>
      {change ? (
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.text2}>{text}</Text>
      )}
    </View>
  );
}
