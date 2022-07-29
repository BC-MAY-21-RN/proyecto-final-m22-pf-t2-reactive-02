import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Icon} from 'react-native-elements';

export default function InfoUser({text, info, icon}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.contInfo}>
        <Icon name={icon} type={'feather'} />
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  );
}
