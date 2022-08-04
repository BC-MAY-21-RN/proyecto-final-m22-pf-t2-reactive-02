import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function AddButton({navigation, hashtag}) {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={() => navigation.navigate('NewPublication', {hashtag: hashtag})}>
      <Text style={styles.textButton}>+</Text>
    </TouchableOpacity>
  );
}
