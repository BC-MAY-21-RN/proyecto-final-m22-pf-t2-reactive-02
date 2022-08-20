import React, {useState} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import ConfigurationHeader from '../../components/atoms/ConfigurationHeader';
import ConfigurationContent from '../../components/molecules/ConfigurationContent';
import Header from '../../components/atoms/header';

export default function ConfigurationScreen({navigation}) {
  const user = auth().currentUser;
  const [photo, setPhoto] = useState(user.photoURL);
  const [name, setName] = useState(user.displayName);

  return (
    <View style={styles.background}>
      <View style={styles.backgroundTop}>
        <Header text={'Editar Perfil'} navigation={navigation} />
        <ConfigurationHeader
          image={user.photoURL}
          name={name}
          setPhoto={setPhoto}
          photo={photo}
        />
      </View>
      <ConfigurationContent photo={photo} name={name} setName={setName} />
    </View>
  );
}
