import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import GoogleSVG from '../../../assets/icons/google.svg';
import Icons from '../Icons';
import styles from './styles';
import colors from '../../../const/colors';

const buttons = ['normalbutton', 'googlebutton'];

export default function ButtonsForInit({
  validationbtn1,
  validationbtn2,
  textButton,
  onPress1,
  onPress2,
}) {
  return (
    <View>
      {buttons.map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={i === 0 ? onPress1 : onPress2}
          disabled={i === 0 ? !validationbtn1 : !validationbtn2}
          style={{
            ...(i === 0 ? styles.button1 : styles.button2),
            ...(i === 0
              ? validationbtn1
              : validationbtn2
              ? {}
              : {backgroundColor: colors.disabledpink}),
          }}>
          <Text style={i === 0 ? styles.text1 : styles.text2}>
            {i === 0 ? textButton : 'INGRESA CON: '}
          </Text>
          {i === 0 ? null : (
            <Icons IconProp={GoogleSVG} style={styles.google} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
