import React from 'react';
import {View} from 'react-native';
import Header from '../../components/atoms/Header';
import ConfigurationHeader from '../../components/atoms/ConfigurationHeader';
import ConfigurationContent from '../../components/molecules/ConfigurationContent';
import useStateHook from '../../hooks/useStateHook';
import auth from '../../services/auth';
import styles from './styles';

export default function ConfigurationScreen({navigation}) {
  const photo = useStateHook(auth.getPhoto());
  const name = useStateHook(auth.getName());
  return (
    <View style={styles.background}>
      <View style={styles.backgroundTop}>
        <Header navigation={navigation} text={'Edita tu perfil'} />
        <ConfigurationHeader
          image={photo.state}
          name={name.state}
          setPhoto={photo.changeState}
          photo={photo.state}
        />
      </View>
      <ConfigurationContent
        photo={photo.state}
        name={name.state}
        setName={name.changeState}
      />
    </View>
  );
}
