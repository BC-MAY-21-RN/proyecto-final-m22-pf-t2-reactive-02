import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function AdoptionInfo({data, route}) {
  return (
    <View>
      <Text style={styles.title}>Respuestas del usuario</Text>
      <Text>Nombre de usuario: {data.nombreUsuario}</Text>
      <Text>Telefono: {data.telefono}</Text>
      <Text>Correo: {data.correo}</Text>
      <Text>Ciudad: {data.ciudad}</Text>
      <Text>¿Cuántas mascotas tienes? {data.mascotas}</Text>
      <Text>
        ¿Conviven con otras mascotas de forma pacifica? {data.Pacifico}
      </Text>
      <Text>¿Cuántas horas al día pasará tu mascota sola? {data.horas}</Text>
      <Text>Tu mascota estará mayormente... {data.lugarMascota}</Text>
    </View>
  );
}
