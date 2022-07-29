import React from 'react';
import {View, Text, Button} from 'react-native';
import RadioButton from 'rn-radio-button';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default function FilttersPost() {
  const Submit = () => {};
  return (
    <Animatable.View animation={'bounceIn'} style={styles.animatable}>
      <View style={styles.alignText}>
        <Text style={styles.title}>Filtros</Text>
      </View>
      <View style={styles.containerRadio}>
        <RadioButton
          outerWidth={23}
          innerWidth={10}
          borderWidth={1.7}
          data={listData}
          wrapperStyle={styles.wrapper}
          color={'#A05A88'}
        />
      </View>
      <View style={styles.containerRadio}>
        <RadioButton
          outerWidth={23}
          innerWidth={10}
          borderWidth={1.7}
          data={listData2}
          wrapperStyle={styles.wrapper}
          color={'#A05A88'}
        />
      </View>
      <View style={styles.button}>
        <Button title="Filtrar" onPress={Submit} color="#A05A88" />
      </View>
    </Animatable.View>
  );
}

const listData = [
  {label: 'Todas', value: 1},
  {label: 'Ayer', value: 2},
  {label: 'Esta Semana', value: 3},
];
const listData2 = [
  {label: 'Publicaciones vistas', value: 4},
  {label: 'Publicaciones que te han gustado', value: 5},
];
