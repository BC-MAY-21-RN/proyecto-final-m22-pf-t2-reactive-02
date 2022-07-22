import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

export default function Header({text, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrowleft" type="antdesign" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
