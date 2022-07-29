import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

export default function ButtonForm({text, onPress}) {
  return (
    <View style={styles.containerText}>
      {onPress ? (
        <TouchableOpacity style={styles.container} onPress={onPress}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.text2}>{text}</Text>
      )}
    </View>
  );
}
