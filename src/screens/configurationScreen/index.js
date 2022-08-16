import React from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import ConfigurationHeader from '../../components/atoms/ConfigurationHeader';
import ConfigurationContent from '../../components/molecules/ConfigurationContent';
import Verify from '../../components/atoms/DrawerItems/functions';
import Header from '../../components/atoms/header';

export default function ConfigurationScreen({navigation}) {
  const user = auth().currentUser;
  return (
    <View style={styles.background}>
      <Header text={'Editar Perfil'} navigation={navigation} />
      <ConfigurationHeader
        image={
          Verify(user.photoURL)
            ? user.photoURL
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
        }
        name={Verify(user.displayName) ? user.displayName : 'Funganito'}
      />
      <ConfigurationContent />
    </View>
  );
}
