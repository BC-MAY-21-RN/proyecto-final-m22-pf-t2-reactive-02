import React from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import ProfileHeader from '../../components/atoms/ProfileHeader';
import ProfileContent from '../../components/molecules/ProfileContent';
import Verify from '../../components/atoms/DrawerItems/functions';

export default function ProfileScreen({navigation}) {
  const user = auth().currentUser;

  return (
    <View style={styles.background}>
      <ProfileHeader
        image={
          Verify(user.photoURL)
            ? user.photoURL
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
        }
        name={Verify(user.displayName) ? user.displayName : 'Funganito'}
      />
      <ProfileContent navigation={navigation} />
    </View>
  );
}
