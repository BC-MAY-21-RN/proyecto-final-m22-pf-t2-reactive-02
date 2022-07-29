import React from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import functions from '../../components/atoms/DrawerItems/functions';
import styles from './styles';
import ProfileHeader from '../../components/atoms/ProfileHeader';
import ProfileContent from '../../components/molecules/ProfileContent';

const user = auth().currentUser;
export default function ProfileScreen() {
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
      <ProfileContent />
    </View>
  );
}
