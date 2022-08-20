import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import UserProfileInfo from '../../atoms/UserProfileInfo';
import InfoUser from '../../atoms/InfoUser';

export default function ProfileContent({navigation}) {
  const user = auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.containerinfo}>
        <UserProfileInfo info={6} title={'Publicaciones'} />
        <UserProfileInfo info={15} title={'Me gusta'} />
        <UserProfileInfo info={5} title={'Guardados'} />
      </View>
      <InfoUser icon={'mail'} text={'Correo'} info={user.email} />
      <InfoUser
        icon={'phone'}
        text={'Teléfono'}
        info={user.phoneNumber ? user.phoneNumber : user.phoneNumber}
      />
      <InfoUser icon={'map-pin'} text={'Ciudad'} info={'Agrega una ciudad'} />

      <TouchableOpacity
        style={styles.editar}
        onPress={() => navigation.navigate('Configuration')}>
        <Text>Editar</Text>
      </TouchableOpacity>
    </View>
  );
}
