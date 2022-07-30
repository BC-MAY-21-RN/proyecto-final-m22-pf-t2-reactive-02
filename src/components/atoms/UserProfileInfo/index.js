import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function UserProfileInfo({info, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.space}>
        <Text style={styles.info}>{info}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
