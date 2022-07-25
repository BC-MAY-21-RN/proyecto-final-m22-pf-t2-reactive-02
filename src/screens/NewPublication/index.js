import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import ButtonForm from '../../components/atoms/ButtonForm';
import Header from '../../components/atoms/header';

export default function NewPublication({navigation}) {
  return (
    <View style={styles.container}>
      <Header text={'Crear publicación'} navigation={navigation} />
      <TextInput
        multiline
        numberOfLines={15}
        placeholder={'Escribe lo que piensas...'}
        style={styles.textInput}
      />
      <ButtonForm text={'Publicar'} type={true} />
    </View>
  );
}
