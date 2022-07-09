import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GoogleSVG from '../../assets/icons/google.svg';
import Icons from '../icons';

export default function ButtonsForInit({text}) {
  return (
    <View>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text1}>{text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text2}>Ingresa con:</Text>
        <Icons IconProp={GoogleSVG} style={styles.google} />
      </TouchableOpacity>
    </View>
  );
}
