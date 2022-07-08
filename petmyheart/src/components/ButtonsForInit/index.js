import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GoogleSVG from '../../assets/icons/google.svg';
import Icons from '../icons';

export default function ButtonsForInit({isActive, navigation, nameScreen}) {
  return (
    <View>
      <TouchableOpacity
        disabled={isActive}
        style={styles.button1}
        onPress={() => navigation.navigate(nameScreen)}>
        <Text style={styles.text1}>CREAR CUENTA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text2}>Ingresa con:</Text>
        <Icons IconProp={GoogleSVG} style={styles.google} />
      </TouchableOpacity>
    </View>
  );
}
