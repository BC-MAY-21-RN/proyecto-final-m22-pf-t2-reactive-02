import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import TwoTexts from '../TwoTexts';

export default function AdoptionInfo({data}) {
  return (
    <View>
      <Text style={styles.title}>Respuestas del usuario</Text>
      <TwoTexts text={'Nombre: '} text2={data.nombreUsuario} styles={styles} />
      <TwoTexts text={'Telefono: '} text2={data.telefono} styles={styles} />
      <TwoTexts text={'Correo: '} text2={data.correo} styles={styles} />
      <TwoTexts text={'Ciudad: '} text2={data.ciudad} styles={styles} />
      <Text style={styles.text}>¿Cuántas mascotas tienes?</Text>
      <Text>{data.mascotas}</Text>
      <Text style={styles.text}>
        ¿Conviven con otras mascotas de forma pacifica?
      </Text>
      <Text>{data.Pacifico}</Text>
      <Text style={styles.text}>
        ¿Cuántas horas al día pasará tu mascota sola?{' '}
      </Text>
      <Text>{data.horas}</Text>
      <Text style={styles.text}>Tu mascota estará mayormente... </Text>
      <Text>{data.lugarMascota}</Text>
    </View>
  );
}
