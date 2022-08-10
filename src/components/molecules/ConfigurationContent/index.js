import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import UserProfileInfo from '../../atoms/UserProfileInfo';
import InfoUser from '../../atoms/InfoUser';

export default function ProfileContent() {
  const user = auth().currentUser;
  return (
    <View style={styles.container}>
      <InfoUser icon={'mail'} text={'Correo'} info={user.email} />
      <InfoUser icon={'phone'} text={'Teléfono'} info={'+52'} />
      <InfoUser icon={'map-pin'} text={'Ciudad'} info={'Agrega una ciudad'} />
      <InfoUser icon={'smile'} text={'Sobre ti: '} info={'¿Qué te gusta?'} />
      <TouchableOpacity style={styles.editar}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
