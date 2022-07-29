import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import RadioButton from 'rn-radio-button';

export default function RadioButtonComp({List}) {
  return (
    <View style={styles.containerRadio}>
      <RadioButton
        outerWidth={23}
        innerWidth={10}
        borderWidth={1.7}
        data={List}
        wrapperStyle={styles.wrapper}
        color={'#A05A88'}
      />
    </View>
  );
}
