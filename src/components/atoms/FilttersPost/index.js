import React from 'react';
import {View, Text, Button} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import Lists from './functions';
import RadioButtonComp from '../RadioButton';

export default function FilttersPost() {
  const Submit = () => {};
  return (
    <Animatable.View animation={'bounceIn'} style={styles.animatable}>
      <View style={styles.alignText}>
        <Text style={styles.title}>Filtros</Text>
      </View>
      <RadioButtonComp List={Lists.listData} />
      <RadioButtonComp List={Lists.listData2} />
      <View style={styles.button}>
        <Button title="Filtrar" onPress={Submit} color="#A05A88" />
      </View>
    </Animatable.View>
  );
}
