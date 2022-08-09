import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import TopBar from '../../components/atoms/TopBar';
import ConfigurationHeader from '../../components/atoms/ConfigurationHeader'
import ConfigurationContent from '../../components/molecules/ConfigurationContent'
import Verify from '../../components/atoms/DrawerItems/functions';

export default function ConfigurationScreen({navigation}) {
  const user = auth().currentUser;
  return (
    <View>
      <TopBar navigation={navigation} />
      <ConfigurationHeader 
        image={
          Verify(user.photoURL)
            ? user.photoURL
            : 'https://www.lolitamoda.com/uploads/post/image/61/56.Reglas_de_estilo_que_todo_hombre_debe_conocer.jpg'
        }
        name={Verify(user.displayName) ? user.displayName : 'Funganito'}
      />

    </View>
  );
}
