import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AdoptionText from '../AdoptionText';

export default function AdoptionInfo({data}) {
  return (
    <View>
      <Text style={styles.title}>Respuestas del usuario</Text>
      <AdoptionText title={'Nombre de usuario: '} info={data.nombreUsuario} />
      <AdoptionText title={'Telefono: '} info={data.telefono} />
      <AdoptionText title={'Correo: '} info={data.correo} />
      <AdoptionText title={'Ciudad: '} info={data.ciudad} />
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
