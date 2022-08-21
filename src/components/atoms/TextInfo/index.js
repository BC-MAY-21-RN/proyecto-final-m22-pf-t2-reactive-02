import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function TextInfo({text, info, icon}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{text}</Text>
      <View style={styles.icontext}>
        <Icon name={icon} type={'feather'} />
        <Text style={styles.text2}>{info}</Text>
      </View>
    </View>
  );
}
