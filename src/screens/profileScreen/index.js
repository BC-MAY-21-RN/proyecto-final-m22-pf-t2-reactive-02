import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import functions from '../../components/atoms/DrawerItems/functions';
import styles from './styles';
import UserProfileInfo from '../../components/atoms/UserProfileInfo';
import InfoUser from '../../components/InfoUser';
import ProfileHeader from '../../components/atoms/ProfileHeader';

export default function ProfileScreen() {
  const user = auth().currentUser;

  return (
    <View style={styles.background}>
      <ProfileHeader
        image={
          functions.VerifyPhoto()
            ? user.photoURL
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
        }
        name={functions.VerifyName() ? user.displayName : 'Funganito'}
      />
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
          info={'Agrega un teléfono'}
        />
        <InfoUser icon={'map-pin'} text={'Ciudad'} info={'Agrega una ciudad'} />
        <InfoUser
          icon={'smile'}
          text={'Sobre ti: '}
          info={'Agrega información de ti'}
        />
        <TouchableOpacity style={styles.editar}>
          <Text>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
