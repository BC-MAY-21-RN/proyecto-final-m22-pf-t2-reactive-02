import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import CheckSVG from '../../../assets/icons/check.svg';
import colors from '../../../const/colors';

export default function Term({text, isSelect = false, change, term}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => change({[term]: !isSelect})}
          style={{
            ...styles.touchable,
            ...(isSelect
              ? {backgroundColor: colors.green}
              : {backgroundColor: colors.white, borderWidth: 1}),
          }}>
          {isSelect ? <CheckSVG /> : null}
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
