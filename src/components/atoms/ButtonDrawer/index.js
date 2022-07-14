import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import styles from './styles';

export default function ButtonDrawer({text, icon, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.containerItem}>
        <Icon name={icon} type="antdesign" style={styles.iconPosition} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
