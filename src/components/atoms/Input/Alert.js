import React from 'react';
import {View, Text} from 'react-native';
import Icons from '../Icons';
import styles from './styles';
import WarningSVG from '../../../assets/icons/warning.svg';
import TriangleSVG from '../../../assets/icons/triangulo.svg';
import functions from './functions';

export default function Alert({title}) {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.rectangle}>
        <View style={styles.row}>
          <Icons styles={styles.warning} IconProp={WarningSVG} />
          <Text style={styles.textAlert}>{functions.getText(title)}</Text>
        </View>
      </View>
      <Icons IconProp={TriangleSVG} styles={styles.triangle} />
    </View>
  );
}
