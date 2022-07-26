import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function AddButton({navigation}) {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.navigate('NewPublication')}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  );
}
